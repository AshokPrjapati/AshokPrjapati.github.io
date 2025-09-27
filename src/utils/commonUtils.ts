export const getResumeDownloadLink = () => {
  const pdfUrl = "/assets/Ashok-Kumar-Resume.pdf";
  const downloadLink = document.createElement("a");
  downloadLink.href = pdfUrl;
  downloadLink.download = "fw21_0784-Ashok-kumar-Resume.pdf";
  return downloadLink;
};
