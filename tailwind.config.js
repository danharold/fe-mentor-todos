const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "bg-desktop-dark":
          "url('../fe-mentor-resources/images/bg-desktop-dark.jpg')",
        "bg-desktop-light":
          "url('../fe-mentor-resources/images/bg-desktop-light.jpg')",
        "bg-mobile-dark":
          "url('../fe-mentor-resources/images/bg-mobile-dark.jpg')",
        "bg-mobile-light":
          "url('../fe-mentor-resources/images/bg-desktop-dark.jpg')",
        iconCheck: "url('../fe-mentor-resources/images/icon-check.svg')",
      },
    },
    colors: {
      primary: "#3a7bfd",
      check: {
        1: "#57ddff",
        2: "#c058f3",
      },
      light: {
        grey: "#fafafa",
        "greyish-blue": {
          100: "#e4e5f1",
          200: "#d2d3db",
          300: "#9394a5",
          400: "#484b6a",
        },
      },
      dark: {
        "very-dark-blue": "#161722",
        "very-dark-desat-blue": "#25273c",
        "greyish-blue": {
          100: "#cacde8",
          hover: "#e4e5f1",
          200: "#777a92",
          300: "#4d5066",
          400: "#393a4c",
        },
      },
    },
  },
  plugins: [],
};
