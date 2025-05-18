/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  theme: {
    extend: {},
  },
  plugins: [],
};