/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#242424',
      'white': '#ffffff',
      'soft-white': '#f7f7f5',
      'gray': '#a9a59a',
      'soft-gray': '#e9e8e4',
      'yellow': '#ffd60a',
      'gold': '#ffc300'
    },
    fontFamily: {
      'outFit': ['Outfit']
    },
    fontSize: {
      sm: '12px',
      base: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '42px',
      '5xl': '64px',
    },
    extend: {
    }
  },
  plugins: [],
}

