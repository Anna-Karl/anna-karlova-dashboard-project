const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
	theme: {
		fontSize: {
      '2xs': '0.75rem',
			xs: '1rem',
			sm: '1.1rem',
			tiny: '1.19rem',
			base: '1.27rem',
			lg: '1.4rem',
			xl: '1.64rem',
			'2xl': '1.825rem',
			'3xl': '2.2rem',
			'4xl': '2.7rem',
			'5xl': '3.25rem',
			'6xl': '4.3rem',
			'7xl': '5.8rem'
		},
		extend: {
			colors: {
				primary: '#5F3DF7',
				black: '#222'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease'
			},
			transitionDuration: {
				DEFAULT: '250ms'
			}
		}
	},
  plugins: [
    plugin (({addUtilities, addComponents}) => {
      addComponents({
        '.shadow-icon': {
          padding: 'o.4rem',
          display: 'flex',
          alignItems: 'center',
          fontSize: '2rem',
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

