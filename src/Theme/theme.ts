import { extendTheme } from "@chakra-ui/react";
import { COLORS, SEMANTIC_COLORS_TOKENS } from "../constants/colors";
import { getRootCssVariable } from "../utils/commonUtils";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  fonts: {
    heading:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
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
      secondary: {
        _light: COLORS.light.textSecondary,
        _dark: COLORS.dark.textSecondary,
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
      secondary: {
        _light: COLORS.light.borderSecondary,
        _dark: COLORS.dark.borderSecondary,
      },
    },
    shadow: {
      primary: {
        _light: COLORS.light.boxShadowPrimary,
        _dark: COLORS.dark.boxShadowPrimary,
      },
      secondary: {
        _light: COLORS.light.boxShadowSecondary,
        _dark: COLORS.dark.boxShadowSecondary,
      },
    },
  },
  semanticTokens: {
    colors: SEMANTIC_COLORS_TOKENS,
  },
  styles: {
    global: (props: any) => ({
      ":root": getRootCssVariable(props.colorMode),
      html: {
        scrollBehavior: "smooth",
        fontSize: "16px",
      },
      body: {
        bg: "bg-primary",
        color: "text-primary",
        lineHeight: "base",
        fontFeatureSettings: '"kern" 1, "liga" 1',
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      "::selection": {
        bg: "primary",
        color: "white",
      },
    }),
  },
});

export default theme;
