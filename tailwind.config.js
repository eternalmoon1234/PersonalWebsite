module.exports = {
  content: [
    "./pages/*.{ts,tsx}",
    "./components/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        beatrice: ["beatrice"],
        beatriceLight: ["beatrice-light"],
        beatriceMedium: ["beatrice-medium"],
        beatriceSemibold: ["beatrice-semibold"],
        beatriceBold: ["beatrice-bold"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          extraLight: "var(--color-primary-extra-light)",
        },
        foyerPurple: "var(--color-foyerPurple)",
        tripleyBlue: "var(--color-tripleyBlue)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1810px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
