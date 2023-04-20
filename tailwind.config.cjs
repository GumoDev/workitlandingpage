/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'DarkPurple': '#24053E',
        'Eucaplyptus': '#44FFA1',
        'GhostWhite': '#FCF8FF',
        'DavysGray': '#B8B8B8'
      }
    },
  },
  plugins: [],
}
