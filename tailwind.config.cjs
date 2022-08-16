/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-intro': 'hsl(217, 28%, 15%)',
        'dark-blue-main': 'hsl(218, 28%, 13%)',
        'dark-blue-footer': 'hsl(216, 53%, 9%)',
        'dark-blue-testimonial': 'hsl(219, 30%, 18%)',
        'accent-cyan': 'hsl(176, 68%, 64%)',
        'accent-blue': 'hsl(198, 60%, 50%)',
        'accent-light-red': 'hsl(0, 100%, 63%)',
        'neutral-white': 'hsl(0, 0%, 100%)'
      },

      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },

      backgroundImage: {
        'curvy-mobile': 'url(src/assets/bg-curvy-mobile.svg)',
        'curvy-desktop': 'url(src/assets/bg-curvy-desktop.svg)'
      }
    },

    screens: {
      'xsm': '375px',
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2560px'
    }
  },
  plugins: [],
}
