/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Poppins_700Bold',
        body: 'Poppins_400Regular',
      },

      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        primary: '#782dd4',
        secondary: '#424242',
        link: '#0080a8',
      },
    },
  },
  plugins: [],
}
