import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { seriesConfig } from "@/data/seriesConfig";
import {
  ShieldCheck,
  Lock,
  Eye,
  Server,
  FileText,
  Mail,
  ArrowRight,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Globe,
  Film,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy | ${seriesConfig.studio.name}`,
  description: `Official Privacy Policy for ${seriesConfig.studio.name} and the ${seriesConfig.series.title} cinematic series portal. Learn how we safeguard your information and uphold ethical digital standards.`,
  openGraph: {
    title: `Privacy Policy | ${seriesConfig.studio.name}`,
    description: `Official Privacy Policy for ${seriesConfig.studio.name} and ${seriesConfig.series.title}.`,
    url: "https://ansesstudios.com/privacy",
    siteName: seriesConfig.studio.name,
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "overview", label: "1. Overview & Commitment" },
    { id: "collection", label: "2. Information We Collect" },
    { id: "usage", label: "3. How We Use Information" },
    { id: "youtube-embeds", label: "4. YouTube & Embedded Media" },
    { id: "ai-disclosure", label: "5. AI Media & Content Integrity" },
    { id: "cookies-storage", label: "6. Cookies & Local Storage" },
    { id: "data-rights", label: "7. Your Rights (GDPR & CCPA)" },
    { id: "children", label: "8. Children's Privacy" },
    { id: "contact", label: "9. Studio Legal Inquiries" },
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
              <span className="text-gold-400">PRIVACY POLICY</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-mono tracking-wider mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL STUDIO COMPLIANCE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sand-100 mb-4">
              PRIVACY <span className="text-gold-gradient">POLICY</span>
            </h1>

            <p className="text-sm sm:text-base text-sand-300 max-w-2xl font-sans leading-relaxed mb-6">
              How {seriesConfig.studio.name} manages viewer information, streaming player interactions, and digital privacy while experiencing the cinematic universe of {seriesConfig.series.title}.
            </p>

            {/* Document Metadata Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/5 text-xs font-mono text-sand-400">
              <div className="flex items-center gap-1.5">
                <span className="text-sand-500">EFFECTIVE DATE:</span>
                <span className="text-sand-200">OCTOBER 11, 2026</span>
              </div>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-sand-700" />
              <div className="flex items-center gap-1.5">
                <span className="text-sand-500">VERSION:</span>
                <span className="text-sand-200">2.1 (PRODUCTION)</span>
              </div>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-sand-700" />
              <div className="flex items-center gap-1.5">
                <span className="text-sand-500">ENTITY:</span>
                <span className="text-gold-400">{seriesConfig.studio.name}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Quick Table of Contents (Sticky on Desktop) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="p-5 rounded-2xl bg-abyss-900/60 border border-white/10 backdrop-blur-sm">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-500 uppercase block mb-3 font-semibold">
                  Policy Navigation
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

              {/* Quick Summary Pill */}
              <div className="p-5 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-semibold mb-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span>KEY PRIVACY SUMMARY</span>
                </div>
                <p className="text-xs text-sand-300/90 leading-relaxed font-sans">
                  We do not sell your personal data. We do not run invasive third-party ad trackers. We only process minimal diagnostic data and embedded video requests to bring you high-fidelity cinematic media.
                </p>
              </div>

              {/* Link to Terms */}
              <div className="p-5 rounded-2xl bg-abyss-900/40 border border-white/5">
                <span className="text-[11px] font-mono text-sand-400 uppercase block mb-1">
                  Related Agreement
                </span>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <span>Read Terms & Conditions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Detailed Policy Text */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            {/* Section 1 */}
            <section id="overview" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>01</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>OVERVIEW & COMMITMENT</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                1. Overview & Studio Commitment
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                Welcome to {seriesConfig.studio.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are an independent creative entertainment studio producing original cinematic experiences at the frontier of human direction and generative artificial intelligence, including the official series <strong className="text-sand-100">{seriesConfig.series.title}</strong>.
              </p>
              <p className="text-sm text-sand-300 leading-relaxed">
                We believe exceptional storytelling requires exceptional trust. This Privacy Policy outlines what information we collect when you visit our website (<code className="text-xs font-mono text-gold-400">ansesstudios.com</code>), interact with our preview media, subscribe to studio updates, or connect with our official YouTube channels.
              </p>
            </section>

            {/* Section 2 */}
            <section id="collection" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>02</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>INFORMATION COLLECTION</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-sm text-sand-300 leading-relaxed">
                <div className="p-4 rounded-xl bg-abyss-900/50 border border-white/5 space-y-2">
                  <h3 className="font-semibold text-sand-200 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-400">
                    <FileText className="w-3.5 h-3.5" />
                    A. Voluntarily Provided Information
                  </h3>
                  <p>
                    When you contact our studio via email for press inquiries, licensing requests, fan feedback, or production collaborations, we collect your name, email address, and the contents of your message.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-abyss-900/50 border border-white/5 space-y-2">
                  <h3 className="font-semibold text-sand-200 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-400">
                    <Server className="w-3.5 h-3.5" />
                    B. Technical Diagnostics & Telemetry
                  </h3>
                  <p>
                    To ensure smooth 4K video previews and responsive rendering across desktop, tablet, and mobile browsers, our hosting infrastructure may temporarily process technical data such as browser type, operating system, preferred language, referring URL, and approximate geographic region (country or city level). We do not correlate this information with personally identifiable profiles.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="usage" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>03</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>DATA USAGE</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                3. How We Use Information
              </h2>
              <ul className="space-y-2.5 text-sm text-sand-300 list-disc list-inside">
                <li><strong className="text-sand-100">Media Delivery:</strong> Serving high-definition posters, character art, and video modal streams seamlessly.</li>
                <li><strong className="text-sand-100">Communications:</strong> Responding promptly to licensing, distribution, press, or viewer inquiries.</li>
                <li><strong className="text-sand-100">Site Reliability:</strong> Monitoring server health, detecting bot abuse or denial-of-service attempts, and fixing rendering bugs.</li>
                <li><strong className="text-sand-100">Zero Commercial Sale:</strong> We never sell, rent, or trade viewer information to data brokers or advertising exchanges.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="youtube-embeds" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>04</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>STREAMING PLAYERS</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                4. YouTube & Embedded Media Players
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                The official trailer and teaser videos for <strong className="text-sand-100">{seriesConfig.series.title}</strong> are hosted on YouTube and streamed through YouTube&apos;s privacy-enhanced embed player.
              </p>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 text-xs text-sand-300">
                <p>
                  When you initiate playback through our modal player or follow direct links to our channel (<a href={seriesConfig.studio.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 underline hover:text-gold-300">@anses_studios</a>), your interaction is governed by:
                </p>
                <div className="flex flex-wrap gap-4 pt-1 font-mono">
                  <a
                    href="https://www.youtube.com/t/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sand-200 hover:text-white"
                  >
                    <span>YouTube Terms of Service</span>
                    <ExternalLink className="w-3 h-3 text-sand-500" />
                  </a>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sand-200 hover:text-white"
                  >
                    <span>Google Privacy Policy</span>
                    <ExternalLink className="w-3 h-3 text-sand-500" />
                  </a>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="ai-disclosure" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>05</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>TRANSPARENCY</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                5. AI Media & Creative Content Integrity
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                {seriesConfig.studio.name} produces original narrative IP using advanced generative artificial intelligence, neural rendering models, and human cinematic direction.
              </p>
              <div className="p-4 rounded-xl bg-gold-500/5 border border-gold-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>INTELLECTUAL INTEGRITY & DATA SCRAPING</span>
                </div>
                <p className="text-xs text-sand-300 leading-relaxed">
                  All characters, keyframes, plotlines, dialogue scripts, and audio masters displayed on this website are original creative works of {seriesConfig.studio.name}. We strictly forbid unauthorized scraping, reverse-engineering, or ingestion of our media into public AI training datasets without explicit contractual license.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="cookies-storage" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>06</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>STORAGE & PREFERENCES</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                6. Cookies & Local Browser Storage
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                Our website does not use tracking cookies for behavioral targeting or cross-site profiling. We may utilize standard browser <code className="text-xs font-mono text-gold-400">localStorage</code> or session state strictly for functional purposes, such as:
              </p>
              <ul className="space-y-1.5 text-xs text-sand-300 list-disc list-inside">
                <li>Remembering volume or modal player state.</li>
                <li>Cashing visual assets to reduce bandwidth on repeated visits.</li>
                <li>Preserving UI navigation state.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="data-rights" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>07</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>USER RIGHTS</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                7. Your Rights (GDPR & CCPA / CPRA)
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                Regardless of your location, you have the right to inspect, correct, or request the permanent deletion of any personal communications or contact records we hold.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-abyss-900/60 border border-white/5 space-y-1.5">
                  <h4 className="font-mono text-gold-400 uppercase font-semibold">European Union (GDPR)</h4>
                  <p className="text-sand-300 leading-relaxed">
                    Right of access, rectification, data portability, erasure (&quot;Right to be Forgotten&quot;), and objection to processing under EU Regulation 2016/679.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-abyss-900/60 border border-white/5 space-y-1.5">
                  <h4 className="font-mono text-gold-400 uppercase font-semibold">California (CCPA/CPRA)</h4>
                  <p className="text-sand-300 leading-relaxed">
                    Right to know, delete, and opt-out of data sales. Note that {seriesConfig.studio.name} does not sell any consumer personal data.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="children" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>08</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>PROTECTION</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                Our digital properties and cinematic showcases are intended for general audiences interested in narrative mystery and cinema. We do not knowingly collect or solicit personal information from children under the age of 13 (or under 16 in applicable European jurisdictions). If we become aware that we have collected information from a child without verified parental consent, we will delete that data immediately.
              </p>
            </section>

            {/* Section 9 */}
            <section id="contact" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-500 uppercase">
                <span>09</span>
                <span className="w-4 h-px bg-gold-500/40" />
                <span>CONTACT</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-sand-100">
                9. Studio Legal Inquiries & Contact
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                If you have questions, feedback, or requests regarding this Privacy Policy, our data practices, or intellectual property rights, please reach out to our legal and production coordination team:
              </p>
              <div className="p-6 rounded-2xl bg-abyss-900/80 border border-gold-500/20 space-y-3">
                <div className="flex items-center gap-2 text-gold-400 font-mono text-xs">
                  <Mail className="w-4 h-4" />
                  <span>DIRECT INQUIRY CHANNEL</span>
                </div>
                <div className="space-y-1 text-sm font-sans">
                  <p className="text-sand-100 font-semibold">{seriesConfig.studio.name} — Legal & Privacy Office</p>
                  <p className="text-sand-300 text-xs font-mono">legal@ansesstudios.com</p>
                  <p className="text-sand-400 text-xs">Official Studio Portal: <a href="https://ansesstudios.com" className="text-gold-400 underline">ansesstudios.com</a></p>
                </div>
              </div>
            </section>

            {/* Bottom Navigation CTA */}
            <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 text-xs font-mono text-sand-300 hover:text-gold-300 transition-colors"
              >
                <span>CONTINUE TO TERMS & CONDITIONS</span>
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
