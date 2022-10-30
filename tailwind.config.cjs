/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: ' #1D2123',
      transparent: 'transparent',
      secondary: '#FACD66',
      mxsecondary: 'rgba(250, 205, 102, 0.4)',
      palete: '#609EAF',
      dimWhite: '#EFEEE0',
      brightWhite: '#FFFFFF',
      sgHead: '#A4C7C6',
      smhandle: '#1A1E1F',
    },
    gridTemplateColumns: {
      card: '1fr 5fr 1fr;',
    },
  },
  animation: {
    slideup: 'slideup 1s ease-in-out',
    slidedown: 'slidedown 1s ease-in-out',
    slideleft: 'slideleft 5s ease-in-out',
    slideright: 'slideright 5s ease-in-out',
    wave: 'wave 1.2s linear infinite',
    slowfade: 'slowfade 2.2s ease-in-out',
  },
  keyframes: {
    slowfade: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    slideup: {
      from: { opacity: 0, transform: 'translateY(25%)' },
      to: { opacity: 1, transform: 'none' },
    },
    slidedown: {
      from: { opacity: 0, transform: 'translateY(-25%)' },
      to: { opacity: 1, transform: 'none' },
    },
    slideleft: {
      from: { opacity: 0, transform: 'translateX(-20px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
    slideright: {
      from: { opacity: 0, transform: 'translateX(20px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
    wave: {
      '0%': { transform: 'scale(0)' },
      '50%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(0)' },
    },
  },
  screens: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  plugins: [],
}
