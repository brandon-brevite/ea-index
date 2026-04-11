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
        navy: {
          DEFAULT: "#0C1B3F",
          light: "#1A2D5A",
        },
        blue: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        purple: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        teal: {
          DEFAULT: "#0D9488",
          light: "#14B8A6",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        article: "720px",
        content: "1200px",
        table: "1100px",
      },
      fontSize: {
        body: ["1.0625rem", { lineHeight: "1.8" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
      },
      borderRadius: {
        pill: "50px",
      },
      boxShadow: {
        glow: "0 4px 20px rgba(37, 99, 235, 0.15)",
        "glow-lg": "0 8px 40px rgba(37, 99, 235, 0.2)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
