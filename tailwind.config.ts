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
        gold: "#D49F42",
        deepPurple: "#4B0082",
        darkSand: "#C0B283",
        elegantBlack: "#1C1C1C",
        blackOlive: "#3B3C36",
        background: "var(--background)",
        foreground: "var(--foreground)",
        whatsapp: "#25D366", // WhatsApp green
        instagram: "#E1306C", // Instagram pink
        tiktok: "#010101", // TikTok black
      },
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
};
export default config;
