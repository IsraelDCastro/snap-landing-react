const colors = require('tailwindcss/colors')
module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'c-base': '#222',
        'orange': colors.orange,
        'cyan': colors.cyan
      },
      fontSize: {
        'md': '18px'
      },
      transitionDuration: {
        '0': '0ms',
        '400': '400ms',
        '600': '600ms'
      },
      zIndex: {
        '-1': -1,
        '1': 1,
        '5': 5,
      },
      boxShadow: {
        '3xl': '0 16px 42px -15px rgba(0, 0, 0, 0.10)',
      },
      flex: {
        'full': '1 1 100%',
      },
      inset: {
        '-100': '-100%'
      },
      scale: {
        '115': '1.15',
        '130': '1.3',
      },
      backgroundImage: theme => ({
        'section-1': "url('/welcome-min.jpeg')",
        'section-2': "url('/section-2.jpg')",
        'fujiyoshida': "url('/fujiyoshida-2.jpeg')",
        'osaka': "url('/osaka-2.jpeg')",
        'arashiyama-bamboo': "url('/arashiyama-bamboo-2.jpeg')",
        'cta': "url('/tianshu-liu-japan.jpeg')",
        'gastronomy': "url('/gastronomy.jpeg')",
      })
    },
    fontFamily: {
      primary: [
        "Avenir",
        "Lato",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      secondary: [
        "Noto Sans KR",
        "Nunito",
        "Lato",
        '"Helvetica Neue"',
        "Helvetica ",
        "Arial",
        "sans-serif",
      ]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
