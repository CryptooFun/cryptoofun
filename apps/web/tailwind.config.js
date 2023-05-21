/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      turkuaz: '#34E0CE',
      gri: '#5C5C5C',
      white: '#FFFFFF',
      dark: '#3E3D3D',
      black: '#000000',
      green: '#32CD32',
    },
    boxShadow: {
      default: "0px 16px 16px rgba(0, 0, 0, 0.160784)",
    },
    screens: {
      'max-lg': {
        max: '1023px',
      },
    },
    extend: {},
  },
  plugins: [],
};
