/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8200d6",
        secondary: "#00d682",
        tertiary: "#0082d6",
        quaternary: "#d60082",
      },
    },
  },
  plugins: [],
};
