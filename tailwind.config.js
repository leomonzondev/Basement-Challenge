/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        basement: ["basement", "Helvetica Neue"],
        basementR: ["Basement Regular", "Helvetica Neue"],
      },
      colors: {
        white: "#ffffff",
        gray: {
          100: "#1D1D1D",
          200: "#999999",
        },
        red: "red",
        black: "black",
        orange: "#ff4c00",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
