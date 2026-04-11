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
        bg: "#FAFAF7",
        text: "#1A1A1A",
        "text-muted": "#6B6B6B",
        accent: "#1B4D5C",
        "accent-light": "#E8F1F4",
        border: "#E8E4DD",
        "border-light": "#F0EDE8",
        "row-alt": "#F7F5F0",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        article: "720px",
        table: "1100px",
      },
      fontSize: {
        body: ["1.125rem", { lineHeight: "1.75" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
      },
    },
  },
  plugins: [],
};
export default config;
