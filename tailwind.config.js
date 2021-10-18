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
        outline: "#C1BABA",
        500: "#4E4E4E",
        100: "#DDDDDD",
      },
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      blue: {
        DEFAULT: colors.sky,
        200: "#F6F8FF",
        medium: "#7288FF",
      },
      yellow: colors.amber,
      white: colors.white,
    },
    zIndex: {
      "n-10": "-10",
      10: "10",
      20: "20",
    },
    boxShadow: {
      repoBox: "0 2px 6px 0 rgba(0, 0, 0, 0.15)",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "repo-card-dim": "11rem",
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
        "profile-avatar-sm": "10rem",
        "icon-dim": "1.15rem",
        "icon-dim-sm": "0.9rem",
        "7-per": "7%",
        "repo-card-dim": "11rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // prefix: "git-prof-tw-",
};
