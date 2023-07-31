/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{html,jsx}",
    "./component/**/*.{html,jsx}"
    ],
  theme: {
    extend: {
      colors: {
        strongpink: '#F787BE',
        rose : '#ED6461',
        pinkrose : '#FFBEF7',
        pinkwhite : '#FEEBD6',
        newblack : '#2F2C23',
      },
    },
  },
  plugins: [],
}

