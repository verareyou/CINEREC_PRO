/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scaling: "scale 1.1s ease-in-out",
        landing: "scale 1s ease-in-out",
        blink: "blinking 1.5s ease-in-out infinite ",
        scalingabout: "scaleabout 0.4s ease-in-out",
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
        scaleabout: {
          "0%": {
            // transform: "scale(4/)",
            transform:"translateX(-50%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0%) scale(1)",
            opacity: "1",
          },
        },
        blinking:{
          "0%": {
            opacity: "0",
          } ,
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        }
      },
    },
  },
  plugins: [],
};
