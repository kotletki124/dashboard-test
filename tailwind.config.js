/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './tabs/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif']
    },
    colors: {
      primaryRed: '#D90E32',
      primaryDarkRed: '#A60933',
      primaryDark: '#282828',
      primaryLightGrey: '#F3F6F8',
      textBlack: '#293148',
      textDarkGrey: '#293148CC',
      textGrey: '#29314899',
      textLightGrey: '#29314873',
      textLineGrey: '#E4E4E4',
      textWhite: '#FFFFFF',
      textWhite60: '#FFFFFF99',
      textWhite45: '#FFFFFF73',
      textWhite20: '#FFFFFF33',
      secondaryDarkRed: '#59051C',
      secondaryLightRed: '#E86E84',
      secondaryBlue: '#7895FF',
      secondaryGreen: '#7FC75E',
      secondaryGrey: '#EDEDED',
      neutralGrey: '#3F3356'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
