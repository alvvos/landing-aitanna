/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "aitanna-dark": "#0f172a",
        "aitanna-teal": "#0d9488",
        "aitanna-light": "#2dd4bf",
      },
    },
  },
  plugins: [],
};
