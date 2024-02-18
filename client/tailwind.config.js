const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1.1rem',
      base: '1.46rem',
      xl: '1.825rem',
      '2xl': '2.2rem',
      '3xl': '2.7rem',
      '4xl': '3.25rem',
      '5xl': '4.3rem',
    },
    extend: {
      colors: {
        primary: '#5F3DF7'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '350ms',
      }
    },
  },
  plugins: [
    plugin (({addUtilities, addComponents}) => {
      addComponents({
        '.shadow-icon': {
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          padding: 'o.6rem',
          display: 'flex',
          alignItems: 'center',
          fontSize: '2.7rem',
          transition: 'box-shadow .4s ease-in-out',          
          boxShadow: '0 4px 10px rgba(45, 8, 125, 0.2)',
          color: '#3353538',
          borderRadius: '50%',
          backgroundColor: '#fff',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(45, 8, 125, 0.26)'
          }
        }
      }),
      addUtilities({
        '.flex-center-between':{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.flex-center-center':{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }
      })
    })
  ],
}

