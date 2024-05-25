/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'indie': ['Indie Flower', 'sans-serif'],
        'annie': ['Annie Use Your Telescope', 'sans-serif'],
        'playpen': ['Playpen Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      screens: {
        'betterhover': { 'raw': '(hover: hover)' },
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
}

