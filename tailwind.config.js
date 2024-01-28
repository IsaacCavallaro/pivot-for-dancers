module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-gray': '#647C90',
        'purple-gray': '#928490',
        'beige': '#E2DED0',
        'dark-gray': '#4E4F50',
        'brown-gray': '#746C70',
        'off-white': '#FAF9F6'
      },
      textColor: {
        'white': '#FFFFFF',
        'black': '#000000',
        'light-gray': '#647C90',
        'purple-gray': '#928490',
        'beige': '#E2DED0',
        'dark-gray': '#4E4F50',
        'brown-gray': '#746C70',
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'], // Headings
        'montserrat': ['Montserrat', 'sans-serif'],  // Paragraphs
      },
    },
  },
  plugins: [],
};
