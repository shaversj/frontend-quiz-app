/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626c7f",
        "light-grey": "#f4f6fa",
        "secondary-purple": "#A729F5",
        "secondary-green": "#26D782",
        "secondary-red": "#EE5454",
      },
      fontFamily: {
        "Rubik-Regular": ["Rubik-Regular", "sans-serif"],
        "Rubik-Medium": ["Rubik-Medium", "sans-serif"],
        "Rubik-Italic": ["Rubik-Italic", "sans-serif"],
        "Rubik-Light": ["Rubik-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
