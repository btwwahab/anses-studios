"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Youtube, Sparkles, Film, ListVideo } from "lucide-react";
import { seriesConfig, Episode } from "@/data/seriesConfig";
import { fetchPlaylistVideos, describeVideo } from "@/lib/youtubePlaylist";

interface FeaturedPlayerProps {
  onOpenCinemaMode: (episode: Episode) => void;
}

interface Video {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  duration?: string;
  views?: number;
  publishedAt?: string;
}

const thumbOf = (id: string, fromApi?: string) => {
  const known = seriesConfig.episodes.find((e) => e.videoId === id);
  return known ? known.thumbnail : fromApi ?? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
};

// Fallback and descriptions come from the config; the live YouTube playlist overrides the list
const fallbackVideos: Video[] = seriesConfig.episodes.map((e) => ({
  id: e.videoId as string,
  title: e.id === "teaser" ? "AZANIRA | Official Teaser" : `AZANIRA Episode ${Number(e.number)} | ${e.title.replace(/^Episode \w+:\s*/, "")}`,
}));

export const FeaturedPlayer: React.FC<FeaturedPlayerProps> = ({ onOpenCinemaMode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [videos, setVideos] = useState<Video[]>(fallbackVideos);
  const [selectedId, setSelectedId] = useState<string>(fallbackVideos[0].id);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  // Pull the live playlist once the section is close to the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        fetchPlaylistVideos(seriesConfig.studio.playlistId)
          .then((list) => {
            if (!list.length) return;
            setVideos(list.map((v, i) => ({ id: v.id, description: v.description, thumbnail: v.thumbnail, duration: v.duration, views: v.views, publishedAt: v.publishedAt, title: v.title || fallbackVideos.find((f) => f.id === v.id)?.title || `Video ${i + 1}` })));
            setSelectedId((cur) => (list.some((v) => v.id === cur) ? cur : list[0].id));
          })
          .catch(() => {});
      },
      { rootMargin: "600px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const selected = videos.find((v) => v.id === selectedId) ?? videos[0];
  const info = describeVideo(selected.title);
  const known = seriesConfig.episodes.find((e) => e.videoId === selected.id);
  const youtubeUrl = `https://www.youtube.com/watch?v=${selected.id}`;

  const asEpisode = (v: Video): Episode => ({
    id: v.id,
    number: "",
    title: describeVideo(v.title).name,
    subtitle: "",
    status: "released",
    statusLabel: "Now Streaming",
    videoId: v.id,
    youtubeUrl: `https://www.youtube.com/watch?v=${v.id}`,
    thumbnail: thumbOf(v.id, v.thumbnail),
    description: "",
    synopsis: "",
  });

  const selectVideo = (v: Video) => {
    setSelectedId(v.id);
    setIsPlayingInline(true);
  };

  return (
    <section ref={sectionRef} id="episode" className="relative py-12 sm:py-20 bg-abyss-950 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>NOW STREAMING</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-sand-100">
            WATCH THE <span className="text-gold-gradient">SERIES</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-sand-300 max-w-xl font-sans leading-relaxed">
            The journey begins aboard the Azure Titan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Player */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-gold-500/20 bg-abyss-900 shadow-2xl shadow-black">
            <div className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 bg-abyss-950 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="flex items-center gap-1.5 sm:gap-2 text-gold-400 font-semibold tracking-wider text-[11px] sm:text-xs min-w-0">
                <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 flex-shrink-0" />
                <span className="truncate">{info.name}</span>
              </span>

              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs text-sand-200 hover:text-white bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 rounded-lg transition-colors flex-shrink-0"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>Watch on YouTube</span>
              </a>
            </div>

            <div className="relative aspect-video w-full bg-black flex items-center justify-center group overflow-hidden">
              {isPlayingInline ? (
                <iframe
                  key={selected.id}
                  src={`https://www.youtube-nocookie.com/embed/${selected.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={`${info.name} - Anses Studios`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbOf(selected.id, selected.thumbnail)}
                    alt={`${info.name} thumbnail`}
                    onError={(e) => {
                      e.currentTarget.src = `https://i.ytimg.com/vi/${selected.id}/hqdefault.jpg`;
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/80 via-transparent to-abyss-950/30" />

                  <button
                    onClick={() => setIsPlayingInline(true)}
                    className="relative z-10 flex flex-col items-center gap-3.5 group/btn focus:outline-none"
                    aria-label={`Play ${info.name}`}
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-abyss-950 flex items-center justify-center shadow-2xl shadow-gold-500/50 group-hover/btn:scale-110 group-hover/btn:from-gold-300 group-hover/btn:to-gold-400 transition-all duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-abyss-950 translate-x-1" />
                    </div>
                    <span className="text-xs sm:text-sm font-serif font-bold tracking-[0.2em] text-white uppercase px-3 py-1 rounded-full bg-abyss-950/70 backdrop-blur-sm group-hover/btn:text-gold-300 transition-colors">
                      Click to Play
                    </span>
                  </button>
                </>
              )}
            </div>

            <div className="p-4 sm:p-6 bg-abyss-950 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[11px] font-mono tracking-[0.2em] text-gold-400 uppercase">
                  {info.label}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-sand-100">{info.name}</h3>
                {(selected.duration || selected.views !== undefined || selected.publishedAt) && (
                  <p className="text-[11px] font-mono tracking-wider text-sand-300">
                    {[
                      selected.duration,
                      selected.views !== undefined ? `${selected.views.toLocaleString("en-US")} views` : "",
                      selected.publishedAt
                        ? new Date(selected.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                        : "",
                    ]
                      .filter(Boolean)
                      .join("  ·  ")}
                  </p>
                )}
                {(selected.description || known?.description) && (
                  <p className="text-xs sm:text-sm text-sand-300 font-sans leading-relaxed line-clamp-3">
                    {selected.description || known?.description}
                  </p>
                )}
              </div>

              <button
                onClick={() => onOpenCinemaMode(asEpisode(selected))}
                className="w-full md:w-auto flex-shrink-0 min-h-[44px] flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider text-abyss-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-full transition-all shadow-md shadow-gold-500/20 active:scale-95"
              >
                FULLSCREEN THEATER
              </button>
            </div>
          </div>

          {/* Playlist */}
          <aside className="lg:col-span-4 lg:relative">
            <div className="lg:absolute lg:inset-0 flex flex-col rounded-2xl border border-white/10 bg-abyss-900/60 overflow-hidden">
            <div className="px-4 py-3.5 bg-abyss-950 border-b border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-mono font-semibold tracking-wider">
                <ListVideo className="w-4 h-4" />
                <span>AZANIRA PLAYLIST</span>
              </div>
              <span className="text-[11px] font-mono text-sand-300">{videos.length} videos</span>
            </div>

            <ul className="flex-1 min-h-0 divide-y divide-white/5 max-h-[26rem] lg:max-h-none overflow-y-auto overscroll-contain [scrollbar-width:thin]">
              {videos.map((v) => {
                const isActive = v.id === selected.id;
                const d = describeVideo(v.title);
                return (
                  <li key={v.id}>
                    <button
                      onClick={() => selectVideo(v)}
                      aria-current={isActive}
                      className={`w-full flex items-center gap-3 p-3 text-left transition-colors ${
                        isActive ? "bg-gold-500/10" : "hover:bg-white/5"
                      }`}
                    >
                      <div className="relative w-28 sm:w-32 aspect-video flex-shrink-0 rounded-lg overflow-hidden border border-white/10 bg-abyss-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={thumbOf(v.id, v.thumbnail)}
                          alt=""
                          onError={(e) => {
                            e.currentTarget.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
                          }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Play className="w-5 h-5 fill-white text-white" />
                        </div>
                        {v.duration && (
                          <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                            {v.duration}
                          </span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <span className="text-[10px] font-mono tracking-wider uppercase block text-gold-400">
                          {d.label}
                          {isActive && " · Now playing"}
                        </span>
                        <span className="font-serif text-sm font-bold text-sand-100 leading-snug block">{d.name}</span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href={seriesConfig.studio.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center gap-2 px-4 py-3 border-t border-white/10 text-xs font-mono tracking-wider text-sand-200 hover:text-gold-300 hover:bg-white/5 transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>OPEN FULL PLAYLIST ON YOUTUBE</span>
            </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
