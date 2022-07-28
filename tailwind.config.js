/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:"'Montserrat', sans-serif"
      },
      colors:{
        mainBlack:"#282828"
      },
      width:{
        18:"4.5rem"
      },
      height:{
        18:"4.5rem"
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp')],
}
