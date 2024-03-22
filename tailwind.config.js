/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'low': '#dbce12',
        'medium': '#db6212',
        'good': '#12db34',
        'high': '#db1912'
      }
    },
  },
  plugins: [],
}

