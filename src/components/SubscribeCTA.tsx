"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Youtube, Bell, Play, Sparkles, ShieldCheck } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";
import confetti from "canvas-confetti";
import { fetchChannelStats } from "@/lib/youtubePlaylist";

interface SubscribeCTAProps {
  onOpenTeaser: () => void;
}

export const SubscribeCTA: React.FC<SubscribeCTAProps> = ({ onOpenTeaser }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState<number | undefined>();

  useEffect(() => {
    fetchChannelStats(seriesConfig.studio.youtubeHandle).then((s) => setSubscribers(s?.subscribers));
  }, []);

  const handleSubscribeClick = () => {
    setSubscribed(true);
    // Fire festive golden cinematic confetti
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#fae09c", "#d4a23d", "#ffffff", "#5a8c9e"],
      });
    } catch {
      // fallback if canvas-confetti is not loaded
    }

    // Open channel in a new tab
    setTimeout(() => {
      window.open(seriesConfig.studio.youtubeUrl, "_blank", "noopener,noreferrer");
    }, 450);
  };

  return (
    <section id="subscribe" className="relative py-14 sm:py-24 bg-abyss-950 overflow-hidden border-t border-white/5">
      {/* Background imagery: Master Poster darkened */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src={seriesConfig.series.masterPoster}
          alt="AZANIRA Backdrop"
          fill
          className="object-cover object-center scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/90 to-abyss-950" />
      </div>

      {/* Atmospheric center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-mono tracking-[0.2em] uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>THE NEXT CHAPTER AWAITS</span>
        </div>

        {/* Closing Climax Statement */}
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sand-100 max-w-3xl leading-snug">
          SOME MYSTERIES WERE NEVER MEANT TO BE FOUND.{" "}
          <span className="text-gold-gradient italic font-normal">THE EXPEDITION HAS BEGUN.</span>
        </h2>

        <p className="mt-3 sm:mt-5 text-sm sm:text-base text-sand-200 max-w-xl font-sans leading-relaxed">
          Subscribe to <strong className="text-gold-400">Anses Studios</strong> on YouTube for new episodes and previews.
        </p>

        {/* Dual Call to Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
          {/* Main Subscribe Button */}
          <button
            onClick={handleSubscribeClick}
            className="w-full sm:w-auto min-h-[46px] group relative flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 active:scale-95 transition-all duration-300"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-red-600 group-hover:scale-110 transition-transform" />
            <span>{subscribed ? "Subscribed on YouTube!" : "Subscribe on YouTube"}</span>
            <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 text-white/80 animate-bounce" />
          </button>

          {/* Watch Episode CTA */}
          <button
            onClick={onOpenTeaser}
            className="w-full sm:w-auto min-h-[46px] flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-abyss-900/80 hover:bg-abyss-800 border border-gold-500/30 hover:border-gold-500/60 text-gold-300 font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase backdrop-blur transition-all active:scale-95"
          >
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold-400 text-gold-400" />
            <span>Watch Episode 1</span>
          </button>
        </div>

        {/* Channel Verification Pill */}
        <div className="mt-8 sm:mt-10 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl sm:rounded-full bg-abyss-900/60 border border-white/10 text-[10px] sm:text-xs font-mono text-sand-400">
          <div className="flex items-center gap-1.5 text-gold-400">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-semibold">{seriesConfig.studio.youtubeHandle}</span>
          </div>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span>{subscribers !== undefined ? `${subscribers.toLocaleString("en-US")} subscribers` : "4K Ultra HD Originals"}</span>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="text-sand-300">New Episodes In Production</span>
        </div>
      </div>
    </section>
  );
};
