const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      yellow: colors.amber,
      wblack: {
        DEFAULT: '#040404'
      },
      secondary: {
        // DEFAULT: '#503D41'
        lighter: '#C3BFBD',
        DEFAULT: '#5E4953',
        darker: '#302124'
      }

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
