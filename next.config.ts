import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/web", // CRITICAL: This ensures CSS/JS load from softexedge.com/web/...
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
    ],
  },
};

export default nextConfig;
