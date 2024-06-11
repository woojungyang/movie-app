/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff6b6b', // 밝은 레드
          DEFAULT: '#ff4d4d', // 기본 레드
          dark: '#cc0000', // 어두운 레드
        },
        secondary: {
          light: '#4d4dff', // 밝은 블루
          DEFAULT: '#1a1aff', // 기본 블루
          dark: '#0000b3', // 어두운 블루
        },
        accent: {
          light: '#ffcc4d', // 밝은 골드
          DEFAULT: '#ffb84d', // 기본 골드
          dark: '#cc9900', // 어두운 골드
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        black: {
          light: '#666666', // 밝은 블랙 (회색 느낌)
          DEFAULT: '#000000', // 기본 블랙
          dark: '#0d0d0d', // 어두운 블랙
        },
        white: {
          DEFAULT: '#ffffff', // 기본 화이트
          light: '#f5f5f5', // 밝은 화이트
          dark: '#e0e0e0', // 어두운 화이트
        },
      },
    },
  },
  plugins: [],
};
