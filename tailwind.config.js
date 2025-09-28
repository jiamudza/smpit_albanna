/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: "#3d0e61",
        pinky: "#F589D7",
        base: "#f4effa",
        black: "#121212",
        title: "#0B132A",
        text: "#4F5665",
        pale: "#EFEEEE",
        xpale: "#BABABA"
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
  darkMode: false
};
