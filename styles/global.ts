import { globalCss } from "../stitches.config";

const GlobalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
  },

  "html, body": {
    padding: "0",
    margin: "0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  li: {
    listStyle: "none",
  },

  button: {
    cursor: "pointer",
  },
});

export default GlobalStyles;
