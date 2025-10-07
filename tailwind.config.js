/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#161FF8', // Azul
        secondary: '#2EB284', // Verde
        accent: '#D3B284', // Beige
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        // Se agregará la fuente de títulos en el siguiente paso
      },
    },
  },
  plugins: [],
};
