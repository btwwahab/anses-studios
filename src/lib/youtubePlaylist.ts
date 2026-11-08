// Reads the video list of a public/unlisted YouTube playlist in the browser, so the site
// picks up new uploads without a rebuild. No API key: the IFrame Player API exposes the
// playlist's video IDs, and YouTube's oEmbed endpoint (CORS-enabled) supplies the titles.

export interface PlaylistVideo {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  duration?: string; // "11:46"
  views?: number;
  publishedAt?: string;
}

export interface ChannelStats {
  subscribers?: number;
  videos: number;
}

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<any> | null = null;

const loadIframeApi = (): Promise<any> => {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        resolve(window.YT);
      };
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onerror = () => reject(new Error("YouTube API failed to load"));
      document.head.appendChild(tag);
    });
  }
  return apiPromise;
};

const getPlaylistIds = async (playlistId: string): Promise<string[]> => {
  const YT = await loadIframeApi();
  return new Promise((resolve, reject) => {
    const holder = document.createElement("div");
    holder.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;overflow:hidden";
    const target = document.createElement("div");
    holder.appendChild(target);
    document.body.appendChild(holder);

    let player: any;
    const done = (ids: string[] | Error) => {
      clearTimeout(timer);
      try {
        player?.destroy();
      } catch {}
      holder.remove();
      ids instanceof Error ? reject(ids) : resolve(ids);
    };
    const timer = setTimeout(() => done(new Error("Playlist timed out")), 10000);

    player = new YT.Player(target, {
      width: 1,
      height: 1,
      host: "https://www.youtube-nocookie.com",
      playerVars: { listType: "playlist", list: playlistId },
      events: {
        onReady: () => {
          let tries = 0;
          const poll = () => {
            const ids: string[] | null = player.getPlaylist?.();
            if (ids && ids.length) return done(ids);
            if (++tries > 20) return done(new Error("Playlist is empty or private"));
            setTimeout(poll, 300);
          };
          poll();
        },
        onError: () => done(new Error("Playlist could not be loaded")),
      },
    });
  });
};

const getTitle = async (id: string): Promise<string> => {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&format=json`
    );
    const data = await res.json();
    return data.title as string;
  } catch {
    return "";
  }
};

// Official YouTube Data API v3 (needs NEXT_PUBLIC_YOUTUBE_API_KEY, restricted to the site's domain)
const API = "https://www.googleapis.com/youtube/v3";

const formatDuration = (iso: string) => {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return "";
  const [h, min, sec] = [Number(m[1] ?? 0), Number(m[2] ?? 0), Number(m[3] ?? 0)];
  const ss = String(sec).padStart(2, "0");
  return h ? `${h}:${String(min).padStart(2, "0")}:${ss}` : `${min}:${ss}`;
};

// First readable paragraph of a YouTube description, without the markdown-style title line
export const summarize = (text?: string) => {
  if (!text) return "";
  const paragraphs = text
    .replace(/\*+/g, "")
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter((p) => p && !/^#|^https?:\/\//.test(p) && !p.includes(" | "));
  return paragraphs.find((p) => p.length >= 60) ?? paragraphs[0] ?? "";
};

const fetchViaDataApi = async (playlistId: string, key: string): Promise<PlaylistVideo[]> => {
  const ids: string[] = [];
  let pageToken = "";
  for (let page = 0; page < 4; page++) {
    const res = await fetch(
      `${API}/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${key}` +
        (pageToken ? `&pageToken=${pageToken}` : "")
    );
    if (!res.ok) throw new Error(`YouTube API error ${res.status}`);
    const data = await res.json();
    for (const item of data.items ?? []) {
      const sn = item.snippet;
      if (!sn?.resourceId?.videoId || /^(private|deleted) video$/i.test(sn.title)) continue;
      ids.push(sn.resourceId.videoId);
    }
    if (!data.nextPageToken) break;
    pageToken = data.nextPageToken;
  }

  // Full details (duration, views, real publish date, description) for every video
  const byId = new Map<string, PlaylistVideo>();
  for (let i = 0; i < ids.length; i += 50) {
    const chunk = ids.slice(i, i + 50);
    const res = await fetch(`${API}/videos?part=snippet,contentDetails,statistics&id=${chunk.join(",")}&key=${key}`);
    if (!res.ok) throw new Error(`YouTube API error ${res.status}`);
    const data = await res.json();
    for (const v of data.items ?? []) {
      const t = v.snippet.thumbnails ?? {};
      byId.set(v.id, {
        id: v.id,
        title: v.snippet.title,
        description: summarize(v.snippet.description),
        thumbnail: (t.maxres ?? t.standard ?? t.high ?? t.medium)?.url,
        duration: formatDuration(v.contentDetails?.duration ?? ""),
        views: v.statistics?.viewCount !== undefined ? Number(v.statistics.viewCount) : undefined,
        publishedAt: v.snippet.publishedAt,
      });
    }
  }
  return ids.map((id) => byId.get(id)).filter((v): v is PlaylistVideo => !!v);
};

export const fetchChannelStats = async (handle: string): Promise<ChannelStats | null> => {
  const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(`${API}/channels?part=statistics&forHandle=${encodeURIComponent(handle)}&key=${key}`);
    if (!res.ok) return null;
    const st = (await res.json()).items?.[0]?.statistics;
    if (!st) return null;
    return {
      subscribers: st.hiddenSubscriberCount ? undefined : Number(st.subscriberCount),
      videos: Number(st.videoCount),
    };
  } catch {
    return null;
  }
};

export const fetchPlaylistVideos = async (playlistId: string): Promise<PlaylistVideo[]> => {
  const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  if (key) {
    try {
      const list = await fetchViaDataApi(playlistId, key);
      if (list.length) return list;
    } catch {
      // fall through to the keyless method
    }
  }
  const ids = await getPlaylistIds(playlistId);
  const titles = await Promise.all(ids.map(getTitle));
  return ids.map((id, i) => ({ id, title: titles[i] }));
};

// "AZANIRA Episode 2 | Port of Bissau | Mystery Series" -> label "Episode 2", name "Port of Bissau"
export const describeVideo = (title: string) => {
  const episode = title.match(/episode\s*(\d+)/i);
  const label = episode ? `Episode ${episode[1].padStart(2, "0")}` : /teaser|trailer/i.test(title) ? "Teaser" : "Video";
  const parts = title.split("|").map((p) => p.trim()).filter(Boolean);
  const name = parts.find((p) => !/^azanira$/i.test(p) && !/^azanira\s+episode/i.test(p)) ?? title;
  return { label, name };
};
