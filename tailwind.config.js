module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        halant: ["Halant", "serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
