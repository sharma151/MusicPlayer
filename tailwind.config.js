/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontSize: {
        "11px": "11px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "20px": "20px",
      },
      colors: {
        grey: "#514A4A",
        orange: "#E09E3D",
      },
      width: {
        "199px": "199px",
        "210px": "210px",
        "219px": "219px",
        "262px": "262px",
        "327px": "327px",
        "396px": "396px",
        "467px": "467px",
        "854px": "854px",
        "1512px": "1512px",
      },
      height: {
        "982px": "982px",
        "413px": "413px",
        287: "287",
        "248px": "248px",
        "197px": "197px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      boxShadow: {
        "custom-shadow": "0px 4px 20px 5px rgba(0, 0, 0, 0.25)", // Equivalent to #00000040
        custom: "0px 11px 15px 0px #00000040",

        "custom-orange": "0px 2px 20px 0px #E09E3D",
        "friends-logo": "0px 4px 15px 2px #00000040",
        "box-shadow": "0px 4px 20px 5px #00000040",
        "darkmode-box-shadow": "0px 4px 20px 5px #333131",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, #f3a847, #f6d365)", // Custom gradient
        "custom-gradient-junoon":
          "linear-gradient(210.57deg, #F62545 1.42%, #590819 96.55%)",
        "button-background":
          "linear-gradient(180deg, #F8921A 0%, #F62545 100%)",
        "hover-background":
          " linear-gradient(180deg, #F8921A 0%, #F62545 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
