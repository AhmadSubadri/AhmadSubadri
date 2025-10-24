/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A2540',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
