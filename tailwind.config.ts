import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: {
          950: "#030508",
          900: "#06090f",
          850: "#0a0f17",
          800: "#0f1622",
          700: "#162030",
          600: "#1e2c40",
          500: "#2a3d58",
        },
        gold: {
          300: "#fae09c",
          400: "#eac06a",
          500: "#d4a23d",
          600: "#b58226",
          700: "#8a5f15",
          800: "#63430c",
        },
        sea: {
          400: "#5a8c9e",
          500: "#3d6a7d",
          600: "#294d5e",
          700: "#1a3442",
          800: "#10232e",
        },
        sand: {
          100: "#faf7f2",
          200: "#f2ece0",
          300: "#efe7d6",
          400: "#ddd1ba",
          500: "#c2b496",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "radial-vignette": "radial-gradient(circle at center, transparent 40%, rgba(3, 5, 8, 0.85) 100%)",
        "gold-gradient": "linear-gradient(135deg, #fae09c 0%, #d4a23d 50%, #8a5f15 100%)",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar-sweep": "spin 8s linear infinite",
        fadeIn: "fadeIn 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
