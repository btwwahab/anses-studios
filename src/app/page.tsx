"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Synopsis } from "@/components/Synopsis";
import { Characters } from "@/components/Characters";
import { FeaturedPlayer } from "@/components/FeaturedPlayer";
import { WorldAndCharacters } from "@/components/WorldAndCharacters";
import { BehindTheStory } from "@/components/BehindTheStory";
import { SubscribeCTA } from "@/components/SubscribeCTA";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/VideoModal";
import { seriesConfig, Episode } from "@/data/seriesConfig";

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(seriesConfig.featuredEpisode);

  // Open Episode 1 directly
  const handleOpenTeaser = () => {
    setSelectedEpisode(seriesConfig.featuredEpisode);
    setVideoModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-abyss-950 text-sand-100 flex flex-col">
      {/* Top Navigation */}
      <Navbar onOpenTeaser={handleOpenTeaser} />

      {/* Main Single-Page Vertical Flow */}
      <main id="main" className="flex-1">
        {/* Section A: Cinematic Opening / Hero */}
        <Hero onOpenTeaser={handleOpenTeaser} />

        {/* Section B: Enter The Series / Premise */}
        <Synopsis />

        <Characters />

        {/* Section C: Episode 1 Showcase */}
        <FeaturedPlayer
          onOpenCinemaMode={(ep) => {
            setSelectedEpisode(ep);
            setVideoModalOpen(true);
          }}
        />

        {/* Section D: The World, Characters & Lore */}
        <WorldAndCharacters />

        {/* Section E: Studio Vision & Pipeline */}
        <BehindTheStory />

        {/* Section F: The Next Chapter / Subscribe */}
        <SubscribeCTA onOpenTeaser={handleOpenTeaser} />
      </main>

      {/* Section G: Minimal Editorial Footer */}
      <Footer />

      {/* Global Theatrical Video Player Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        episode={selectedEpisode}
      />
    </div>
  );
}
