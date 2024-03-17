/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-desktop": "url('/src/assets/images/pattern-background-desktop-dark.svg')",
        "dark-mobile": "url('/src/assets/images/pattern-background-mobile-dark.svg')",
        "dark-tablet": "url('/src/assets/images/pattern-background-tablet-dark.svg')",
        "light-desktop": "url('/src/assets/images/pattern-background-desktop-light.svg')",
        "light-mobile": "url('/src/assets/images/pattern-background-mobile-dark.svg')",
        "light-tablet": "url('/src/assets/images/pattern-background-tablet-dark.svg')",
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626c7f",
        "light-blue": "#ABC1E1",
        "light-grey": "#f4f6fa",
        "secondary-purple": "#A729F5",
        "secondary-light-purple": "#F6E7FF",
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
