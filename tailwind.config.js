const defaultTheme = require("tailwindcss");
const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#fe5900',
        'secondary': '#d9770e',
        'neutral': ''
      },
      backgroundImage: theme => ({
        'logo': "url('/assets/img/logo-chipper.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
