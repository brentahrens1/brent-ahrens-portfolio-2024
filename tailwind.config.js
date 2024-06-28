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
        tempopay: "#F9E59E",
        projectSubText: 'rgba(0, 0, 0, 0.45)'
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
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(-50%) translateX(10px)' },
          '100%': { transform: 'translateY(-50%) translateX(-353px)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.large-header': {
          fontSize: '36px',
          lineHeight: '45px',
          '@screen md': {
            fontSize: '48px',
            lineHeight: '58px',
          },
          '@screen xl': {
            fontSize: '72px',
            lineHeight: '86px',
          },
        },
        '.section-h-padding': {
          paddingRight: '18px',
          paddingLeft: '18px',
          '@screen md': {
            paddingRight: '40px',
            paddingLeft: '40px',
          },
          '@screen xl': {
            paddingRight: '80px',
            paddingLeft: '80px',
          },
        },
        '.section-padding-l': {
          paddingLeft: '18px',
          '@screen md': {
            paddingLeft: '40px',
          },
          '@screen xl': {
            paddingLeft: '80px',
          },
        },
        '.section-padding-r': {
          paddingRight: '18px',
          '@screen md': {
            paddingRight: '40px',
          },
          '@screen xl': {
            paddingRight: '80px',
          },
        },
      }

      addUtilities(newUtilities, ['responsive'])
    },
  ],
}