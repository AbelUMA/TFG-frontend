module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', '/public/index.html'],
  safelist: ['text-[#f1c232]'],
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
