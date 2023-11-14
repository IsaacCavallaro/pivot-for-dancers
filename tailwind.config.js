/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-900': '#433E49',
        'purple-800': '#928490',
        'tan-300': '#DBC1AD',
        'pink-100': '#F3E8EB',
      },
      textColor: {
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
