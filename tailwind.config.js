/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        primary: {
          DEFAULT: "#181818",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
