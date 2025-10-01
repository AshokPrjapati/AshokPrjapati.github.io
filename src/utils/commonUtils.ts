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
  };
};
