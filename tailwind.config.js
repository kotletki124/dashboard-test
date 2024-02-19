/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './tabs/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif']
    },
    
    extend: {
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
    }
  },
  plugins: [require('@tailwindcss/forms')],
  safelist: (function () {
    const safelist = []

    for (let i = 2; i <= 20; i++) {
      safelist.push(`grid-cols-[repeat(${i},auto)]`)
      safelist.push(`[&:nth-child(${i}n)]:border-r`)
      safelist.push(`[&:nth-child(${i}n+1)]:border-l`)
    }

    return safelist
  })()
}
