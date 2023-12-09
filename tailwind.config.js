/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '14px',
      sm: '18px',
      base: '20px',
      md: '24px',
      lg: '32px',
      'headline-base': '46px',
      'headline-md': '48px',
      'headline-samllScreen': '48px',
      'headline-lg': '85px',
    },
    extend: {
      colors: {
        primary: '#1E5AFA',
        secondary: '#263238',
        neutral: {
          black: '#011037',
          grey: '#313131',
          'grey-200': '#9C9EA3',
          'grey-300': '#E7EBEE',
          greylight: '#575757',
          darkblue: '#000F37',
          lightblue: '#1B263D',
          white: '#FFFFFF',
          'white-100': '#FAFAFA',
        },
        action: {
          warning: '#FBC02D',
          error: '#E53835',
          success: '#2E7D31',
        },
      },
    },
  },
  plugins: [],
};
