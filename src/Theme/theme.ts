import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

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
    // Custom color palette that automatically switches
    brand: {
      primary: {
        _light: "#0077ff",
        _dark: "#00eaff",
      },
      secondary: {
        _light: "#00eaff",
        _dark: "#0077ff",
      },
      accent: {
        _light: "#64ffda",
        _dark: "#64ffda",
      },
      error: {
        _light: "#e11d48",
        _dark: "#e11d48",
      },
    },
    // Background colors
    bg: {
      primary: {
        _light: "#f5f7fa",
        _dark: "#0a192f",
      },
      surface: {
        _light: "#ffffff",
        _dark: "#112240",
      },
      card: {
        _light: "#f8fafc",
        _dark: "#1c2541",
      },
    },
    // Text colors
    text: {
      primary: {
        _light: "#1a202c",
        _dark: "#eaf6fb",
      },
      muted: {
        _light: "#8892b0",
        _dark: "#8892b0",
      },
    },
    // Border colors
    border: {
      primary: {
        _light: "#e2e8f0",
        _dark: "#23272f",
      },
    },
  },
  semanticTokens: {
    colors: {
      // Semantic tokens that automatically switch based on color mode
      primary: {
        default: "brand.primary._light",
        _dark: "brand.primary._dark",
      },
      secondary: {
        default: "brand.secondary._light",
        _dark: "brand.secondary._dark",
      },
      accent: {
        default: "brand.accent._light",
        _dark: "brand.accent._dark",
      },
      "bg-primary": {
        default: "bg.primary._light",
        _dark: "bg.primary._dark",
      },
      "bg-surface": {
        default: "bg.surface._light",
        _dark: "bg.surface._dark",
      },
      "bg-card": {
        default: "bg.card._light",
        _dark: "bg.card._dark",
      },
      "text-primary": {
        default: "text.primary._light",
        _dark: "text.primary._dark",
      },
      "text-muted": {
        default: "text.muted._light",
        _dark: "text.muted._dark",
      },
      "border-primary": {
        default: "border.primary._light",
        _dark: "border.primary._dark",
      },
      error: {
        default: "brand.error._light",
        _dark: "brand.error._dark",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "bg-primary",
        color: "text-primary",
      },
    },
  },
});

export default theme;
