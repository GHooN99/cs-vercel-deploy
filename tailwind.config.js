// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // make sure it's pointing to the ROOT node_module
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              // cyan
              50: '#F0FCFF',
              100: '#E6FAFE',
              200: '#D7F8FE',
              300: '#BEE3F8',
              400: '#7DD3FC',
              500: '#06B7DB',
              600: '#06B7DB',
              700: '#0077B6',
              800: '#005E93',

              // cyan 600
              DEFAULT: '#06B7DB',
            },
            secondary: {
              50: '#F5F5F5',
              100: '#EEEEEE',
              200: '#E0E0E0',
              300: '#D6D6D6',
              400: '#C2C2C2',
              500: '#9E9E9E',
              600: '#757575',
              700: '#616161',
              800: '#424242',

              // Light Grey 600
              DEFAULT: '#757575',
            },
          },
        },
      },
    }),
  ],
};
