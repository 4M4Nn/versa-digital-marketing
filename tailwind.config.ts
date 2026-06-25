import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#060D0F", "bg-alt": "#0A1518",
        cyan: "#00C9B8", "cyan-light": "#00E5D4",
        purple: "#8B5CF6", "purple-light": "#A78BFA",
        "off-white": "#E8F0EF", "text-muted": "#6B8080",
      },
      fontFamily: {
        space: ["var(--font-space)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
