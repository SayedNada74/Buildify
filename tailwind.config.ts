import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design Token Color Palette
        brand: {
          beige: "#F5F4F0",       // Primary Warm Beige surface
          "beige-subtle": "#EFECE6",// Card / Section warm beige offset
          navy: "#0B2545",        // Deep Midnight Navy text / header
          "navy-dark": "#07172C", // Dark section base
          teal: "#00A896",        // Vibrant Teal Accent
          "teal-hover": "#0D9488",// Secondary Teal / Hover accent
          taupe: "#B4B0A7",       // Subtle border taupe
          slate: "#475569",       // Body text slate
        },
        // Semantic Token Aliases
        background: {
          DEFAULT: "var(--color-bg-primary, #F5F4F0)",
          secondary: "var(--color-bg-secondary, #EFECE6)",
          elevated: "var(--color-bg-elevated, #FFFFFF)",
          dark: "var(--color-bg-dark-section, #0B2545)",
        },
        foreground: {
          DEFAULT: "var(--color-fg-primary, #0B2545)",
          muted: "var(--color-fg-muted, #475569)",
          light: "var(--color-fg-light, #F8FAFC)",
        },
        accent: {
          DEFAULT: "var(--color-accent, #00A896)",
          hover: "var(--color-accent-hover, #0D9488)",
        },
        border: {
          DEFAULT: "var(--color-border-subtle, rgba(11, 37, 69, 0.12))",
          dark: "var(--color-border-dark, rgba(255, 255, 255, 0.15))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(11, 37, 69, 0.05)",
        card: "0 10px 30px -4px rgba(11, 37, 69, 0.08)",
        elevated: "0 20px 40px -6px rgba(11, 37, 69, 0.12)",
      },
      borderRadius: {
        "brand-sm": "6px",
        brand: "12px",
        "brand-lg": "20px",
        "brand-xl": "32px",
      },
      maxWidth: {
        site: "1280px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
