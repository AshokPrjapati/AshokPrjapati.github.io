// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // config: {
  //     initialColorMode: 'dark',
  //     useSystemColorMode: false,
  // },
  colors: {
    text: {
      1: "#fff",
      2: "#a0a0a0",
      3: "#e11d48",
    },
    bg: {
      1: "#000000",
      2: "#0d1117",
      3: "#1e293b",
      4: "#0284c7",
    },
  },
});

// 3. extend the theme

export default theme;
