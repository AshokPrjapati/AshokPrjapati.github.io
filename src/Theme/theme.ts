import { extendTheme } from "@chakra-ui/react";
import { COLORS, SEMANTIC_COLORS_TOKENS } from "../constants/colors";
import { getRootCssVariable } from "../utils/commonUtils";

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
    brand: {
      primary: {
        _light: COLORS.light.primary,
        _dark: COLORS.dark.primary,
      },
      secondary: {
        _light: COLORS.light.secondary,
        _dark: COLORS.dark.secondary,
      },
      accent: {
        _light: COLORS.light.accent,
        _dark: COLORS.dark.accent,
      },
      error: {
        _light: COLORS.light.error,
        _dark: COLORS.dark.error,
      },
    },
    bg: {
      primary: {
        _light: COLORS.light.bgPrimary,
        _dark: COLORS.dark.bgPrimary,
      },
      surface: {
        _light: COLORS.light.bgSurface,
        _dark: COLORS.dark.bgSurface,
      },
      card: {
        _light: COLORS.light.bgCard,
        _dark: COLORS.dark.bgCard,
      },
    },
    text: {
      primary: {
        _light: COLORS.light.textPrimary,
        _dark: COLORS.dark.textPrimary,
      },
      muted: {
        _light: COLORS.light.textMuted,
        _dark: COLORS.dark.textMuted,
      },
    },
    border: {
      primary: {
        _light: COLORS.light.borderPrimary,
        _dark: COLORS.dark.borderPrimary,
      },
    },
  },
  semanticTokens: {
    colors: SEMANTIC_COLORS_TOKENS,
  },
  styles: {
    global: (props: any) => ({
      ":root": getRootCssVariable(props.colorMode),
      body: {
        bg: "bg-primary",
        color: "text-primary",
      },
    }),
  },
});

export default theme;
