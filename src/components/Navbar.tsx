"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Menu, X, Mail } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { seriesConfig } from "@/data/seriesConfig";

interface NavbarProps {
  onOpenTeaser?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTeaser }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWatchClick = () => {
    if (onOpenTeaser) {
      onOpenTeaser();
    } else {
      window.location.href = "/#episode";
    }
  };

  const navLinks = [
    { name: "The Series", href: "/#series" },
    { name: "Episode 1", href: "/#episode" },
    { name: "World & Lore", href: "/#world" },
    { name: "Studio Craft", href: "/#craft" },
    { name: "Subscribe", href: "/#subscribe" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-20 flex items-center transition-colors duration-300 ${
          scrolled
            ? "bg-abyss-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80"
            : "bg-gradient-to-b from-abyss-950/90 to-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Studio Brand */}
          <a
            href="/"
            className="group flex items-center focus:outline-none"
            aria-label="ANSES STUDIOS - Return to home"
          >
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/anses-logo.png"
                alt="ANSES STUDIOS"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-abyss-900/60 border border-white/5 backdrop-blur-sm"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium tracking-wider text-sand-300 hover:text-gold-300 hover:bg-white/[0.04] rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Work With Us */}
            <button
              onClick={() => setContactOpen(true)}
              className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider text-gold-300 hover:text-abyss-950 border border-gold-500/50 hover:bg-gold-400 hover:border-gold-400 rounded-full transition-all duration-300 active:scale-95"
            >
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="sm:hidden">CONTACT</span>
              <span className="hidden sm:inline">{seriesConfig.studio.name}</span>
            </button>

            {/* Primary Watch Button */}
            <button
              onClick={handleWatchClick}
              className="group flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider text-abyss-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-full shadow-lg shadow-gold-500/15 hover:shadow-gold-500/30 transition-all duration-300 active:scale-95"
            >
              <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-abyss-950 text-abyss-950 transition-transform group-hover:scale-110" />
              <span className="hidden xs:inline sm:inline">WATCH EPISODE 1</span>
              <span className="xs:hidden sm:hidden">EP 1</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-sand-300 hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors touch-manipulation"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-abyss-950  pt-20 px-6 flex flex-col justify-between pb-8 overflow-y-auto animate-fadeIn">
          <nav className="flex flex-col gap-1 pt-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold-500/80 mb-2 uppercase">
              Expedition Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-base sm:text-lg font-serif tracking-wider text-sand-200 hover:text-gold-400 border-b border-white/5 active:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWatchClick();
              }}
              className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold tracking-wider text-abyss-950 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl shadow-lg shadow-gold-500/20 active:scale-98 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-abyss-950" />
              WATCH EPISODE 1
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setContactOpen(true);
              }}
              className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold tracking-wider text-gold-300 border border-gold-500/50 rounded-xl active:scale-98 transition-all"
            >
              <Mail className="w-4 h-4" />
              WORK WITH ANSES STUDIOS
            </button>
          </div>
        </div>
      )}

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};
