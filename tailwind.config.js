/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'] // Replace 'Roboto' with your font
      },
      colors:{
        first: '#F78C6A',
        second: '#108AB1',
        third: '#073A4B',
        forth: '#1F2937'
      }
    }
  },
  plugins: []
}
