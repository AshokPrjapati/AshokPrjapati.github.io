import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "Montserrat, Inter, Roboto Mono, sans-serif",
    body: "Inter, Roboto Mono, sans-serif",
    mono: "Roboto Mono, monospace",
  },
  colors: {
    primary: {
      light: "#0077ff",
      dark: "#00eaff",
    },
    secondary: {
      light: "#00eaff",
      dark: "#0077ff",
    },
    background: {
      light: "#f5f7fa",
      dark: "#0a192f",
    },
    surface: {
      light: "#ffffff",
      dark: "#112240",
    },
    accent: {
      light: "#64ffda",
      dark: "#64ffda",
    },
    text: {
      light: "#1a202c",
      dark: "#eaf6fb",
    },
    muted: {
      light: "#8892b0",
      dark: "#8892b0",
    },
    error: {
      light: "#e11d48",
      dark: "#e11d48",
    },
    border: {
      light: "#e2e8f0",
      dark: "#23272f",
    },
    card: {
      light: "#f8fafc",
      dark: "#1c2541",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#f5f7fa", "#0a192f")(props),
        color: mode("#1a202c", "#eaf6fb")(props),
        transition: "background 0.2s, color 0.2s",
      },
    }),
  },
});

export default theme;
