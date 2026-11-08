import React from "react";
import { Sparkles } from "lucide-react";
import { seriesConfig } from "@/data/seriesConfig";

export const BehindTheStory: React.FC = () => {
  return (
    <section id="craft" className="relative py-12 sm:py-20 bg-sand-100 text-abyss-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-gold-400/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-abyss-900/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-700 uppercase mb-3">
              <span>04</span>
              <span className="w-6 h-px bg-gold-700/40" />
              <span>THE STUDIO PIPELINE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-abyss-900">
              BEHIND THE <span className="text-gold-700">STORY</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-wider text-abyss-700 max-w-sm uppercase">
            HUMAN STORYTELLING · AI CINEMATIC DIRECTION · 4K MASTERS
          </p>
        </div>

        {/* Studio Craftsmanship Breakdown */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seriesConfig.productionPipeline.map((step) => (
            <div
              key={step.number}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-abyss-900/10 shadow-sm hover:border-gold-600/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-gold-700 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-abyss-900/5 text-abyss-700 uppercase">
                    {step.category}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-abyss-900 group-hover:text-gold-700 transition-colors mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-abyss-800 font-sans leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-abyss-900/10">
                <span className="text-[10px] font-mono text-abyss-600 uppercase block mb-1">Deliverable</span>
                <p className="text-xs text-abyss-700 font-mono">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
