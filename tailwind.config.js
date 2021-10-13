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
        medium: "#9A9A9A",
      },
    },
    zIndex: {
      "n-10": "-10",
    },
    extend: {
      spacing: {
        "vec-w": "35rem",
        "vec-h": "30rem",
        "git-l-w": "12rem",
        "git-l-h": "14rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // prefix: "git-prof-tw-",
};
