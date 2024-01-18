/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0E",
        secondary: "#999EAB",
        blue: "#1765FC",
      },
    },
  },
  plugins: [],
};
