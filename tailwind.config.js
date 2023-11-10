/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/enComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/subComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ziani: "url('/zianibg.jpg') ",
      },
      fontFamily: {
        roboto: ["'Roboto Condensed', sans-serif"],
        sora: ["'Sora Variable', sans-serif"],
      },
      colors: {
        primary: "#F7B941",
        light: "#f5f5f5",
        dark: "#1b1b1b",
        blue: "#033D5F",
      },
      screens: {
        sm: "30em",
        md: "48em",
        lg: "64em",
        xl: "80em",
      },
      appearance: ["responsive"],

      // Customize the appearance property to none
      appearance: {
        none: ["webkit-appearance"],
      },
    },
  },
  plugins: [],
};
