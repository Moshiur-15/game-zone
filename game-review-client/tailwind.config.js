/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        exe2: ['Exo 2', 'sans-serif'], // Using Exo 2
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
