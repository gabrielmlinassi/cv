const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Century Gothic, sans-serif",
          "'Lato', sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      animation: {
        bounce: "bounce .3s infinite",
        wiggle: "wiggle 1s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "scale(1.2) rotate(7deg)",
          },
          "50%": {
            transform: "scale(0.8) rotate(-7deg)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
