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
        canvas: "#16181c",
        raised: "#1e2127",
        line: "#2c3038",
        ink: "#e9e5dc",
        muted: "#9a9fa8",
        accent: "#e3a857",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-plex)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
