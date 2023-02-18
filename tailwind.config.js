/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scaling: "scale 1.1s ease-in-out",
        landing: "scale 1s ease-in-out",
      },
      keyframes: {
        scale: {
          "0%": {
            transform: "scale(3)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
