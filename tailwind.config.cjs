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
      },
      padding: {
        "20-80": "clamp(1.25rem, -0.071rem + 5.63vw, 5rem)",
        "24-74": "clamp(1.5rem, 0.4rem + 4.69vw, 4.625rem)",
        "36-350": "clamp(2.25rem, -4.66rem + 29.48vw, 21.875rem)",
        "36-280": "clamp(2.25rem, -3.12rem + 22.91vw, 17.5rem)",
        "128-165": "clamp(8rem, 7.19rem + 3.47vw, 10.3125rem)",
        "36-104": "clamp(2.25rem, 0.75rem + 6.38vw, 6.5rem)",
        "160-176": "clamp(10rem, 9.65rem + 1.50vw, 11rem)",
        "48-140": "clamp(3rem, 0.98rem + 8.64vw, 8.75rem)",
        "288-360": "clamp(18rem, 16.42rem + 6.76vw, 22.5rem)",
        "36-120": "clamp(2.25rem, 0.40rem + 7.89vw, 7.5rem)",
        "48-95": "clamp(3rem, 1.97rem + 4.413vw, 5.9375rem)",
      },
      inset: {
        "20-290": "clamp(1.25rem, -4.69rem + 25.35vw, 18.125rem)",
      }
    }
  },
  plugins: [],
}
