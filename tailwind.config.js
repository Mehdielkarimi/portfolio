/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "#080808",
        surface: "#111111",
        border: "#1f1f1f",
        muted: "#404040",
        subtle: "#888888",
        text: "#f0f0f0",
        accent: "#a8ff78",
      },
      maxWidth: {
        content: "760px",
      },
      spacing: {
        section: "160px",
      },
    },
  },
  plugins: [],
};
