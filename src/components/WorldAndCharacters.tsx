"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";

export const WorldAndCharacters: React.FC = () => {

  return (
    <section id="world" className="relative py-12 sm:py-20 bg-abyss-900/40 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sea-800/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-500 uppercase mb-3">
              <span>03</span>
              <span className="w-6 h-px bg-gold-500/40" />
              <span>LOCATIONS & RELICS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sand-100">
              THE WORLD OF <span className="text-gold-gradient">AZANIRA</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono tracking-wider text-sand-300 max-w-sm uppercase">Four places that shape the voyage</p>
        </div>

        {/* Content Tab 2: Locations & Relics */}
        {(
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {seriesConfig.storyWorld.map((loc) => (
              <div
                key={loc.id}
                className="group rounded-2xl overflow-hidden bg-abyss-950 border border-white/5 hover:border-gold-500/30 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={loc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-transparent to-transparent opacity-70" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-abyss-950/80 backdrop-blur text-[10px] font-mono tracking-wider text-gold-400 border border-white/10 uppercase">
                      {loc.tag}
                    </span>
                  </div>

                  {loc.coordinates && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-mono text-sand-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                      <MapPin className="w-3 h-3 text-gold-400" />
                      <span>{loc.coordinates}</span>
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-sand-100 group-hover:text-gold-300 transition-colors">
                      {loc.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-sand-300 font-sans leading-relaxed">
                      {loc.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
