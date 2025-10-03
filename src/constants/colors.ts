export const COLORS = {
  light: {
    // Brand Colors
    primary: "#6366f1",
    secondary: "#ec4899",
    accent: "#06b6d4",
    error: "#dc2626",
    success: "#10b981",
    warning: "#f59e0b",

    // Background Colors
    bgPrimary: "#ffffff",
    bgSurface: "#f8fafc",
    bgCard: "#ffffff",
    bgOverlay: "rgba(255, 255, 255, 0.9)",

    // Text Colors
    textPrimary: "#1e293b",
    textSecondary: "#475569",
    textMuted: "#64748b",
    textInverse: "#ffffff",

    // Border Colors
    borderPrimary: "#e2e8f0",
    borderSecondary: "#cbd5e1",
    borderAccent: "rgba(99, 102, 241, 0.2)",

    // Interactive Elements
    buttonBg: "#ffffff",
    buttonHover: "#f8fafc",
    buttonActive: "#e2e8f0",

    // Card Elements
    cardBg: "#ffffff",
    cardElevated: "#ffffff",
    cardHover: "#f8fafc",

    // Icon Elements
    iconBg: "#ffffff",
    iconHover: "#f8fafc",

    // Shadow System
    shadowSm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    shadowMd: "0 4px 15px rgba(0, 0, 0, 0.1)",
    shadowLg: "0 8px 32px rgba(99, 102, 241, 0.12)",
    shadowXl: "0 16px 48px rgba(99, 102, 241, 0.2)",
    shadowPrimary: "0 10px 40px rgba(99, 102, 241, 0.2)",
    shadowSecondary: "0 10px 40px rgba(236, 72, 153, 0.2)",
    shadowAccent: "0 20px 60px rgba(99, 102, 241, 0.3)",

    // Gradient System
    gradientPrimary: "linear(to-r, #6366f1, #ec4899, #06b6d4)",
    gradientBackground: "linear(135deg, #667eea 0%, #764ba2 100%)",
    gradientCard: "linear(135deg, #ffffff 0%, #f8fafc 100%)",
    gradientOverlay:
      "linear(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
  },
  dark: {
    // Brand Colors
    primary: "#818cf8",
    secondary: "#f472b6",
    accent: "#22d3ee",
    error: "#f87171",
    success: "#34d399",
    warning: "#fbbf24",

    // Background Colors
    bgPrimary: "#0f1419",
    bgSurface: "#1a202c",
    bgCard: "#2d3748",
    bgOverlay: "rgba(45, 55, 72, 0.9)",

    // Text Colors
    textPrimary: "#ffffff",
    textSecondary: "#e2e8f0",
    textMuted: "#a0aec0",
    textInverse: "#1e293b",

    // Border Colors
    borderPrimary: "#4a5568",
    borderSecondary: "#2d3748",
    borderAccent: "rgba(129, 140, 248, 0.3)",

    // Interactive Elements
    buttonBg: "#2d3748",
    buttonHover: "#4a5568",
    buttonActive: "#718096",

    // Card Elements
    cardBg: "#2d3748",
    cardElevated: "#4a5568",
    cardHover: "#4a5568",

    // Icon Elements
    iconBg: "#2d3748",
    iconHover: "#4a5568",

    // Shadow System
    shadowSm: "0 1px 3px rgba(0, 0, 0, 0.3)",
    shadowMd: "0 4px 15px rgba(0, 0, 0, 0.3)",
    shadowLg: "0 8px 32px rgba(0, 0, 0, 0.4)",
    shadowXl: "0 16px 48px rgba(129, 140, 248, 0.3)",
    shadowPrimary: "0 10px 40px rgba(129, 140, 248, 0.3)",
    shadowSecondary: "0 10px 40px rgba(244, 114, 182, 0.3)",
    shadowAccent: "0 20px 60px rgba(129, 140, 248, 0.4)",

    // Gradient System
    gradientPrimary: "linear(to-r, #818cf8, #f472b6, #22d3ee)",
    gradientBackground: "linear(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    gradientCard: "linear(135deg, #2d3748 0%, #4a5568 100%)",
    gradientOverlay:
      "linear(135deg, rgba(129, 140, 248, 0.1) 0%, rgba(244, 114, 182, 0.1) 100%)",
  },
};

export const SEMANTIC_COLORS_TOKENS = {
  // Brand Colors
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
  error: {
    default: "brand.error._light",
    _dark: "brand.error._dark",
  },
  success: {
    default: "brand.success._light",
    _dark: "brand.success._dark",
  },
  warning: {
    default: "brand.warning._light",
    _dark: "brand.warning._dark",
  },

  // Background Colors
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
  "bg-elevated": {
    default: "bg.cardElevated._light",
    _dark: "bg.cardElevated._dark",
  },
  "bg-overlay": {
    default: "bg.overlay._light",
    _dark: "bg.overlay._dark",
  },

  // Text Colors
  "text-primary": {
    default: "text.primary._light",
    _dark: "text.primary._dark",
  },
  "text-secondary": {
    default: "text.secondary._light",
    _dark: "text.secondary._dark",
  },
  "text-muted": {
    default: "text.muted._light",
    _dark: "text.muted._dark",
  },
  "text-inverse": {
    default: "text.inverse._light",
    _dark: "text.inverse._dark",
  },

  // Border Colors
  "border-primary": {
    default: "border.primary._light",
    _dark: "border.primary._dark",
  },
  "border-secondary": {
    default: "border.secondary._light",
    _dark: "border.secondary._dark",
  },
  "border-accent": {
    default: "border.accent._light",
    _dark: "border.accent._dark",
  },

  // Interactive Elements
  "button-bg": {
    default: "interactive.buttonBg._light",
    _dark: "interactive.buttonBg._dark",
  },
  "button-hover": {
    default: "interactive.buttonHover._light",
    _dark: "interactive.buttonHover._dark",
  },
  "button-active": {
    default: "interactive.buttonActive._light",
    _dark: "interactive.buttonActive._dark",
  },

  // Card Elements
  "card-bg": {
    default: "card.bg._light",
    _dark: "card.bg._dark",
  },
  "card-hover": {
    default: "card.hover._light",
    _dark: "card.hover._dark",
  },

  // Icon Elements
  "icon-bg": {
    default: "icon.bg._light",
    _dark: "icon.bg._dark",
  },
  "icon-hover": {
    default: "icon.hover._light",
    _dark: "icon.hover._dark",
  },

  // Shadow System
  "shadow-sm": {
    default: "shadow.sm._light",
    _dark: "shadow.sm._dark",
  },
  "shadow-md": {
    default: "shadow.md._light",
    _dark: "shadow.md._dark",
  },
  "shadow-lg": {
    default: "shadow.lg._light",
    _dark: "shadow.lg._dark",
  },
  "shadow-xl": {
    default: "shadow.xl._light",
    _dark: "shadow.xl._dark",
  },
  "shadow-primary": {
    default: "shadow.primary._light",
    _dark: "shadow.primary._dark",
  },
  "shadow-secondary": {
    default: "shadow.secondary._light",
    _dark: "shadow.secondary._dark",
  },
  "shadow-accent": {
    default: "shadow.accent._light",
    _dark: "shadow.accent._dark",
  },

  // Gradient System
  "gradient-primary": {
    default: "gradient.primary._light",
    _dark: "gradient.primary._dark",
  },
  "gradient-bg": {
    default: "gradient.background._light",
    _dark: "gradient.background._dark",
  },
  "gradient-card": {
    default: "gradient.card._light",
    _dark: "gradient.card._dark",
  },
  "gradient-overlay": {
    default: "gradient.overlay._light",
    _dark: "gradient.overlay._dark",
  },
};
