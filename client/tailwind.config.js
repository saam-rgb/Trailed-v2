/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4500",
        secondary: "#333333",
        accentBlue: "#1E90FF",
        accentGreen: "#32CD32",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
