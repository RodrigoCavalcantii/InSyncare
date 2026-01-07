/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1F6F78",
        "primary-hover": "#16555c",
        secondary: "#A6CDB5",
        accent: "#E9836F",
        "background-light": "#FAFAF7",
        "background-dark": "#151e22",
        "surface-light": "#ffffff",
        "surface-dark": "#1e2a30",
        "text-secondary": "#5F6F73",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(31, 111, 120, 0.1)",
        input: "0 2px 8px rgba(95, 111, 115, 0.05)",
      },
    },
  },
  plugins: [],
}
