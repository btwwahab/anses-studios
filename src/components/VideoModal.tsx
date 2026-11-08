"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Film } from "lucide-react";
import { Episode } from "@/data/seriesConfig";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  episode: Episode;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  episode,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${episode.title} Video Player`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-abyss-950/95 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl shadow-black flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-abyss-950 border-b border-white/10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-gold-400" />
            <span className="font-serif font-bold text-sand-100 tracking-wider">
              {episode.title}
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-gold-400 hidden sm:inline">{episode.duration || "4K UHD"}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={episode.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-sand-300 hover:text-white transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-1 text-sand-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player (Lazy 4K Embed) */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${episode.videoId || "U3ZJzfxBbU4"}?autoplay=1&rel=0&modestbranding=1`}
            title={episode.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Bottom Metadata */}
        <div className="p-4 sm:p-5 bg-abyss-950/90 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <p className="text-sand-300 font-sans text-xs leading-relaxed max-w-2xl">
            {episode.description}
          </p>

          <div className="flex items-center gap-2 font-mono text-[10px] text-sand-400">
            <span>PRESS ESC TO CLOSE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
