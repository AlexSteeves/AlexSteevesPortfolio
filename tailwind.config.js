/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:{
          800: '#f4f4f4',
          900: '#2a2a2a',
          1000: '#202020',
        },
        button: {
          100: "#00aba9",
          200: "#00ece9"
        },

      },
    },
  },
  plugins: [],
}