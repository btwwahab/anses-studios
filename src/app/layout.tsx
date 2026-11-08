import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { seriesConfig } from "@/data/seriesConfig";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#05070a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ansesstudios.com"),
  title: `${seriesConfig.series.title} — Official Series | ${seriesConfig.studio.name}`,
  description: `${seriesConfig.series.tagline} Discover AZANIRA, an original AI cinematic mystery adventure series by ${seriesConfig.studio.name}. Follow the expedition aboard the Azure Titan into the unknown.`,
  keywords: [
    "AZANIRA",
    "Anses Studios",
    "AI Cinematic Series",
    "AI Film",
    "Mystery Adventure",
    "Azure Titan",
    "Episode 1",
    "Cinematic Storytelling",
  ],
  authors: [{ name: "Anses Studios", url: seriesConfig.studio.youtubeUrl }],
  creator: "Anses Studios",
  publisher: "Anses Studios",
  openGraph: {
    type: "video.movie",
    title: `${seriesConfig.series.title} | ${seriesConfig.studio.name}`,
    description: `${seriesConfig.series.tagline} What begins as an academic search for a forgotten island becomes a journey into the unknown.`,
    url: "https://ansesstudios.com",
    siteName: seriesConfig.studio.name,
    images: [
      {
        url: seriesConfig.series.masterPoster,
        width: 1280,
        height: 720,
        alt: "AZANIRA Episode 1 Poster — Anses Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${seriesConfig.series.title} | ${seriesConfig.studio.name}`,
    description: seriesConfig.series.tagline,
    images: [seriesConfig.series.masterPoster],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cinzel.variable} ${sans.variable}`}>
      <body className="bg-abyss-950 text-sand-100 font-sans antialiased selection:bg-gold-500/30 selection:text-gold-300 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
