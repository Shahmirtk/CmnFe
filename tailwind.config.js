const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
  	'./pages/**/*.{js,ts,jsx,tsx}', 
  	'./components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or false or 'class'
  theme: {
    colors: {
    	transparent: 'transparent',
    	current: 'currentColor',
    	gray: colors.coolGray,
    	yellow: colors.amber,
    	green: colors.emerald,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    borderColor: theme => ({
    	DEFAULT: theme('colors.emerald', 'currentColor'),
    	'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    textColor: theme => theme('colors'),
    textColor: {
    	'primary': '#3490dc',
    	'secondary': '#ffed4a',
    	'danger': '#e3342f',
    },
    backgroundColor: theme => ({
    	'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
