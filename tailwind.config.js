/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'onyx': '#393D3F',
        'cream': '#FDFDFF',
        'silver': '#C6C5B9',
        'munsell': '#62929E',
        'paynes-grey': '#546A7B',
      }
    },
  },
  plugins: [],
}
