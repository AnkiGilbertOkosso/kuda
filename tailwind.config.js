/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      primary: '#4CAF50',
      'primary-100': '#B9FBBB',
      secondary: '#FFC107',
      backgroundLight: '#FFFFFF',
      backgroundDark: '#374151',
      textDark: '#333333',
      textLight: '#FFFFFF',
      accent1: '#2196F3',
      accent2: '#FF5722',
      error: '#FF0000',
      success: '#00FF00',
      neutral1: '#CCCCCC',
      neutral2: '#E0E0E0',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

