/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        basement: ['basement', 'Helvetica Neue'] 
      },
      colors: {
        'white': '#ffffff',
        'gray': {
          100:'#1D1D1D',
          200: '#999999'
        },
        'red': 'red',
        'black': 'black'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
  
    },
  },
  plugins: [],
}
