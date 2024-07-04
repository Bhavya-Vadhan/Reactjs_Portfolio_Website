/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "#684DF4",
        grey: "#737887",
        black: "#141D38"
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
      },
      keyframes: {
        menu: {
          '0%': { transform: 'translateX(-300px)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        menu: 'menu 1s ease-in-out'
      }
    },
    clipPath: {
      custom: 'path("M13.3648 23.689C12.3113 18.0885 13.5019 11.7494 18.6938 9.40012C35.1267 1.96429 68.7714 -9.44147 82.3112 14.0815C100.548 45.7649 138.846 59.5402 82.3112 87.5508C66.122 95.5719 56.2138 98.9992 50.3168 99.8059C42.2525 100.909 34.515 87.5508 26.3756 87.5508H13.8433C10.9933 87.5508 8.2154 86.3499 6.50037 84.0737C-12.7867 58.4757 17.3824 45.0461 13.3648 23.689Z")',
      client: 'polygon(0 0, 100% 0, 97% 50%, 100% 100%, 0 100%, 3% 50%)',
      traingle: 'polygon(0 0,100% 100%,0 100%)'
    }
  },
  plugins: [
    require('tailwind-clip-path')
  ],
}

