/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNav: "#0f0f0f",
        textNav: "#7456ff",
        textNavDark: "#1b1829",
        hoverContact: "#271d56",
        bodyColor: "#0c0c0d",
        childBody: "#131313",
        hoverPurple: "#8368ff",
      },
    },
  },
  plugins: [],
};
