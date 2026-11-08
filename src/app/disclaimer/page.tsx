import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { seriesConfig } from "@/data/seriesConfig";
import { ScrollText, ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Legal Disclaimer | ${seriesConfig.studio.name}`,
  description: `Official legal disclaimer and creative content notice for ${seriesConfig.series.title}, an original AI cinematic series by ${seriesConfig.studio.name}.`,
  openGraph: {
    title: `Legal Disclaimer | ${seriesConfig.studio.name}`,
    description: `Official legal disclaimer and creative content notice for ${seriesConfig.series.title}.`,
    url: "https://ansesstudios.com/disclaimer",
    siteName: seriesConfig.studio.name,
  },
};

const sections: { id: string; title: string; body: string[] }[] = [
  {
    id: "fictional-work",
    title: "Fictional Work and Creative Representation",
    body: [
      "AZANIRA is a fictional cinematic mystery-adventure series produced and presented by Anses Studios. The characters, character names, personalities, dialogue, events, relationships, institutions depicted in fictional contexts, civilizations, kingdoms, geographical discoveries, supernatural elements, and dramatic situations portrayed in the series are presented for storytelling and entertainment purposes.",
      "Any resemblance to actual persons, living or deceased, or to real events, organizations, communities, or circumstances is coincidental or forms part of a fictionalized dramatic representation, except where expressly acknowledged or otherwise apparent from the use of real-world references.",
    ],
  },
  {
    id: "historical-cultural",
    title: "Historical, Cultural, and Geographical Representation",
    body: [
      "AZANIRA may incorporate references to historical civilizations, ancient legends, maritime exploration, academic research, geographical locations, and cultural traditions.",
      "The fictional civilization of Azanira, its history, architecture, mythology, inhabitants, political structures, and associated events are dramatic creations and should not be interpreted as verified historical or archaeological facts.",
      "References to real-world locations, including Oxford University, Southampton, and other geographical settings, are used as part of the fictional narrative. Their inclusion does not imply official endorsement, sponsorship, participation, or affiliation.",
      "The production does not intend to misrepresent, ridicule, defame, or disrespect any nationality, ethnicity, religion, culture, or historical community.",
    ],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence and Digital Production",
    body: [
      "AZANIRA incorporates AI-assisted filmmaking and digital production techniques, which may include synthetic characters, digitally generated environments, visual effects, voice performances, sound design, and other audiovisual elements.",
      "Characters and performances depicted using synthetic media should not be interpreted as recordings of actual persons unless expressly identified as such.",
      "The use of AI-assisted production does not imply endorsement by any AI technology provider or platform.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property and Third-Party Rights",
    body: [
      "The original production elements of AZANIRA are protected to the extent permitted by applicable intellectual property laws.",
      "All third-party trademarks, service marks, logos, brand names, identifiable locations, and other protected materials remain the property of their respective owners.",
      "The inclusion of third-party references does not imply any commercial relationship, license, approval, or endorsement unless expressly stated.",
      "Any underlying literary works, licensed adaptations, third-party footage, music, sound effects, images, performances, or other protected materials remain subject to the rights of their respective owners and any applicable licenses or permissions.",
    ],
  },
  {
    id: "viewer-discretion",
    title: "Dramatic Content and Viewer Discretion",
    body: [
      "AZANIRA may contain fictional depictions of peril, shipwrecks, combat, disturbing imagery, supernatural themes, psychological tension, and other dramatic situations.",
      "Viewer discretion is advised. The series is not intended as historical, scientific, navigational, medical, or professional advice.",
    ],
  },
  {
    id: "rights-contact",
    title: "Rights and Contact",
    body: [
      "The AZANIRA series is presented under the Anses Studios production banner.",
      "Unauthorized reproduction, redistribution, or commercial exploitation of protected production materials may violate applicable intellectual property laws.",
      "For legitimate rights-related inquiries, licensing requests, or concerns regarding the production, please contact Anses Studios through its official communication channels.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-abyss-950 text-sand-100 flex flex-col selection:bg-gold-500/30 selection:text-gold-300">
      <Navbar />

      <main className="flex-1 pt-28 pb-16">
        <section className="relative py-12 sm:py-16 border-b border-white/5 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-sand-400 mb-6">
              <Link href="/" className="hover:text-gold-400 transition-colors">
                HOME
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-sand-600" />
              <span>LEGAL</span>
              <ChevronRight className="w-3.5 h-3.5 text-sand-600" />
              <span className="text-gold-400">DISCLAIMER</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-mono tracking-wider mb-5">
              <ScrollText className="w-3.5 h-3.5" />
              <span>CREATIVE CONTENT NOTICE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sand-100 mb-3">
              <span className="text-gold-gradient">AZANIRA</span> — LEGAL DISCLAIMER
            </h1>
            <p className="text-sm sm:text-base text-sand-300 font-sans">
              Official legal disclaimer &amp; creative content notice
            </p>
            <p className="mt-2 text-xs font-mono tracking-wider text-gold-400 uppercase">
              An {seriesConfig.studio.name} Production
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 p-5 rounded-2xl bg-abyss-900/60 border border-white/10">
              <span className="text-xs font-mono tracking-[0.2em] text-gold-500 uppercase block mb-3 font-semibold">
                Contents
              </span>
              <nav className="flex flex-col space-y-1.5 text-xs font-sans">
                {sections.map((sec, i) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="px-2.5 py-1.5 rounded-lg text-sand-300 hover:text-gold-300 hover:bg-white/5 transition-colors"
                  >
                    {i + 1}. {sec.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="lg:col-span-8 order-1 lg:order-2 space-y-10">
            {sections.map((sec, i) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="w-4 h-px bg-gold-500/40" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-sand-100">{sec.title}</h2>
                {sec.body.map((p) => (
                  <p key={p} className="text-sm sm:text-base text-sand-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <p className="pt-6 border-t border-white/5 text-xs sm:text-sm font-semibold text-sand-200">
              © 2026 Anses Studios. Rights reserved to the extent owned or licensed by the production.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 text-xs font-mono text-sand-300 hover:text-gold-300 transition-colors"
              >
                <span>VIEW TERMS &amp; CONDITIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/"
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-gold-500/10 border border-white/10 hover:border-gold-500/30 text-xs font-semibold text-sand-200 hover:text-gold-300 transition-all"
              >
                RETURN TO STUDIO HOME
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
