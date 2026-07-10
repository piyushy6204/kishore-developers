import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pr: {
          white: "#FAFAF8",
          "off-white": "#F3F0EB",
          gold: "#B8976A",
          "gold-light": "#D4B896",
          "gold-dark": "#9A7A52",
          beige: "#E8DFD0",
          taupe: "#9E8E7E",
          grey: "#C8BDB2",
          walnut: "#6B4F3A",
          charcoal: "#1C1C1A",
          muted: "#6B6B65",
          "muted-light": "#9B9B94",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica Neue", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      spacing: {
        section: "7rem",
        "section-sm": "4rem",
      },
      boxShadow: {
        luxury: "0 4px 40px -8px rgba(28,28,26,0.10)",
        "luxury-lg": "0 8px 60px -12px rgba(28,28,26,0.14)",
        "luxury-sm": "0 2px 16px -4px rgba(28,28,26,0.08)",
        card: "0 2px 24px -6px rgba(28,28,26,0.09)",
        "card-hover": "0 8px 40px -8px rgba(28,28,26,0.15)",
        glass: "0 4px 32px -8px rgba(28,28,26,0.10)",
      },
      borderRadius: {
        card: "1.25rem",
        pill: "9999px",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
