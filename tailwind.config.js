/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#F9F9F9'
      },
      dropShadow: {
        'button': '0px 4px 4px rgba(0, 0, 0, 0.19)'
      }
    },
  },
  plugins: [],
}

