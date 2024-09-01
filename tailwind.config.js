/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
    fontSize: {
      "11px": "11px",
      "14px": "14px",
      "15px": "15px",
      "16px": "16px",
      "20px": "20px",
    },
    colors: {
      grey: "#514A4A",
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
    // height: {
    //   "982px": "982px",
    //   "413px": "413px",
    //   "248px": "248px",
    //   "197px": "197px",
    // },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    boxShadow: {
      "custom-shadow": "0px 4px 20px 5px rgba(0, 0, 0, 0.25)", // Equivalent to #00000040
      custom: "0px 11px 15px 0px #00000040",
    },
    backgroundImage: {
      "gradient-custom": "linear-gradient(to right, #f3a847, #f6d365)", // Custom gradient
    },
    bgexample: {
      "background-image": url("../images/kk.png"),
    },
  },
  plugins: [],
};
