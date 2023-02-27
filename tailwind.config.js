module.exports = {
  content: ["./pages/*.{ts,tsx}", "./components/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
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
        },
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
