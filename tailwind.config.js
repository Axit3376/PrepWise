/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",         // covers general app
    "./app/**/**/*.{js,ts,jsx,tsx}",       // nested folders like (auth), (root)
    "./components/**/*.{js,ts,jsx,tsx}",   // your components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
