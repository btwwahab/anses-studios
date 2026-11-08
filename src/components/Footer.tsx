"use client";

import React from "react";
import Image from "next/image";
import { Youtube, Facebook, Instagram, ArrowUp, Film, Sparkles } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";

// TikTok SVG Icon component
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.87-4.49V8.55a8.27 8.27 0 0 0 4.9 1.6V6.69h-1z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-abyss-950 border-t border-white/10 text-sand-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start justify-between">
          {/* Brand Column (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 items-center sm:items-start text-center sm:text-left">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
              <Image
                src="/assets/images/anses-logo.png"
                alt="ANSES STUDIOS"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-sand-400 font-sans text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated to original AI cinematic storytelling. Crafting extraordinary worlds, thrilling mysteries, and unforgettable characters.
            </p>

            {/* Official Social Media Hub */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-2">
              {/* YouTube */}
              <a
                href={seriesConfig.studio.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/40 text-sand-200 hover:text-white transition-all text-xs font-mono group"
                title="Subscribe to Anses Studios on YouTube"
              >
                <Youtube className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span>YouTube</span>
              </a>

              {/* Facebook */}
              <a
                href={seriesConfig.studio.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-sand-200 hover:text-white transition-all text-xs font-mono group"
                title="Follow Anses Studios on Facebook"
              >
                <Facebook className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>

              {/* Instagram */}
              <a
                href={seriesConfig.studio.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-500/40 text-sand-200 hover:text-white transition-all text-xs font-mono group"
                title="Follow Anses Studios on Instagram"
              >
                <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>

              {/* TikTok */}
              <a
                href={seriesConfig.studio.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-cyan-600/20 border border-white/10 hover:border-cyan-500/40 text-sand-200 hover:text-white transition-all text-xs font-mono group"
                title="Follow Anses Studios on TikTok"
              >
                <TikTokIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links (4 Cols) */}
          <div className="md:col-span-4 flex flex-col gap-3 text-center sm:text-left">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold-500 uppercase">
              Expedition Index
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a href="/#series" className="hover:text-gold-300 transition-colors py-1.5">
                The Series
              </a>
              <a href="/#episode" className="hover:text-gold-300 transition-colors py-1.5">
                Episode 1
              </a>
              <a href="/#world" className="hover:text-gold-300 transition-colors py-1.5">
                World & Lore
              </a>
              <a href="/#craft" className="hover:text-gold-300 transition-colors py-1.5">
                Studio Craft
              </a>
              <a href="/privacy" className="hover:text-gold-300 transition-colors py-1.5">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-gold-300 transition-colors py-1.5">
                Terms of Service
              </a>
              <a href="/disclaimer" className="hover:text-gold-300 transition-colors py-1.5">
                Disclaimer
              </a>
            </div>
          </div>

          {/* Studio Meta & Back to top (3 Cols) */}
          <div className="md:col-span-3 flex flex-col items-center sm:items-start md:items-end justify-between h-full gap-5">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-abyss-900 hover:bg-abyss-800 border border-white/10 hover:border-gold-500/30 text-sand-300 hover:text-gold-300 transition-all text-xs font-mono"
              aria-label="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-gold-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="flex flex-col items-center sm:items-start md:items-end gap-1 text-[11px] font-mono text-sand-400 text-center sm:text-left md:text-right">
              <span className="text-sand-300">AZANIRA — AN ORIGINAL SERIES</span>
              <span>4K CINEMATIC RELEASE</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono text-sand-400 text-center sm:text-left">
          <div>
            © {seriesConfig.studio.establishedYear} {seriesConfig.studio.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">
            <a href="/privacy" className="hover:text-gold-300 transition-colors">
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-sand-600 hidden xs:inline" />
            <a href="/terms" className="hover:text-gold-300 transition-colors">
              Terms & Conditions
            </a>
            <span className="w-1 h-1 rounded-full bg-sand-600 hidden xs:inline" />
            <a href="/disclaimer" className="hover:text-gold-300 transition-colors">
              Disclaimer
            </a>
            <span className="w-1 h-1 rounded-full bg-sand-600 hidden xs:inline" />
            <span className="text-gold-500/80">HUMAN STORYTELLING · AI DIRECTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
