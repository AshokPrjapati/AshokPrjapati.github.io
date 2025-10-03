export const COLORS = {
  light: {
    primary: "#6366f1",
    secondary: "#ec4899",
    boxShadowPrimary: "0 10px 40px 0 rgba(99, 102, 241, 0.2)",
    boxShadowSecondary: "0 10px 40px 0 rgba(236, 72, 153, 0.2)",
    accent: "#06b6d4",
    error: "#dc2626",
    bgPrimary: "#ffffff",
    bgSurface: "#f8fafc",
    bgCard: "#ffffff",
    textPrimary: "#1e293b",
    textSecondary: "#475569",
    textMuted: "#64748b",
    borderPrimary: "#e2e8f0",
    borderSecondary: "#cbd5e1",
    // Generic UI elements
    buttonBg: "#ffffff",
    buttonHover: "#f8fafc",
    cardBg: "#ffffff",
    cardShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    iconBg: "#ffffff",
    iconShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    // Gradients
    gradient: "linear(to-r, #6366f1, #ec4899, #06b6d4)",
    gradientBg: "linear(135deg, #667eea 0%, #764ba2 100%)",
    heroGradientBg: "linear(135deg, #667eea 0%, #764ba2 100%)",
    heroProfileShadow: "0 20px 60px rgba(99, 102, 241, 0.3)",
    heroCardShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    // About Section
    aboutCardBg: "#ffffff",
    aboutCardShadow: "0 8px 32px rgba(99, 102, 241, 0.12)",
    aboutCardHoverShadow: "0 16px 48px rgba(99, 102, 241, 0.2)",
    aboutStatBg: "#f8fafc",
    aboutStatShadow: "0 4px 20px rgba(99, 102, 241, 0.08)",
    aboutStatHoverShadow: "0 8px 30px rgba(99, 102, 241, 0.15)",
    aboutGradientBg: "linear(135deg, #667eea 0%, #764ba2 100%)",
  },
  dark: {
    primary: "#818cf8",
    secondary: "#f472b6",
    boxShadowPrimary: "0 10px 40px 0 rgba(129, 140, 248, 0.3)",
    boxShadowSecondary: "0 10px 40px 0 rgba(244, 114, 182, 0.3)",
    accent: "#22d3ee",
    error: "#f87171",
    bgPrimary: "#0f1419",
    bgSurface: "#1a202c",
    bgCard: "#2d3748",
    textPrimary: "#ffffff",
    textSecondary: "#e2e8f0",
    textMuted: "#a0aec0",
    borderPrimary: "#4a5568",
    borderSecondary: "#2d3748",
    // Generic UI elements
    buttonBg: "#2d3748",
    buttonHover: "#4a5568",
    cardBg: "#2d3748",
    cardShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    iconBg: "#2d3748",
    iconShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    // Gradients
    gradient: "linear(to-r, #818cf8, #f472b6, #22d3ee)",
    gradientBg: "linear(135deg, #667eea 0%, #764ba2 100%)",
    heroGradientBg: "linear(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    heroProfileShadow: "0 20px 60px rgba(129, 140, 248, 0.4)",
    heroCardShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
    // About Section
    aboutCardBg: "#2d3748",
    aboutCardShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
    aboutCardHoverShadow: "0 16px 48px rgba(129, 140, 248, 0.3)",
    aboutStatBg: "#1a202c",
    aboutStatShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    aboutStatHoverShadow: "0 8px 30px rgba(129, 140, 248, 0.2)",
    aboutGradientBg: "linear(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
};

export const SEMANTIC_COLORS_TOKENS = {
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
  "text-secondary": {
    default: "text.secondary._light",
    _dark: "text.secondary._dark",
  },
  "text-muted": {
    default: "text.muted._light",
    _dark: "text.muted._dark",
  },
  "border-primary": {
    default: "border.primary._light",
    _dark: "border.primary._dark",
  },
  "border-secondary": {
    default: "border.secondary._light",
    _dark: "border.secondary._dark",
  },
  "shadow-primary": {
    default: "shadow.primary._light",
    _dark: "shadow.primary._dark",
  },
  "shadow-secondary": {
    default: "shadow.secondary._light",
    _dark: "shadow.secondary._dark",
  },
  error: {
    default: "brand.error._light",
    _dark: "brand.error._dark",
  },
  // Generic UI elements
  "button-bg": {
    default: "ui.buttonBg._light",
    _dark: "ui.buttonBg._dark",
  },
  "button-hover": {
    default: "ui.buttonHover._light",
    _dark: "ui.buttonHover._dark",
  },
  "card-bg": {
    default: "ui.cardBg._light",
    _dark: "ui.cardBg._dark",
  },
  "card-shadow": {
    default: "ui.cardShadow._light",
    _dark: "ui.cardShadow._dark",
  },
  "icon-bg": {
    default: "ui.iconBg._light",
    _dark: "ui.iconBg._dark",
  },
  "icon-shadow": {
    default: "ui.iconShadow._light",
    _dark: "ui.iconShadow._dark",
  },
  // Gradients
  gradient: {
    default: "brand.gradient._light",
    _dark: "brand.gradient._dark",
  },
  "gradient-bg": {
    default: "brand.gradientBg._light",
    _dark: "brand.gradientBg._dark",
  },
  "hero-gradient-bg": {
    default: "brand.heroGradientBg._light",
    _dark: "brand.heroGradientBg._dark",
  },
  "hero-profile-shadow": {
    default: "brand.heroProfileShadow._light",
    _dark: "brand.heroProfileShadow._dark",
  },
  "hero-card-shadow": {
    default: "brand.heroCardShadow._light",
    _dark: "brand.heroCardShadow._dark",
  },
  // About Section
  "about-card-bg": {
    default: "brand.aboutCardBg._light",
    _dark: "brand.aboutCardBg._dark",
  },
  "about-card-shadow": {
    default: "brand.aboutCardShadow._light",
    _dark: "brand.aboutCardShadow._dark",
  },
  "about-card-hover-shadow": {
    default: "brand.aboutCardHoverShadow._light",
    _dark: "brand.aboutCardHoverShadow._dark",
  },
  "about-stat-bg": {
    default: "brand.aboutStatBg._light",
    _dark: "brand.aboutStatBg._dark",
  },
  "about-stat-shadow": {
    default: "brand.aboutStatShadow._light",
    _dark: "brand.aboutStatShadow._dark",
  },
  "about-stat-hover-shadow": {
    default: "brand.aboutStatHoverShadow._light",
    _dark: "brand.aboutStatHoverShadow._dark",
  },
  "about-gradient-bg": {
    default: "brand.aboutGradientBg._light",
    _dark: "brand.aboutGradientBg._dark",
  },
};
