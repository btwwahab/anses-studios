import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { seriesConfig } from "@/data/seriesConfig";
import {
  FileText,
  Scale,
  Shield,
  Film,
  Sparkles,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Mail,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${seriesConfig.studio.name}`,
  description: `Terms and Conditions of Use for ${seriesConfig.studio.name} and the ${seriesConfig.series.title} cinematic portal. Intellectual property, fan reaction guidelines, and studio licensing.`,
  openGraph: {
    title: `Terms & Conditions | ${seriesConfig.studio.name}`,
    description: `Official Terms and Conditions for ${seriesConfig.studio.name} and ${seriesConfig.series.title}.`,
    url: "https://ansesstudios.com/terms",
    siteName: seriesConfig.studio.name,
  },
};

export default function TermsAndConditionsPage() {
  const sections = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "ip-rights", label: "2. Studio Intellectual Property" },
    { id: "ai-protection", label: "3. AI Media & Scraping Prohibition" },
    { id: "fan-guidelines", label: "4. Fan Reactions & Commentary" },
    { id: "third-party", label: "5. YouTube & External Services" },
    { id: "schedules", label: "6. Production Schedules & Release Dates" },
    { id: "conduct", label: "7. Prohibited User Conduct" },
    { id: "disclaimers", label: "8. Disclaimer of Warranties" },
    { id: "liability", label: "9. Limitation of Liability" },
    { id: "licensing", label: "10. Studio Licensing & Legal Contact" },
  ];

  return (
    <div className="min-h-screen bg-abyss-950 text-sand-100 flex flex-col selection:bg-gold-500/30 selection:text-gold-300">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        {/* Top Hero Section */}
        <section className="relative py-14 sm:py-20 border-b border-white/5 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-sand-400 mb-6">
              <Link href="/" className="hover:text-gold-400 transition-colors">
                HOME
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-sand-600" />
              <span className="text-sand-400">LEGAL</span>
              <ChevronRight className="w-3.5 h-3.5 text-sand-600" />
              <span className="text-gold-400">TERMS & CONDITIONS</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-mono tracking-wider mb-5">
              <Scale className="w-3.5 h-3.5" />
              <span>STUDIO TERMS OF SERVICE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sand-100 mb-4">
              TERMS & <span className="text-gold-gradient">CONDITIONS</span>
            </h1>

            <p className="text-sm sm:text-base text-sand-300 max-w-2xl font-sans leading-relaxed mb-6">
              Official legal terms governing your access to the {seriesConfig.studio.name} digital platform, creative assets, and the cinematic universe of {seriesConfig.series.title}.
            </p>

            {/* Document Metadata Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/5 text-xs font-mono text-sand-400">
              <div className="flex items-center gap-1.5">
                <span className="text-sand-500">LAST REVISED:</span>
                <span className="text-sand-200">OCTOBER 11, 2026</span>
              </div>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-sand-700" />
              <div className="flex items-center gap-1.5">
                <span className="text-sand-500">GOVERNING BODY:</span>
                <span className="text-sand-200">ANSES STUDIOS CREATIVE LEGAL</span>
              </div>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-sand-700" />
              <div className="flex items-center gap-1.5">
                <span className="text-sand-500">APPLICABLE PROJECT:</span>
                <span className="text-gold-400">{seriesConfig.series.title} (ORIGINAL IP)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Quick Table of Contents */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="p-5 rounded-2xl bg-abyss-900/60 border border-white/10 backdrop-blur-sm">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-500 uppercase block mb-3 font-semibold">
                  Terms Navigation
                </span>
                <nav className="flex flex-col space-y-1.5 text-xs font-sans">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="px-2.5 py-1.5 rounded-lg text-sand-400 hover:text-gold-300 hover:bg-white/5 transition-colors"
                    >
                      {sec.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Creator Guidelines Callout */}
              <div className="p-5 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-semibold mb-2">
                  <Film className="w-3.5 h-3.5" />
                  <span>CREATOR & FAN FRIENDLY</span>
                </div>
                <p className="text-xs text-sand-300/90 leading-relaxed font-sans">
                  We love creator reactions, film essays, and community reviews! Fair use reviews with link attribution to our channel <span className="text-gold-400">@anses_studios</span> are fully encouraged.
                </p>
              </div>

              {/* Link to Privacy */}
              <div className="p-5 rounded-2xl bg-abyss-900/40 border border-white/5">
                <span className="text-[11px] font-mono text-sand-400 uppercase block mb-1">
                  Privacy Document
                </span>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <span>Read Privacy Policy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Detailed Terms Content */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>01</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>BINDING AGREEMENT</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                By accessing or browsing this website (<code className="text-xs font-mono text-gold-400">ansesstudios.com</code>), viewing embedded trailers or teasers, or accessing related digital materials provided by {seriesConfig.studio.name} (&quot;Anses Studios,&quot; &quot;we,&quot; &quot;us&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
              </p>
              <p className="text-sm text-sand-300 leading-relaxed">
                If you do not agree to these terms in their entirety, you should discontinue use of our site immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section id="ip-rights" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>02</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>INTELLECTUAL PROPERTY</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                2. Studio Intellectual Property & Cinematic Lore
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                All visual elements, character representations (including Eric Vance, Sarah Sterling, Professor Henrick, Captain Vance, Relic Bearer, and Thabo), ship designs (the Azure Titan), Citadel architecture, narrative scripts, voiceovers, musical arrangements, graphic identities, logos, and 8K visual artwork are the exclusive intellectual property of <strong className="text-sand-100">{seriesConfig.studio.name}</strong> and are protected under international copyright, trademark, and trade dress laws.
              </p>
              <div className="p-4 rounded-xl bg-abyss-900/50 border border-white/5 space-y-2 text-xs text-sand-300">
                <span className="font-mono text-gold-400 uppercase font-semibold block">Reserved Rights</span>
                <p>
                  No license, title, or interest in any studio intellectual property is transferred to you by accessing the website. Any unauthorized redistribution, re-hosting, commercial reproduction, or minting of digital tokens (NFTs) utilizing Anses Studios creative assets is strictly prohibited.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="ai-protection" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>03</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>AI INTEGRITY & TRAINING PROTECTION</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                3. AI Media Ownership & Scraping Prohibition
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                {seriesConfig.studio.name} pioners human-directed AI cinema. Our works are authored through proprietary prompts, custom workflows, curated post-production color grading, sound design, and narrative architecture.
              </p>
              <div className="p-5 rounded-xl bg-gold-500/5 border border-gold-500/20 space-y-3">
                <div className="flex items-center gap-2 text-gold-400 font-mono text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EXPRESS RESTRICTION ON AI SCRAPING & RE-TRAINING</span>
                </div>
                <p className="text-xs text-sand-300 leading-relaxed">
                  You are expressly prohibited from using our visual keyframes, character portraits, episodic videos, audio masters, or script lore to train, fine-tune, or calibrate any machine learning, generative neural network, LoRA adapter, or commercial AI model without prior written license from {seriesConfig.studio.name}.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="fan-guidelines" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>04</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>FAN & CREATOR GUIDELINES</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                4. Fan Reactions, Reviewers & Commentary
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                We actively celebrate the online creator community, film essayists, and reaction creators. You are permitted to feature clips of our official trailers and teasers under the following guidelines:
              </p>
              <div className="space-y-3 text-xs text-sand-300">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-abyss-900/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sand-100 block mb-0.5">Clear Attribution:</strong>
                    Credit &quot;Anses Studios&quot; and &quot;AZANIRA&quot; in the title or description of your video.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-abyss-900/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sand-100 block mb-0.5">Channel Link:</strong>
                    Include a direct link to our YouTube channel (<code className="font-mono text-gold-400">{seriesConfig.studio.youtubeUrl}</code>).
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-abyss-900/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sand-100 block mb-0.5">Transformative Commentary:</strong>
                    Content must include original commentary, reaction, breakdown, or analysis rather than uninterrupted raw re-uploads of full content.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="third-party" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>05</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>EXTERNAL PLATFORMS</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                5. YouTube & External Streaming Services
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                Video playback is delivered via YouTube embed infrastructure. By watching videos on this portal, you also agree to be bound by YouTube&apos;s Terms of Service (<a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-gold-400 underline">youtube.com/t/terms</a>). {seriesConfig.studio.name} is not responsible for YouTube server uptime, stream buffering, or third-party client performance.
              </p>
            </section>

            {/* Section 6 */}
            <section id="schedules" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>06</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>PRODUCTION UPDATES</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                6. Production Schedules & Release Dates
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                Information published regarding upcoming episodes, teasers, story expansions, and premiere dates represents creative production estimates. {seriesConfig.studio.name} reserves the right to modify production milestones, release sequences, and artistic treatments to maintain the highest cinematic standard.
              </p>
            </section>

            {/* Section 7 */}
            <section id="conduct" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>07</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>PROHIBITED CONDUCT</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                7. Prohibited User Conduct
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                While interacting with our platform, you agree not to:
              </p>
              <ul className="space-y-2 text-xs text-sand-300 list-disc list-inside">
                <li>Deploy automated scrapers, spiders, or extraction bots against our media servers.</li>
                <li>Attempt to bypass, disable, or tamper with security or rate-limiting protocols.</li>
                <li>Impersonate {seriesConfig.studio.name}, its directors, creators, or affiliated artists.</li>
                <li>Frame or mirror the site without express written consent.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="disclaimers" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>08</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>DISCLAIMER OF WARRANTIES</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                8. Disclaimer of Warranties
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                THIS SITE AND ALL STUDIO MEDIA ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ANSES STUDIOS DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            {/* Section 9 */}
            <section id="liability" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>09</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>LIMITATION OF LIABILITY</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                9. Limitation of Liability
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                To the fullest extent permitted by applicable law, {seriesConfig.studio.name}, its creative directors, animators, engineers, and partners shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from your access to or inability to access this website or preview media.
              </p>
            </section>

            {/* Section 10 */}
            <section id="licensing" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>10</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>LICENSING & CONTACT</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                10. Studio Licensing & Legal Contact
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                For commercial licensing of the AZANIRA universe, streaming distribution inquiries, press kits, or intellectual property questions, please contact our studio office:
              </p>
              <div className="p-6 rounded-2xl bg-abyss-900/80 border border-gold-500/20 space-y-3">
                <div className="flex items-center gap-2 text-gold-400 font-mono text-xs">
                  <Mail className="w-4 h-4" />
                  <span>OFFICIAL STUDIO CONTACT</span>
                </div>
                <div className="space-y-1 text-sm font-sans">
                  <p className="text-sand-100 font-semibold">{seriesConfig.studio.name} — Licensing & Legal Department</p>
                  <p className="text-sand-300 text-xs font-mono">legal@ansesstudios.com</p>
                  <p className="text-sand-400 text-xs">YouTube: <a href={seriesConfig.studio.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 underline">@anses_studios</a></p>
                </div>
              </div>
            </section>

            {/* Bottom Navigation CTA */}
            <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-xs font-mono text-sand-300 hover:text-gold-300 transition-colors"
              >
                <span>VIEW PRIVACY POLICY</span>
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
