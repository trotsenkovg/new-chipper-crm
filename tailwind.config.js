const defaultTheme = require("tailwindcss");
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './resources/assets/js/*.js',
    './resources/assets/js/**/*.js',
    './resources/assets/js/**/**/*.js',
    './resources/views/*.php',
    './resources/views/**/*.php',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#fe5900',
        'secondary': '#d9770e',
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
