/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
  // Configure for GitHub Pages deployment
  ...(process.env.NODE_ENV === "production" && {
    assetPrefix: "/AshokPrjapati.github.io/",
    basePath: "/AshokPrjapati.github.io",
  }),
};

module.exports = nextConfig;
