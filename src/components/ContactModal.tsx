"use client";

import React, { useEffect, useState } from "react";
import { X, Send, CheckCircle2, ChevronDown, Check } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = [
  "AI Movie / Short Film",
  "AI Series / Episodes",
  "Trailer / Teaser",
  "Music Video",
  "Ad / Brand Video",
  "Something else",
];

const field =
  "w-full rounded-xl bg-abyss-900 border border-white/10 focus:border-gold-400 focus:outline-none px-4 py-3 text-sm text-sand-100 placeholder:text-sand-500 transition-colors";

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Start from a fresh form every time the modal is closed and reopened
  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setProjectType("");
      setDropdownOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!projectType) {
      setDropdownOpen(true);
      return;
    }
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Work with ${seriesConfig.studio.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-abyss-950/90 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg my-auto rounded-2xl bg-abyss-950 border border-gold-500/30 shadow-2xl shadow-black p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 p-2 text-sand-300 hover:text-gold-400 rounded-full hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "sent" ? (
          <div className="text-center py-8 flex flex-col items-center gap-3">
            <CheckCircle2 className="w-12 h-12 text-gold-400" />
            <h2 className="font-serif text-2xl font-bold text-sand-100">Message received</h2>
            <p className="text-sm text-sand-300 max-w-xs">
              Thank you. The {seriesConfig.studio.name} team will get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-abyss-950 text-xs font-semibold tracking-wider"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold-500 uppercase">
              Start a project
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-sand-100">
              Work with <span className="text-gold-gradient">{seriesConfig.studio.name}</span>
            </h2>
            <p className="mt-2 text-sm text-sand-300">
              Tell us about the AI film or video you have in mind and we will reply with next steps.
            </p>

            <form
              name="project-enquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col gap-3"
            >
              <input type="hidden" name="form-name" value="project-enquiry" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <input name="name" required placeholder="Your name" autoComplete="name" className={field} />
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                autoComplete="email"
                className={field}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <input type="hidden" name="projectType" value={projectType} />
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((o) => !o)}
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                    className={`${field} flex items-center justify-between text-left ${projectType ? "" : "text-sand-500"}`}
                  >
                    <span className="truncate">{projectType || "Project type"}</span>
                    <ChevronDown className={`w-4 h-4 text-gold-400 flex-shrink-0 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <ul
                      role="listbox"
                      className="absolute z-10 left-0 right-0 sm:right-auto sm:min-w-[16rem] mt-1.5 max-h-60 overflow-y-auto rounded-xl bg-abyss-900 border border-gold-500/30 shadow-2xl shadow-black p-1.5"
                    >
                      {PROJECT_TYPES.map((t) => (
                        <li key={t} role="option" aria-selected={t === projectType}>
                          <button
                            type="button"
                            onClick={() => {
                              setProjectType(t);
                              setDropdownOpen(false);
                            }}
                            className="w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm text-left text-sand-100 hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
                          >
                            <span>{t}</span>
                            {t === projectType && <Check className="w-4 h-4 text-gold-400" />}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <input name="budget" placeholder="Budget (optional)" className={field} />
              </div>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Describe your idea"
                className={`${field} resize-none`}
              />

              {status === "error" && (
                <p className="text-xs text-red-400">
                  Could not send your message. Please try again in a moment.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 min-h-[46px] flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-abyss-950 font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all active:scale-95 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
