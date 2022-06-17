const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
