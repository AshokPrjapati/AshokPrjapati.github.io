import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const colors = {
  light: {
    primary: "#0077ff",
    secondary: "#00eaff",
    background: "#f5f7fa",
    surface: "#ffffff",
    accent: "#64ffda",
    text: "#1a202c",
    muted: "#8892b0",
    error: "#e11d48",
    border: "#e2e8f0",
    card: "#f8fafc",
  },
  dark: {
    primary: "#00eaff",
    secondary: "#0077ff",
    background: "#0a192f",
    surface: "#112240",
    accent: "#64ffda",
    text: "#eaf6fb",
    muted: "#8892b0",
    error: "#e11d48",
    border: "#23272f",
    card: "#1c2541",
  },
};

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
    ...colors.dark,
    modes: {
      light: colors.light,
      dark: colors.dark,
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg:
          props.colorMode === "light"
            ? colors.light.background
            : colors.dark.background,
        color:
          props.colorMode === "light" ? colors.light.text : colors.dark.text,
        transition: "background 0.2s, color 0.2s",
      },
    }),
  },
});

export default theme;
