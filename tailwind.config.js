module.exports = {
  purge: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './styles/**/*.{ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '70px auto 50px',
        mobile: 'auto auto auto',
        tablet: 'auto auto auto',
        desktop: 'auto auto',
      },
      gridTemplateColumns: {
        mobile: '1rem auto 1rem',
        tablet: '3rem auto 3rem',
        desktop: '20rem auto 15rem 20rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
