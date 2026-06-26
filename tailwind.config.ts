import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816", "bg-alt": "#080D1E",
        cyan: "#00D4FF", "cyan-dark": "#00A8CC",
        purple: "#8B5CF6", "off-white": "#E8F0EF", muted: "#6B8080",
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
