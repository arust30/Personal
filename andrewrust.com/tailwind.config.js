/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Source Code Pro", "Source Code Pro"],
      serif: ["Source Code Pro", "Source Code Pro"],
      mono: ["ui-monospace", "SFMono-Regular"],
      extend: {
        spacing: {
          "2xl": "24rem",
          "4xl": "48rem",
          "6xl": "72rem",
          "8xl": "96rem",
          "10xl": "120rem",
        },
        width: {
          '1/1': '100%',
        },
        overflow: ['hidden', 'auto'],
      },
    },
    extend: {
      colors: {
        primary: '#2081C3',
        secondary: '#00B295',
        black: '#0B0A07',
        dark_gray: '#707078',
        light_gray: '#E6E6E9',
        white_alt: '#FBF5F3',
      },
    },
  },
  variants: {},
  plugins: [],
};