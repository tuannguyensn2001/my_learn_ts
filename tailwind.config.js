const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        'nav-color': '#111827',
        'text-color': '#423f3f',
      },
      backgroundImage: (theme) => ({
        course:
          "url('https://www.herzing.edu/sites/default/files/styles/fp_640_288/public/images/blog/study_space_desk.png.webp?itok=s6BOpcLJ')",
      }),
    },
    screens: {
      // 'sm': {'min': '640px', 'max': '767px'},
      sm: { max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      '2xl': { min: '1536px' },
      gt_sm: { min: '768px' },
      gt_md: { min: '1024px' },
      gt_lg: { min: '1280px' },
      lt_md: { max: '767px' },
      lt_lg: { max: '1023px' },
      lt_xl: { max: '1279px' },
      lt_2xl: { max: '1535px' },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fill: (theme) => ({
      'blue-400': theme('colors.blue.400'),
      'blue-500': theme('colors.blue.500'),
      'blue-600': theme('colors.blue.600'),
    }),
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
