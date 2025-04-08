/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066B3', // deep blue
        secondary: '#8ED195', // light green
        third: '#469DD4', // light blue
      },
      textColor: {
        white: '#FFFFFF',
        disabled: '#A8A8A8',
        lightblue: '#469DD4',
        deepgray: '#5E5E5E',
        red: '#FA5757',
      },
      borderColor: {
        base: '#F5F5F7',
        primary: '#A8A8A8', // light gray
        secondary: '#000000', // black
      },
      width: {
        base: '1280px',
      },
      maxWidth: {
        base: '1280px',
      },
      borderRadius: {
        base: '0.5rem',
        lg: '1rem',
      },
    },
  },
  plugins: [],
}
