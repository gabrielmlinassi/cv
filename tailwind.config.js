const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{mdx,ts,tsx}",
    "./lib/**/*.{mdx,ts,tsx}",
    "./components/**/*.{mdx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { default: "750px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-ibm-mono)"],
      },
      colors: {
        "gray-0": "#f9f9f9",
        "gray-05": "#f6f6f6",
        "gray-1": "#eee",
        "gray-2": "#e6e6e6",
        "gray-3": "#ddd",
        "gray-4": "#bbb",
        "gray-5": "#999",
        "gray-6": "#666",
        "gray-65": "#555",
        "gray-7": "#2c2c2c",
        "gray-8": "#252525",
        "gray-9": "#1f1f1f",
        "gray-10": "#181818",
        "green:": "#5eddac",
        "orange:": "#ff7e22",
        "yellow:": "#fca62a",
        divider: "rgba(235,240,251,.18)",
        divider2: "rgba(6,10,21,.12)",
        primary: {
          DEFAULT: "#181818",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        "nav-bg": "var(--color-nav-bg)",
        "nav-border": "var(--color-nav-border)",
        loading: "var(--color-loading)",

        "project-card-1": "hsl(var(--color-green) / 0.24)",
        "project-card-1-highlight": "hsl(var(--color-green) / 1)",

        "project-card-2": "hsl(var(--color-light-blue) / 0.24)",
        "project-card-2-highlight": "hsl(var(--color-light-blue) / 1)",

        "project-card-3": "hsl(var(--color-light-purple) / 0.24)",
        "project-card-3-highlight": "hsl(var(--color-light-purple) / 1)",

        "project-card-4": "hsl(var(--color-pink) / 0.24)",
        "project-card-4-highlight": "hsl(var(--color-pink) / 1)",

        "project-card-5": "hsl(var(--color-violet) / 0.24)",
        "project-card-5-highlight": "hsl(var(--color-violet) / 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".foo": { color: "yellow" },
      });
    }),
  ],
};
