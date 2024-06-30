/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
          satoshi: ["Satoshi"],
          plus: ["Plus Jakarta Sans"],
          poppins: ["Almarena"],
          machina: ['Neue Machina'],
        },
      backgroundImage: {
        "hero-pattern": "url('/public/Images/hero.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        lightGreen: '#D9FF06',
        gray: '#16171A',
        black: '#0F0F0F',
        white: '#F9F7F4',
        lightWhite: '#F9F7F4',
        lightPink: '#FFD7E7',
        lightBlue: '#BAC4E2'
      }, 
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      screens: {
        'sm': '640px', // Adjust this value as needed
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      scale: {
        '27': '27',
        '10': '0.2',
        '165': '1.65',
      },
      transformOrigin: {
        'custom': '0 10px',
      },
    },
  },
  plugins: [],
};