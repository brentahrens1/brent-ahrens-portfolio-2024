/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#F9F9F9',
        lightgray: '#D9D9D9',
        nightblue: '#3D50FC',
        youngarts: '#3DC3FC',
        tempopay: "#F9E59E"
      },
      dropShadow: {
        'button': '0px 4px 4px rgba(0, 0, 0, 0.19)'
      },
      borderWidth: {
        'cta': '1.5px'
      },
      fontFamily: {
        'fkgrotesk': ['fkgrotesk']
      },
      lineHeight: {
        '86': '86px'
      }
    },
  },
  plugins: [],
}

