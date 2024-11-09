/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        softBlack:"#1B1A1B",
        softGray:"#333333",
        lightGray:"#424243"
      }
    },
  },
  plugins: [],
}

