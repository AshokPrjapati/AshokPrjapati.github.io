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
    // CSS Custom Properties using the constants
    "--primary":
      colorMode === "dark" ? COLORS.dark.primary : COLORS.light.primary,
    "--secondary":
      colorMode === "dark" ? COLORS.dark.secondary : COLORS.light.secondary,
    "--bg-primary":
      colorMode === "dark" ? COLORS.dark.bgPrimary : COLORS.light.bgPrimary,
    "--bg-surface":
      colorMode === "dark" ? COLORS.dark.bgSurface : COLORS.light.bgSurface,
    "--bg-card":
      colorMode === "dark" ? COLORS.dark.bgCard : COLORS.light.bgCard,
    "--text-primary":
      colorMode === "dark" ? COLORS.dark.textPrimary : COLORS.light.textPrimary,
    "--text-secondary":
      colorMode === "dark"
        ? COLORS.dark.textSecondary
        : COLORS.light.textSecondary,
    "--text-muted":
      colorMode === "dark" ? COLORS.dark.textMuted : COLORS.light.textMuted,
    "--border-primary":
      colorMode === "dark"
        ? COLORS.dark.borderPrimary
        : COLORS.light.borderPrimary,
    "--border-secondary":
      colorMode === "dark"
        ? COLORS.dark.borderSecondary
        : COLORS.light.borderSecondary,
    "--accent": colorMode === "dark" ? COLORS.dark.accent : COLORS.light.accent,
    "--error": colorMode === "dark" ? COLORS.dark.error : COLORS.light.error,
    "--shadow-primary":
      colorMode === "dark"
        ? COLORS.dark.boxShadowPrimary
        : COLORS.light.boxShadowPrimary,
    "--shadow-secondary":
      colorMode === "dark"
        ? COLORS.dark.boxShadowSecondary
        : COLORS.light.boxShadowSecondary,
    // Generic UI elements
    "--button-bg":
      colorMode === "dark" ? COLORS.dark.buttonBg : COLORS.light.buttonBg,
    "--button-hover":
      colorMode === "dark" ? COLORS.dark.buttonHover : COLORS.light.buttonHover,
    "--card-bg":
      colorMode === "dark" ? COLORS.dark.cardBg : COLORS.light.cardBg,
    "--card-shadow":
      colorMode === "dark" ? COLORS.dark.cardShadow : COLORS.light.cardShadow,
    "--icon-bg":
      colorMode === "dark" ? COLORS.dark.iconBg : COLORS.light.iconBg,
    "--icon-shadow":
      colorMode === "dark" ? COLORS.dark.iconShadow : COLORS.light.iconShadow,
    // Gradients
    "--gradient":
      colorMode === "dark" ? COLORS.dark.gradient : COLORS.light.gradient,
    "--gradient-bg":
      colorMode === "dark" ? COLORS.dark.gradientBg : COLORS.light.gradientBg,
    "--hero-gradient-bg":
      colorMode === "dark"
        ? COLORS.dark.heroGradientBg
        : COLORS.light.heroGradientBg,
    "--hero-profile-shadow":
      colorMode === "dark"
        ? COLORS.dark.heroProfileShadow
        : COLORS.light.heroProfileShadow,
    "--hero-card-shadow":
      colorMode === "dark"
        ? COLORS.dark.heroCardShadow
        : COLORS.light.heroCardShadow,
    // About Section
    "--about-card-bg":
      colorMode === "dark" ? COLORS.dark.aboutCardBg : COLORS.light.aboutCardBg,
    "--about-card-shadow":
      colorMode === "dark"
        ? COLORS.dark.aboutCardShadow
        : COLORS.light.aboutCardShadow,
    "--about-card-hover-shadow":
      colorMode === "dark"
        ? COLORS.dark.aboutCardHoverShadow
        : COLORS.light.aboutCardHoverShadow,
    "--about-stat-bg":
      colorMode === "dark" ? COLORS.dark.aboutStatBg : COLORS.light.aboutStatBg,
    "--about-stat-shadow":
      colorMode === "dark"
        ? COLORS.dark.aboutStatShadow
        : COLORS.light.aboutStatShadow,
    "--about-stat-hover-shadow":
      colorMode === "dark"
        ? COLORS.dark.aboutStatHoverShadow
        : COLORS.light.aboutStatHoverShadow,
    "--about-gradient-bg":
      colorMode === "dark"
        ? COLORS.dark.aboutGradientBg
        : COLORS.light.aboutGradientBg,
  };
};
