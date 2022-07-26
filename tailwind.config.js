module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', '/public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        principiaBlue: '#2986cc',
        principiaGreen: '#90bf24',
        principiaPurple: '#8b25ab',
        principiaOrange: '#e9943b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
