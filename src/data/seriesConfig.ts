export interface Episode {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  status: 'released' | 'upcoming' | 'in_production';
  statusLabel: string;
  duration?: string;
  videoId?: string;
  youtubeUrl?: string;
  thumbnail: string;
  description: string;
  synopsis: string;
  releaseDate?: string;
  featured?: boolean;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  quote: string;
  description: string;
  image: string;
  affiliation: string;
}

export interface StoryWorldLocation {
  id: string;
  title: string;
  tag: string;
  coordinates?: string;
  description: string;
  image: string;
}

export interface ProductionStep {
  number: string;
  title: string;
  category: string;
  description: string;
  deliverable: string;
}

export interface SeriesConfig {
  studio: {
    name: string;
    tagline: string;
    description: string;
    youtubeHandle: string;
    youtubeUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    tiktokUrl: string;
    featuredVideoId: string;
    featuredVideoUrl: string;
    playlistId: string;
    playlistUrl: string;
    avatarUrl: string;
    establishedYear: number;
  };
  series: {
    title: string;
    kicker: string;
    tagline: string;
    shortPitch: string;
    fullSynopsis: string;
    themes: string[];
    genre: string[];
    premiereStatus: string;
    primaryVessel: string;
    masterPoster: string;
    heroImage: string;
  };
  featuredEpisode: Episode;
  episodes: Episode[];
  characters: Character[];
  storyWorld: StoryWorldLocation[];
  productionPipeline: ProductionStep[];
  galleryFrames: {
    id: string;
    title: string;
    timecode: string;
    scene: string;
    image: string;
    masterImage?: string;
  }[];
}

