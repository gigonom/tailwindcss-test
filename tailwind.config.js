/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/img/bg1.jpg')",
      },
      animation: {
        'bounce-slow': 'smoothly 10s linear infinite',
        'bounce-slow-2': 'smoothly 7s linear infinite',
        'bounce-slow-3': 'smoothly 12s linear infinite',
      },
      keyframes: {
        smoothly: {
          '0%, 100%': { transform: 'translateY(0%)', 'animation-timing-function': 'ease-in-out' },
          '50%': { transform: 'translateY(-25%)', 'animation-timing-function': 'ease-in-out' },
        }
      }
    },
  },
  plugins: [],
}
