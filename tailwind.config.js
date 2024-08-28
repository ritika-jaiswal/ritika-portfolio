/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        keyframes: {
          'fade-in': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          'slide-up': {
            '0%': { transform: 'translateY(20px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
        },
        animation: {
          'fade-in': 'fade-in 2s ease-out',
          'slide-up': 'slide-up 1.5s ease-out',
        },
        backgroundImage: {
          'gray-white-gradient': 'linear-gradient(to right, #000000,  #4A5568)', // gray-800 is #4A5568
        },
    },
  },
  plugins: [],
}
