/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    borderRadius: {
      lg: "20px",

      full: "9999px",
    },

    extend: {
      colors: {
        pink: "#F34E89",
      },
    },
  },
  plugins: [],
};
