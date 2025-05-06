/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#FF9900",
        "dark-gray": "#121212",
        "darker-gray": "#0A0A0A",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
