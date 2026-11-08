"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";

export const Characters: React.FC = () => {
  const scroller = useRef<HTMLDivElement>(null);

  const [paused, setPaused] = useState(false);
  const pos = useRef(0);
  const holdUntil = useRef(0);

  // Three copies of the list so the strip can loop forever in either direction
  const loop = [...seriesConfig.characters, ...seriesConfig.characters, ...seriesConfig.characters];

  const setWidth = () => {
    const el = scroller.current;
    const n = seriesConfig.characters.length;
    if (!el || el.children.length < n + 1) return 0;
    return (el.children[n] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft;
  };

  const wrap = (el: HTMLDivElement) => {
    const w = setWidth();
    if (!w) return;
    if (el.scrollLeft >= 2 * w) el.scrollLeft -= w;
    else if (el.scrollLeft < 1) el.scrollLeft += w;
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    holdUntil.current = Date.now() + 700;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 260), behavior: "smooth" });
  };

  // Start in the middle copy
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = pos.current = setWidth();
  }, []);

  // Continuous right-to-left drift; pauses on hover/touch and while arrows animate
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      const el = scroller.current;
      if (el) {
        if (paused || Date.now() < holdUntil.current) {
          pos.current = el.scrollLeft;
        } else {
          pos.current += 0.6;
          el.scrollLeft = pos.current;
          wrap(el);
          pos.current = el.scrollLeft;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section id="characters" className="relative py-12 sm:py-20 bg-abyss-950 overflow-hidden">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setTimeout(() => setPaused(false), 4000)}
      >
        <div className="flex items-end justify-between gap-4 pb-6 sm:pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-500 uppercase mb-3">
              <span>02</span>
              <span className="w-6 h-px bg-gold-500/40" />
              <span>THE EXPEDITION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sand-100">
              MEET THE <span className="text-gold-gradient">CHARACTERS</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous characters"
              className="w-10 h-10 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-abyss-950 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next characters"
              className="w-10 h-10 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-abyss-950 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          onScroll={(e) => wrap(e.currentTarget)}
          className="flex gap-4 overflow-x-auto py-6 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loop.map((char, i) => (
            <article
              key={`${char.id}-${i}`}
              className="flex-shrink-0 w-[70%] sm:w-[calc(33.333%-0.7rem)] lg:w-[calc(25%-0.75rem)] group relative rounded-2xl overflow-hidden bg-abyss-900 border border-white/10 transition-all duration-300 ease-out hover:z-10 hover:-translate-y-3 hover:scale-[1.06] hover:border-gold-400 hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.9),0_0_30px_-5px_rgba(212,162,61,0.45)]"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-lg font-bold text-sand-100">{char.name}</h3>
                  <span className="mt-0.5 text-[11px] font-mono tracking-wider text-gold-400 uppercase block">{char.role}</span>
                  <p className="mt-2 text-xs italic text-sand-200 leading-snug">&ldquo;{char.quote}&rdquo;</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
