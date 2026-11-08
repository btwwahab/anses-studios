"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock, Sparkles, AlertCircle, ArrowUpRight } from "lucide-react";
import { seriesConfig, Episode } from "@/data/seriesConfig";

interface EpisodesProps {
  onPlayEpisode: (episode: Episode) => void;
}

export const Episodes: React.FC<EpisodesProps> = ({ onPlayEpisode }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const episodes = seriesConfig.episodes;

  return (
    <section id="episodes" className="relative py-24 sm:py-32 bg-abyss-950 overflow-hidden border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-500 uppercase mb-3">
              <span>03</span>
              <span className="w-6 h-px bg-gold-500/40" />
              <span>THE ARCHIVE & TIMELINE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sand-100">
              EPISODES & <span className="text-gold-gradient">CHAPTERS</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sand-300">PROLOGUE RELEASED · CHAPTER 01 IN PREPARATION</span>
          </div>
        </div>

        {/* Asymmetric Chapters Presentation */}
        <div className="mt-14 space-y-8">
          {episodes.map((ep, idx) => {
            const isReleased = ep.status === "released";
            const isEven = idx % 2 === 0;

            return (
              <div
                key={ep.id}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                  isReleased
                    ? "border-gold-500/30 bg-abyss-900/60 hover:border-gold-500/60 shadow-xl shadow-black/60"
                    : "border-white/5 bg-abyss-900/30 hover:border-white/10"
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8 ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}>
                  {/* Thumbnail / Frame Media (5 Cols) */}
                  <div className={`relative aspect-video lg:aspect-[16/10] w-full rounded-xl overflow-hidden lg:col-span-5 ${
                    isEven ? "" : "lg:col-start-8"
                  }`}>
                    <Image
                      src={ep.thumbnail}
                      alt={ep.title}
                      fill
                      className={`object-cover object-center transition-transform duration-700 ${
                        isReleased ? "group-hover:scale-105" : "grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100"
                      }`}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-transparent to-transparent opacity-60" />

                    {/* Top status indicator tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold ${
                          isReleased
                            ? "bg-gold-500 text-abyss-950 shadow-md"
                            : "bg-abyss-950/80 backdrop-blur-md text-sand-300 border border-white/10"
                        }`}
                      >
                        {isReleased && <Sparkles className="w-3 h-3 fill-abyss-950" />}
                        {ep.statusLabel}
                      </span>
                    </div>

                    {/* Play button overlay for released episode */}
                    {isReleased && (
                      <button
                        onClick={() => onPlayEpisode(ep)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                        aria-label={`Play ${ep.title}`}
                      >
                        <div className="w-14 h-14 rounded-full bg-gold-400 text-abyss-950 flex items-center justify-center shadow-xl shadow-gold-500/50 transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-abyss-950 translate-x-0.5" />
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Editorial Details & Metadata (7 Cols) */}
                  <div className={`lg:col-span-7 flex flex-col justify-between h-full ${
                    isEven ? "" : "lg:col-start-1"
                  }`}>
                    <div>
                      {/* Chapter Identification */}
                      <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-gold-500/90 mb-2">
                        <span className="text-sm font-bold">CHAPTER {ep.number}</span>
                        <span className="w-1 h-1 rounded-full bg-gold-500/60" />
                        {ep.duration && (
                          <span className="flex items-center gap-1 text-sand-400">
                            <Clock className="w-3 h-3 text-gold-500" />
                            {ep.duration}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sand-100 tracking-tight group-hover:text-gold-300 transition-colors">
                        {ep.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="mt-1 font-serif italic text-sm sm:text-base text-gold-subtle tracking-wide">
                        {ep.subtitle}
                      </p>

                      {/* Description & Synopsis */}
                      <p className="mt-4 text-xs sm:text-sm text-sand-300 font-sans leading-relaxed">
                        {ep.description}
                      </p>

                      <p className="mt-2 text-xs text-sand-400/80 font-sans leading-relaxed italic border-l-2 border-gold-500/30 pl-3">
                        {ep.synopsis}
                      </p>
                    </div>

                    {/* Actions and Status Footer */}
                    <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                      {isReleased ? (
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                          <button
                            onClick={() => onPlayEpisode(ep)}
                            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-abyss-950 font-semibold text-xs tracking-wider uppercase shadow-md shadow-gold-500/20 active:scale-95 transition-all"
                          >
                            <Play className="w-3.5 h-3.5 fill-abyss-950" />
                            <span>Watch Chapter Now</span>
                          </button>

                          <a
                            href={ep.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-sand-200 text-xs font-mono tracking-wider transition-colors active:scale-95"
                          >
                            <span>YouTube Stream</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-xs font-mono text-sand-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60 animate-pulse" />
                          <span>Status: In Studio Production Pipeline</span>
                        </div>
                      )}

                      <div className="text-[10px] font-mono tracking-wider text-sand-400/60 uppercase">
                        AI CINEMATIC EPISODE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
