/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...defaultTheme,
      fontFamily: {
        sans: ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        primary: {
          DEFAULT: "#3239fb",
          text: "#ffffff",
        },
        secondary: "#fd7780",
        accent: "#fd7780",
        text: {
          secondary: "#696969",
        },
      },
      backgroundImage: {
        noise: "url('https://arc.net/noise-light.png')",
        "gradient-primary":
          "linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)",
      },
    },
  },
  plugins: [],
};
