/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5538EE",

        "primary-light": "#6B4EFF",

        secondary: "#C6C4FF",

        "secondary-light": "#E7E7FF",

        "sky-light": "#E3E5E5",

        "sky-lightest": "#F7F9FA",

        ink: "#0E0F0F",

        "ink-light": "#292C2E",

        "ink-lightest": "#7A7E80",

        "ink-lighter": "#464A4D",

        "gray-primary": "#EAEDF1",

        "sky-base": "#CDCFD0",

        "sky-dark": "#B4B6B8",

        "brands-twitter": "#1DA1F2",

        "warning": "#D14331",

        "warning-light": "#D14331CC",

        "red-dark": "#F63B2F",

        "green-dark": "#00A86B",

        "yellow-dark": "#F6A500"
      },
      boxShadow: {
        "gray-primary":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};
