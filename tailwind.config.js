module.exports = {
  content: ["./pages/*.{ts,tsx}", "./components/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
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
