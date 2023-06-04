/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        'primary-200': 'hsl(180, 52%, 96%)', // background color,
        'primary-300': ' hsl(180, 31%, 95%)', // tablet colors
        'primary-600': 'hsl(180, 8%, 52%)',
        'primary-700': 'hsl(180, 14%, 20%)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
