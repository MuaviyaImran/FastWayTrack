/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0346b5',
        secondary: {
          DEFAULT: '#333333',
          light: '#989898',
        },
        tertiary: '#b5087b',
      },
      fontSize: {
        xxs: ['0.625rem', '0.938rem'],
      },
    },
  },
  plugins: [],
}
