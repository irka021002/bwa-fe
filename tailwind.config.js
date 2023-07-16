/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "offwhite": "#f6f8fd",
        "grey": "#e5e9f2",
        "black": "#34364a",
        "blue": "#2447f9",
        "green": "#47bb8e",
        "red": "#f65d6d"
      },
      fontFamily: {
        "poppins": ['Poppins', "sans-serif"]
      },
      boxShadow: {
        "button": "10px 12px 20px 0 #e7ebf5",
        "outline": "0 0 0 .25rem rgba(13,110,253,.25)"
      }
    },
  },
  plugins: [],
}

