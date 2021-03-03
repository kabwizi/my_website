module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        76: "300px",
      },
      colors: {
        Purple: {
          darkest: "#200E32",
        },
        SamsungS20Color: {
          samsungS20Orange: "#EEA474",
          samsungS20Red: "#F0756E",
          samsungS20Green: "#54F293",
          samsungS20Blue: "#8BA2E7",
          samsungS500Orange: "#FE6F4B",
        },
      },
      fontSize: {
        "4xs": ".40rem",
        "3xs": ".50rem",
        "2xs": ".63rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
