/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '17px',
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
          greylight: '#575757',
          darkblue: '#000F37',
          white: '#FFFFFF',
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
