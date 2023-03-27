/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    fontFamily: {
      'title': ['Alegreya']
    }
  },
  plugins: [require("daisyui")],
}