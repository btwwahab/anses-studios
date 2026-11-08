"use client";

import React from "react";
import Image from "next/image";
import { Compass, ShieldAlert, BookOpen, Anchor, MapPin } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";

export const Synopsis: React.FC = () => {
  return (
    <section id="series" className="relative py-12 sm:py-20 bg-sand-100 text-abyss-900 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sea-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-gold-400/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-abyss-900/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-700 uppercase mb-3">
              <span>01</span>
              <span className="w-6 h-px bg-gold-700/40" />
              <span>THE PREMISE & WORLD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-abyss-900">
              ENTER THE <span className="text-gold-700">SERIES</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-wider text-abyss-700 max-w-sm uppercase">
            &ldquo;There are places history was never meant to find.&rdquo;
          </p>
        </div>

        {/* Editorial Content Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative Copy & Thematic Blocks (7 Cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            <div className="space-y-5 text-abyss-800 font-sans text-base sm:text-xl leading-relaxed">
              <p className="font-serif text-2xl sm:text-3xl leading-snug italic text-abyss-900">
                &ldquo;You&apos;re conflating mapped with understood.&rdquo;
              </p>

              <p>
                A history professor&apos;s thirty-year obsession sends Eric and a group of young scholars aboard the
                <strong className="text-abyss-900"> Azure Titan</strong>, past the port of Bissau and toward coordinates
                erased from every modern chart.
              </p>

              <p>
                When storms swallow the ship&apos;s instruments, the citadel of <strong className="text-gold-700">Azanira</strong> rises
                from the mist, and with it a secret that threatens all who find it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: BookOpen, t: "The Thesis", d: "Thirty years of research into a lost civilization." },
                { icon: Anchor, t: "The Azure Titan", d: "A grand ship pulled into uncharted storms." },
                { icon: MapPin, t: "Port of Bissau", d: "Where the maps end and the warnings begin." },
                { icon: ShieldAlert, t: "The Keepers", d: "Guardians of a sacred, forgotten island." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="p-5 rounded-xl bg-white border border-abyss-900/10 shadow-sm">
                  <div className="flex items-center gap-2 text-gold-700 mb-1.5">
                    <Icon className="w-5 h-5" />
                    <span className="font-serif text-base font-semibold text-abyss-900">{t}</span>
                  </div>
                  <p className="text-sm text-abyss-700 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Key Art Frame (5 Cols) */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl shadow-abyss-900/20 group">
              <div className="relative aspect-[896/1200] w-full max-w-md mx-auto">
                <Image
                  src={seriesConfig.series.masterPoster}
                  alt="AZANIRA Official Key Art"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Gradient Scrim & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-gold-400 uppercase">
                    ORIGINAL KEY ART · 2026
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-sand-400">
                    4K MASTER
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-sand-100 tracking-wide">
                  AZANIRA — EPISODE 1
                </h3>
              </div>
            </div>

            {/* Accent badge behind */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold-500/20 rounded-full flex items-center justify-center -z-10 opacity-60">
              <Compass className="w-12 h-12 text-gold-500/30 animate-spin" style={{ animationDuration: "30s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
