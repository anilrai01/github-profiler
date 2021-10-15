const colors = require("tailwindcss/colors");

module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "roboto-mono-light": "RobotoMono-Light",
      "roboto-mono-medium": "RobotoMono-Medium",
      "roboto-mono-regular": "RobotoMono-Regular",
      "roboto-mono-semi-bold": "RobotoMono-SemiBold",
      "roboto-mono-bold": "RobotoMono-Bold",
      "rubik-light": "Rubik-Light",
      "rubik-medium": "Rubik-Medium",
      "rubik-regular": "Rubik-Regular",
      "rubik-semi-bold": "Rubik-SemiBold",
      "rubik-bold": "Rubik-Bold",
    },
    colors: {
      brand: {
        DEFAULT: "#3E5DFF",
      },
      gray: {
        DEFAULT: colors.trueGray,
        medium: "#9A9A9A",
        label: "#707070",
        500: "#4E4E4E",
        100: "#DDDDDD",
      },
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      blue: { DEFAULT: colors.sky, 200: "#F6F8FF" },
      yellow: colors.amber,
      white: colors.white,
    },
    zIndex: {
      "n-10": "-10",
      10: "10",
      20: "20",
    },
    extend: {
      spacing: {
        "vec-w": "35rem",
        "vec-h": "30rem",
        "git-l-w": "12rem",
        "git-l-h": "14rem",
        "git-c-w": "10rem",
        "git-c-h": "10rem",
        "profile-avatar": "12rem",
        "icon-dim": "1.15rem",
        "icon-dim-sm": "0.9rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // prefix: "git-prof-tw-",
};
