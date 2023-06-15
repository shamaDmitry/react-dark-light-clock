/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-mode": "url('./assets/light.svg')",
        "dark-mode": "url('./assets/dark.svg')",
        "phone": "url('./assets/iphone.svg')",
      },
      colors: {
        "dark": "#082B53",
      },
    },
  },
  plugins: [],
}

