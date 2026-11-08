"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Film } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";

interface LightboxProps {
  currentFrame: (typeof seriesConfig.galleryFrames)[0] | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  currentFrame,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (currentFrame) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentFrame, onClose, onPrev, onNext]);

  if (!currentFrame) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${currentFrame.title} Frame Inspector`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-abyss-950/95 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2 text-sand-400 hover:text-white bg-black/60 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
        aria-label="Close image inspector"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Frame Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-sand-300 hover:text-white bg-black/60 rounded-full border border-white/10 hover:bg-white/10 transition-all hover:scale-110"
        aria-label="Previous frame"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Frame Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-sand-300 hover:text-white bg-black/60 rounded-full border border-white/10 hover:bg-white/10 transition-all hover:scale-110"
        aria-label="Next frame"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Frame Container */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full max-h-[75vh]">
          <Image
            src={currentFrame.masterImage || currentFrame.image}
            alt={currentFrame.title}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-abyss-950 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-gold-400" />
            <span className="font-serif font-bold text-sand-100 text-sm">
              {currentFrame.title}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-sand-400">{currentFrame.scene}</span>
          </div>

          <div className="flex items-center gap-2 text-gold-400">
            <span>TIMECODE {currentFrame.timecode}</span>
            <span className="text-white/20">·</span>
            <span>NATIVE 4K</span>
          </div>
        </div>
      </div>
    </div>
  );
};
