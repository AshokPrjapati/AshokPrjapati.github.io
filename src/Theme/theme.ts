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
      success: {
        _light: COLORS.light.success,
        _dark: COLORS.dark.success,
      },
      warning: {
        _light: COLORS.light.warning,
        _dark: COLORS.dark.warning,
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
      cardElevated: {
        _light: COLORS.light.cardElevated,
        _dark: COLORS.dark.cardElevated,
      },
      overlay: {
        _light: COLORS.light.bgOverlay,
        _dark: COLORS.dark.bgOverlay,
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
      inverse: {
        _light: COLORS.light.textInverse,
        _dark: COLORS.dark.textInverse,
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
      accent: {
        _light: COLORS.light.borderAccent,
        _dark: COLORS.dark.borderAccent,
      },
    },
    interactive: {
      buttonBg: {
        _light: COLORS.light.buttonBg,
        _dark: COLORS.dark.buttonBg,
      },
      buttonHover: {
        _light: COLORS.light.buttonHover,
        _dark: COLORS.dark.buttonHover,
      },
      buttonActive: {
        _light: COLORS.light.buttonActive,
        _dark: COLORS.dark.buttonActive,
      },
    },
    card: {
      bg: {
        _light: COLORS.light.cardBg,
        _dark: COLORS.dark.cardBg,
      },
      hover: {
        _light: COLORS.light.cardHover,
        _dark: COLORS.dark.cardHover,
      },
    },
    icon: {
      bg: {
        _light: COLORS.light.iconBg,
        _dark: COLORS.dark.iconBg,
      },
      hover: {
        _light: COLORS.light.iconHover,
        _dark: COLORS.dark.iconHover,
      },
    },
    shadow: {
      sm: {
        _light: COLORS.light.shadowSm,
        _dark: COLORS.dark.shadowSm,
      },
      md: {
        _light: COLORS.light.shadowMd,
        _dark: COLORS.dark.shadowMd,
      },
      lg: {
        _light: COLORS.light.shadowLg,
        _dark: COLORS.dark.shadowLg,
      },
      xl: {
        _light: COLORS.light.shadowXl,
        _dark: COLORS.dark.shadowXl,
      },
      primary: {
        _light: COLORS.light.shadowPrimary,
        _dark: COLORS.dark.shadowPrimary,
      },
      secondary: {
        _light: COLORS.light.shadowSecondary,
        _dark: COLORS.dark.shadowSecondary,
      },
      accent: {
        _light: COLORS.light.shadowAccent,
        _dark: COLORS.dark.shadowAccent,
      },
    },
    gradient: {
      primary: {
        _light: COLORS.light.gradientPrimary,
        _dark: COLORS.dark.gradientPrimary,
      },
      background: {
        _light: COLORS.light.gradientBackground,
        _dark: COLORS.dark.gradientBackground,
      },
      card: {
        _light: COLORS.light.gradientCard,
        _dark: COLORS.dark.gradientCard,
      },
      overlay: {
        _light: COLORS.light.gradientOverlay,
        _dark: COLORS.dark.gradientOverlay,
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
