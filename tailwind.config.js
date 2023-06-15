/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        title: ['64px', '75px'],
      },
      backgroundImage: {
        "light-mode": "url('./assets/light.svg')",
        "dark-mode": "url('./assets/dark.svg')",
        "phone": "url('./assets/iphone.svg')",
        "pixel": "url('./assets/pixel.svg')",
      },
      colors: {
        "dark": "#082B53",
      },
    },
  },
  plugins: [],
}

