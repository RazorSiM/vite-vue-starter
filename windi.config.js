export default {
  attributify: {
    prefix: "w:",
  },
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        halant: ["Halant", "serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("windicss/plugin/aspect-ratio"),
    require("windicss/plugin/forms"),
    require("windicss/plugin/filters"),
    require("windicss/plugin/line-clamp"),
  ],
};
