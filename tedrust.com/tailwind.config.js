/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./**/*.html",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      red: colors.rose,
      pink: colors.fuchsia,
      emerald: colors.emerald,
      yellow: colors.amber,
      green: colors.lime,
      purple: colors.indigo,
      orange: colors.orange,
      blue: colors.blue,
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Alkatra", "Alkatra"],
      serif: ["Alkatra", "Alkatra"],
      mono: ["ui-monospace", "SFMono-Regular"],
      extend: {
        spacing: {
          "2xl": "24rem",
          "4xl": "48rem",
          "6xl": "72rem",
          "8xl": "96rem",
          "10xl": "120rem",
        },
      },
      plugins: [require("flowbite/plugin")],
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
        ],
      },
      ignoreWarnings: [/Failed to parse source map/],
    },
  },
  plugins: [require("flowbite/plugin")],
};
