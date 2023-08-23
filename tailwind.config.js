/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'Dark-cyan': 'hsl(185, 75%, 39%)',
        'Very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'Dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'Dark-gray': 'hsl(0, 0%, 59%)',
      },
    },
    fontFamily: {
      'sans': ['Kumbh Sans', 'sans-serif']
    }
  },
  plugins: [],
}

