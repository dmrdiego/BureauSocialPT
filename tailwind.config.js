/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors (kept but refined)
        primary: '#044050',
        secondary: '#788b92',

        // Apple-esque Neutrals
        'apple-gray': {
          50: '#F5F5F7',  // Background
          100: '#E8E8ED', // Light Gray elements
          200: '#D2D2D7', // Borders
          300: '#86868B', // Secondary Text
          400: '#6E6E73',
          500: '#424245',
          600: '#1D1D1F', // Primary Text
          700: '#161617', // Dark Mode BG
        },
        'apple-blue': '#0071E3', // Action Blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

