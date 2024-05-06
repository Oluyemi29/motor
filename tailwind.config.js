/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors :{
        "deepedBlue" : "#072A87",
        "deepedBlue2" : "#041647",
        "lightedBlue" : "#4C7BF6",
        "lightedBlue2" : "#1877F2",
        "customedWhite" : "#FFFFFF",
        "lightedAsh" : "#FAF1F1",
        "customedTransparent" : "#000000",
        "fadededAsh" : "#D3CDCD",
        "fadedTransparent" : "#FBFCFF"
      }
    },
  },
  plugins: [],
};
