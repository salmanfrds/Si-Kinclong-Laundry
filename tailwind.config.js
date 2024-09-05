/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px',
      },
      textShadow: {
        'white': '0 0 3px rgba(255, 255, 255, 0.7), 0 0 6px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}