import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        "dark-nav": "#0A0F1E",
        cyan: "#00D4FF",
        "cyan-dark": "#0099CC",
        "cyan-glow": "rgba(0,212,255,0.1)",
        muted: "#94A3B8",
        light: "#F8F9FA",
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
