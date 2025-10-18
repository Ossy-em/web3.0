import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(120%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [forms],
};