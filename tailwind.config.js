/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(103, 80, 164, 1)",
        secondary: "#00d682",
        tertiary: "#0082d6",
        quaternary: "#d60082",
      },
    },
  },
  plugins: [],
};
