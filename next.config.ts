import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this line
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "**" },
      { protocol: "https", hostname: "imgs.search.brave.com", pathname: "**" },
    ],
  },
};

export default nextConfig;
