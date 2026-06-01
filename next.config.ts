import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "https://github.com/itskabindrakarki/kabindra-portfolio.git", // repository name
  assetPrefix: "/kabindra-portfolio/",
};

export default nextConfig;
