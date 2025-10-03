import { COLORS } from "../constants/colors";

export const getResumeDownloadLink = () => {
  const pdfUrl = "/assets/Ashok-Kumar-Resume.pdf";
  const downloadLink = document.createElement("a");
  downloadLink.href = pdfUrl;
  downloadLink.download = "Ashok-kumar-Resume.pdf";
  return downloadLink;
};

export const getRootCssVariable = (colorMode?: string) => {
  return {
    // Brand Colors
    "--primary":
      colorMode === "dark" ? COLORS.dark.primary : COLORS.light.primary,
    "--secondary":
      colorMode === "dark" ? COLORS.dark.secondary : COLORS.light.secondary,
    "--accent": colorMode === "dark" ? COLORS.dark.accent : COLORS.light.accent,
    "--error": colorMode === "dark" ? COLORS.dark.error : COLORS.light.error,
    "--success":
      colorMode === "dark" ? COLORS.dark.success : COLORS.light.success,
    "--warning":
      colorMode === "dark" ? COLORS.dark.warning : COLORS.light.warning,

    // Background Colors
    "--bg-primary":
      colorMode === "dark" ? COLORS.dark.bgPrimary : COLORS.light.bgPrimary,
    "--bg-surface":
      colorMode === "dark" ? COLORS.dark.bgSurface : COLORS.light.bgSurface,
    "--bg-card":
      colorMode === "dark" ? COLORS.dark.bgCard : COLORS.light.bgCard,
    "--bg-elevated":
      colorMode === "dark"
        ? COLORS.dark.cardElevated
        : COLORS.light.cardElevated,
    "--bg-overlay":
      colorMode === "dark" ? COLORS.dark.bgOverlay : COLORS.light.bgOverlay,

    // Text Colors
    "--text-primary":
      colorMode === "dark" ? COLORS.dark.textPrimary : COLORS.light.textPrimary,
    "--text-secondary":
      colorMode === "dark"
        ? COLORS.dark.textSecondary
        : COLORS.light.textSecondary,
    "--text-muted":
      colorMode === "dark" ? COLORS.dark.textMuted : COLORS.light.textMuted,
    "--text-inverse":
      colorMode === "dark" ? COLORS.dark.textInverse : COLORS.light.textInverse,

    // Border Colors
    "--border-primary":
      colorMode === "dark"
        ? COLORS.dark.borderPrimary
        : COLORS.light.borderPrimary,
    "--border-secondary":
      colorMode === "dark"
        ? COLORS.dark.borderSecondary
        : COLORS.light.borderSecondary,
    "--border-accent":
      colorMode === "dark"
        ? COLORS.dark.borderAccent
        : COLORS.light.borderAccent,

    // Interactive Elements
    "--button-bg":
      colorMode === "dark" ? COLORS.dark.buttonBg : COLORS.light.buttonBg,
    "--button-hover":
      colorMode === "dark" ? COLORS.dark.buttonHover : COLORS.light.buttonHover,
    "--button-active":
      colorMode === "dark"
        ? COLORS.dark.buttonActive
        : COLORS.light.buttonActive,

    // Card Elements
    "--card-bg":
      colorMode === "dark" ? COLORS.dark.cardBg : COLORS.light.cardBg,
    "--card-hover":
      colorMode === "dark" ? COLORS.dark.cardHover : COLORS.light.cardHover,

    // Icon Elements
    "--icon-bg":
      colorMode === "dark" ? COLORS.dark.iconBg : COLORS.light.iconBg,
    "--icon-hover":
      colorMode === "dark" ? COLORS.dark.iconHover : COLORS.light.iconHover,

    // Shadow System
    "--shadow-sm":
      colorMode === "dark" ? COLORS.dark.shadowSm : COLORS.light.shadowSm,
    "--shadow-md":
      colorMode === "dark" ? COLORS.dark.shadowMd : COLORS.light.shadowMd,
    "--shadow-lg":
      colorMode === "dark" ? COLORS.dark.shadowLg : COLORS.light.shadowLg,
    "--shadow-xl":
      colorMode === "dark" ? COLORS.dark.shadowXl : COLORS.light.shadowXl,
    "--shadow-primary":
      colorMode === "dark"
        ? COLORS.dark.shadowPrimary
        : COLORS.light.shadowPrimary,
    "--shadow-secondary":
      colorMode === "dark"
        ? COLORS.dark.shadowSecondary
        : COLORS.light.shadowSecondary,
    "--shadow-accent":
      colorMode === "dark"
        ? COLORS.dark.shadowAccent
        : COLORS.light.shadowAccent,

    // Gradient System
    "--gradient-primary":
      colorMode === "dark"
        ? COLORS.dark.gradientPrimary
        : COLORS.light.gradientPrimary,
    "--gradient-bg":
      colorMode === "dark"
        ? COLORS.dark.gradientBackground
        : COLORS.light.gradientBackground,
    "--gradient-card":
      colorMode === "dark"
        ? COLORS.dark.gradientCard
        : COLORS.light.gradientCard,
    "--gradient-overlay":
      colorMode === "dark"
        ? COLORS.dark.gradientOverlay
        : COLORS.light.gradientOverlay,
  };
};
