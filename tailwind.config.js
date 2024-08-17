/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#030627",
        secondary:"#201D41",
        temporary:"#7C5E8B"
      }
    },
  },
  plugins: [],
}