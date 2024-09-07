/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron': 'url("./static/img/jumbotron.jpg")',
      }
    },
  },
  plugins: [],
}
