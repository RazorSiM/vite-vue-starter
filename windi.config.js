import colors from "windicss/colors";
export default {
  attributify: {
    prefix: "w:",
  },
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        dark: {
          css: {
            color: colors.gray[100],
            a: {
              color: colors.gray[500],
              "&:hover": {
                color: colors.gray[300],
              },
            },
            strong: {
              color: colors.green[500],
            },
            h1: {
              color: colors.gray[100],
            },
            h2: {
              color: colors.gray[100],
            },
            h3: {
              color: colors.gray[100],
            },
            h4: {
              color: colors.gray[100],
            },
            h5: {
              color: colors.gray[100],
            },
            h6: {
              color: colors.gray[100],
            },
            code: {
              color: colors.purple[500],
            },
            figcaption: {
              color: colors.gray[500],
            },
          },
        },
      },
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
    require("windicss/plugin/typography"),
  ],
};