export const seriesConfig: SeriesConfig = {
  studio: {
    name: "ANSES STUDIOS",
    tagline: "Original AI Cinematic Storytelling",
    description:
      "A creative film production studio dedicated to original AI cinematic storytelling. We craft extraordinary worlds through mystery, adventure, suspense, and unforgettable characters.",
    youtubeHandle: "@anses_studios",
    youtubeUrl: "https://www.youtube.com/@anses_studios",
    facebookUrl: "https://www.facebook.com/AnsesStudios",
    instagramUrl: "https://www.instagram.com/ansesstudios",
    tiktokUrl: "https://www.tiktok.com/@ansesstudios", // Ready for handle
    featuredVideoId: "U3ZJzfxBbU4",
    featuredVideoUrl: "https://www.youtube.com/watch?v=U3ZJzfxBbU4",
    playlistId: "PLZgnlbnhNSW4",
    playlistUrl: "https://www.youtube.com/playlist?list=PLZgnlbnhNSW4",
    avatarUrl:
      "https://yt3.googleusercontent.com/xWam8oGxJiHwj2615wWUgRi9wPrMTkm2F5gOBw3UshXy3uchsIhkXgqpFMU83g2Bvo2yDb-qOQ=s900-c-k-c0x00ffffff-no-rj",
    establishedYear: 2026,
  },
  series: {
    title: "AZANIRA",
    kicker: "AN ORIGINAL AI CINEMATIC SERIES",
    tagline: "Some mysteries were never meant to be found.",
    shortPitch:
      "What begins as an academic search for a forgotten island becomes a journey into the unknown. When a group of university researchers and their history professor set sail aboard the Azure Titan, ancient legends and unsettling discoveries challenge everything they know.",
    fullSynopsis:
      "For thirty years, Professor Henrick pursued whispers of an uncharted island buried beneath centuries of forgotten maritime folklore and ancient African tribal records. When Eric and a cohort of ambitious young scholars join the expedition, they believe they are conducting an advanced academic thesis. But aboard the luxury cruise liner Azure Titan, navigating past the treacherous port of Bissau and heading into open Atlantic tempests, the voyage turns perilous. Cryptic warnings from shadowy figures, violent sea anomalies, and the emergence of Azanira's ancient citadel reveal a haunting truth: you can map the world without ever truly understanding it.",
    themes: [
      "Ancient African Tribal Mysteries",
      "Uncharted Maritime Expeditions",
      "Academic Obsession vs. The Unknown",
      "Lost Relics & Civilization Keepers",
    ],
    genre: ["Cinematic Mystery", "Adventure", "Suspense", "Epic Drama"],
    premiereStatus: "Episode One Streaming Now",
    primaryVessel: "Azure Titan",
    masterPoster: "/assets/images/azanira-poster-enhanced.jpg",
    heroImage: "/assets/images/hero-banner-8k.jpg",
  },
  featuredEpisode: {
    id: "episode-1",
    number: "EPISODE 01",
    title: "AZANIRA Episode 1: The Journey Begins",
    subtitle: "Mystery Adventure Series",
    status: "released",
    statusLabel: "Now Streaming",
    videoId: "U3ZJzfxBbU4",
    youtubeUrl: "https://www.youtube.com/watch?v=U3ZJzfxBbU4",
    thumbnail: "/assets/images/azanira-episode1-thumb.jpg",
    description:
      "The expedition begins. Eric and his fellow scholars set sail aboard the Azure Titan in search of a forgotten island.",
    synopsis:
      "The first chapter of the Azanira expedition, from the lecture hall to the open Atlantic aboard the Azure Titan.",
    releaseDate: "Watch Now",
    featured: true,
  },
  episodes: [
    {
      id: "ep-01",
      number: "01",
      title: "Episode One: The Journey Begins",
      subtitle: "Mystery Adventure Series",
      status: "released",
      statusLabel: "Streaming Now",
      videoId: "U3ZJzfxBbU4",
      youtubeUrl: "https://www.youtube.com/watch?v=U3ZJzfxBbU4",
      thumbnail: "/assets/images/azanira-episode1-thumb.jpg",
      description:
        "The expedition begins. Eric and his fellow scholars set sail aboard the Azure Titan in search of a forgotten island.",
      synopsis:
        "The first chapter of the Azanira expedition, from the lecture hall to the open Atlantic aboard the Azure Titan.",
      releaseDate: "Watch Now",
      featured: true,
    },
    {
      id: "teaser",
      number: "00",
      title: "Official Teaser",
      subtitle: "A Cinematic Mystery Adventure",
      status: "released",
      statusLabel: "Streaming Now",
      videoId: "hwf5i9owe1s",
      youtubeUrl: "https://www.youtube.com/watch?v=hwf5i9owe1s",
      thumbnail: "/assets/images/azanira-teaser-thumb.jpg",
      description:
        "The official teaser introduces the expedition aboard the Azure Titan and the first glimpse of Azanira.",
      synopsis:
        "From lecture halls to the stormy deck of the Azure Titan in the open Atlantic.",
      releaseDate: "Watch Now",
      featured: false,
    },
  ],
  characters: [
    {
      id: "eric",
      name: "Eric",
      role: "Protagonist",
      quote: "But he doesn't believe Supernaturals & Mysteries",
      description: "Young, intuitive, and unwilling to accept conventional historic boundaries.",
      image: "/assets/characters/eric-8k.jpg",
      affiliation: "Expedition Core Team",
    },
    {
      id: "sara",
      name: "Sarah",
      role: "History Researcher",
      quote: "She is part of the expedition",
      description: "A meticulous researcher whose work confirms the coordinates.",
      image: "/assets/characters/clara-8k.jpg",
      affiliation: "Academic Research Division",
    },
    {
      id: "captain",
      name: "Sameer",
      role: "Azure Titan's Captain",
      quote: "He warns Eric something waits ahead",
      description: "A maritime veteran responsible for everyone aboard the Azure Titan.",
      image: "/assets/characters/captain-8k.jpg",
      affiliation: "Azure Titan Command",
    },
    {
      id: "professor",
      name: "Professor Henrick",
      role: "Senior Historian",
      quote: "I've spent thirty years searching for this.",
      description: "A distinguished scholar who staked his reputation on a forgotten African civilization.",
      image: "/assets/characters/professor-8k.jpg",
      affiliation: "University Department of History",
    },
    {
      id: "thabo",
      name: "Thabo",
      role: "Azure Titan's survivor",
      quote: "You'll know if you be alive",
      description: "A weathered sailor who knows the legends and currents of the Atlantic shelf.",
      image: "/assets/characters/mariner-8k.jpg",
      affiliation: "Maritime Logistics",
    },
    {
      id: "priestess",
      name: "Guardian of the Sacred Citadel",
      role: "Azure Titan's passenger",
      quote: "Some mysteries were never meant to be found.",
      description: "The mystical custodian of Azanira's ancient sanctuary.",
      image: "/assets/characters/priestess-8k.jpg",
      affiliation: "Keepers of Azanira",
    },
  ],
  storyWorld: [
    {
      id: "azure-titan",
      title: "The Azure Titan",
      tag: "THE EXPEDITION FLAGSHIP",
      coordinates: "Departed West Atlantic Coordinates",
      description:
        "A towering cruise liner repurposed for a deep ocean exploratory voyage. Equipped with advanced navigation suites that fail the moment the ship nears the Azanira magnetic vortex.",
      image: "/assets/world/azure-titan-8k.jpg",
    },
    {
      id: "bissau-gate",
      title: "Port of Bissau",
      tag: "THE LAST KNOWN HABITATION",
      coordinates: "11°51'N 15°35'W",
      description:
        "The historic West African port where maritime charts end and oral legends begin. Here, local elders offer the final warning before the ocean turns hostile.",
      image: "/assets/world/port-bissau-8k.jpg",
    },
    {
      id: "ancient-relics",
      title: "The Navigational Relics",
      tag: "ARCHIVAL ARTIFACTS",
      coordinates: "30-Year University Collection",
      description:
        "Hand-inscribed 18th-century parchment maps, brass astrolabes, and ancient tribal talismans that mark the intersection of ocean currents and legendary islands.",
      image: "/assets/world/ancient-relics-8k.jpg",
    },
    {
      id: "citadel-azanira",
      title: "The Citadel of Azanira",
      tag: "THE FORGOTTEN MOUNTAIN ISLAND",
      coordinates: "Uncharted Coordinates",
      description:
        "A monumental volcanic island fortress crowned with ancient ramparts and perpetually shrouded in electrical mist. Said to protect secrets that predate recorded civilization.",
      image: "/assets/world/citadel-8k.jpg",
    },
  ],
  productionPipeline: [
    {
      number: "01",
      title: "World Lore & Script Architecture",
      category: "NARRATIVE DESIGN",
      description:
        "Deep research into maritime history, ancient African legends, character arcs, and high-tension pacing to craft an episodic mystery with cinematic weight.",
      deliverable: "Episodic screenplays, scene-by-scene blocking, dialogue transcripts.",
    },
    {
      number: "02",
      title: "AI Cinematic Generation & Previz",
      category: "VISUAL CRAFT",
      description:
        "Directing cutting-edge AI visual pipelines to produce consistent characters, grand oceanic environments, atmospheric storm dynamics, and 4K cinema-grade plates.",
      deliverable: "4K native render plates, multi-angle camera rehearsals, visual coherence.",
    },
    {
      number: "03",
      title: "Editorial Rhythms & Soundscapes",
      category: "POST-PRODUCTION",
      description:
        "Tight editorial assembly matching cinematic feature trailers, synchronized with original suspenseful orchestral themes, foley, and ocean acoustics.",
      deliverable: "Full audio mix, voice staging, Foley engineering, suspense score.",
    },
    {
      number: "04",
      title: "Color Grading & 4K Master Release",
      category: "STUDIO FINISHING",
      description:
        "Grading in deep abyssal teal, storm ink, and parchment gold. Finalizing YouTube 4K Ultra HD delivery for global viewers across devices.",
      deliverable: "DCI-P3 calibrated color profile, high-bitrate YouTube premiere master.",
    },
  ],
  galleryFrames: [
    {
      id: "f1",
      title: "The Open Atlantic Horizon",
      timecode: "00:08",
      scene: "Prologue Opening",
      image: "/assets/stills/optimized/hero_banner_exact.jpg",
      masterImage: "/assets/stills/hero_banner_exact.jpg",
    },
    {
      id: "f2",
      title: "The Thesis on Ancient Africa",
      timecode: "00:22",
      scene: "University Lecture Hall",
      image: "/assets/stills/optimized/still_lecture_thesis.jpg",
      masterImage: "/assets/stills/still_lecture_thesis.jpg",
    },
    {
      id: "f3",
      title: "Mapped vs. Understood Debate",
      timecode: "00:37",
      scene: "Eric's Challenge",
      image: "/assets/stills/optimized/still_eric_debate.jpg",
      masterImage: "/assets/stills/still_eric_debate.jpg",
    },
    {
      id: "f4",
      title: "Thirty Years of Archival Maps",
      timecode: "00:50",
      scene: "The Relic Parchment",
      image: "/assets/stills/optimized/still_ancient_map.jpg",
      masterImage: "/assets/stills/still_ancient_map.jpg",
    },
    {
      id: "f5",
      title: "The Professor's Warning",
      timecode: "01:05",
      scene: "Archival Room",
      image: "/assets/stills/optimized/still_professor_warning.jpg",
      masterImage: "/assets/stills/still_professor_warning.jpg",
    },
    {
      id: "f6",
      title: "Azure Titan Cutting the Waves",
      timecode: "01:15",
      scene: "The Expedition Begins",
      image: "/assets/stills/optimized/hero_azure_titan_exact.jpg",
      masterImage: "/assets/stills/hero_azure_titan_exact.jpg",
    },
    {
      id: "f7",
      title: "Captain Vance on the Bridge",
      timecode: "01:17",
      scene: "Deck Command",
      image: "/assets/stills/optimized/still_captain_bridge.jpg",
      masterImage: "/assets/stills/still_captain_bridge.jpg",
    },
    {
      id: "f8",
      title: "Warning at Port of Bissau",
      timecode: "01:25",
      scene: "Nightfall in Bissau",
      image: "/assets/stills/optimized/still_port_bissau.jpg",
      masterImage: "/assets/stills/still_port_bissau.jpg",
    },
    {
      id: "f9",
      title: "Night Voyage into Uncharted Waters",
      timecode: "01:42",
      scene: "Atlantic Midnight",
      image: "/assets/stills/optimized/still_night_voyage.jpg",
      masterImage: "/assets/stills/still_night_voyage.jpg",
    },
    {
      id: "f10",
      title: "The Tempest & Storm Squalls",
      timecode: "01:57",
      scene: "Squall Emergency",
      image: "/assets/stills/optimized/still_storm_squall.jpg",
      masterImage: "/assets/stills/still_storm_squall.jpg",
    },
    {
      id: "f11",
      title: "Emergency Evacuation on Deck",
      timecode: "02:10",
      scene: "Hold Fast",
      image: "/assets/stills/optimized/still_lifeboat_deck.jpg",
      masterImage: "/assets/stills/still_lifeboat_deck.jpg",
    },
    {
      id: "f12",
      title: "The Citadel in the Mist",
      timecode: "02:22",
      scene: "First Sight of Azanira",
      image: "/assets/stills/optimized/still_azanira_citadel.jpg",
      masterImage: "/assets/stills/still_azanira_citadel.jpg",
    },
  ],
};
