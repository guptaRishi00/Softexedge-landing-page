import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/web",
  assetPrefix: "/web", // Add this line
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
    ],
  },
};

export default nextConfig;
