"use client";

import React from "react";
import Image from "next/image";
import { Play, Compass, ChevronDown } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";

interface HeroProps {
  onOpenTeaser: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTeaser }) => {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] sm:min-h-screen w-full flex flex-col justify-between items-center pt-24 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Media: Pristine 8K Ultra HD Cinematic Master Still (No video playing) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-banner-8k.jpg"
          alt="AZANIRA — The Azure Titan Approaching the Ancient Citadel"
          fill
          priority
                    className="object-cover object-center scale-100"
          sizes="100vw"
        />

        {/* Light scrim: keep the key art prominent, only fade the edges for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/95 via-abyss-950/30 to-abyss-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,5,8,0.6)_0%,transparent_65%)]" />
      </div>

      {/* Main Center Cinematic Showcase */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto text-center flex flex-col items-center justify-center py-6 sm:py-12">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.08em] sm:tracking-[0.14em] text-gold-gradient select-none uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          {seriesConfig.series.title}
        </h1>

        {/* Cinematic Tagline */}
        <p className="mt-4 sm:mt-6 font-serif font-semibold text-lg sm:text-2xl md:text-3xl text-white max-w-3xl leading-snug tracking-[0.08em] px-3 [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_0_24px_rgba(0,0,0,0.9)]">
          &ldquo;{seriesConfig.series.tagline}&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none px-4">
          {/* Primary CTA: Watch Episode 1 */}
          <button
            onClick={onOpenTeaser}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-abyss-950 font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 shadow-xl shadow-gold-500/25 active:scale-95"
          >
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-abyss-950/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-abyss-950 text-abyss-950 translate-x-0.5" />
            </span>
            <span>Watch Episode 1</span>
          </button>

          {/* Secondary CTA: Explore Series */}
          <a
            href="#series"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-abyss-950/80 hover:bg-abyss-900 border border-gold-500/30 hover:border-gold-500/60 text-sand-100 hover:text-gold-300 font-medium text-xs sm:text-sm tracking-[0.14em] uppercase transition-all shadow-lg shadow-black/50 active:scale-95"
          >
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Explore The Story</span>
          </a>
        </div>
      </div>

      <a
        href="#series"
        className="relative z-10 flex flex-col items-center gap-1 text-sand-200 hover:text-gold-400 transition-colors py-1"
        aria-label="Scroll down to explore the series"
      >
        <span className="text-[11px] tracking-[0.25em] uppercase font-medium text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">Scroll to Discover</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-gold-400" />
      </a>
    </section>
  );
};
