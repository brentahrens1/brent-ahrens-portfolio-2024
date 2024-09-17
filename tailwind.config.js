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
        'bounce-rotate': {
          '0%, 100%': {
            transform: 'translateY(-25%) rotate(45deg)',
          },
          '50%': {
            transform: 'translateY(0) rotate(45deg)',
          },
        },
        'image-rise': {
          '0%': {
            transform: 'translateY(0px) translateX(-50%) scale(1)',
            opacity: 0
          },
          '5%': {
            opacity: 1,
          },
          '40%': {
            transform: 'translateY(-1000px) translateX(-50%) scale(5)'
          },
          '80%': {
            transform: 'translateY(-2000px) translateX(-50%) scale(5)'
          },
          '100%': {
            opacity: 0
          },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        'bounce-rotate': 'bounce-rotate 1.5s infinite',
        'image-rise': 'image-rise 26s linear'
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.large-header': {
          fontSize: '27px',
          lineHeight: '34px',
          '@screen sm': {
            fontSize: '36px',
            lineHeight: '45px',
          },
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
        '.pixelate-effect': {
          transform: 'scale(0.5) -translateX(-50%)',
          opacity: 0,
          transition: 'transform 500ms ease-out, filter 500ms ease-out, opacity 300ms ease-out',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}