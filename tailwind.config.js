/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

