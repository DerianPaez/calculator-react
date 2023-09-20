/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: '#D7D7D7',
        darkGray: '#363636',
        secondaryDarkGray: '#898989',
        cyan: '#11ACC1',
        lightBlue: '#CBF8FE',
        darkBlue: '#0B8D9E',
        black: '#121212',
      },
      boxShadow: {
        button: '-3px 4px 4px 1px rgba(0, 0, 0, 0.25)',
      },
    },
    plugins: [],
  },
}
