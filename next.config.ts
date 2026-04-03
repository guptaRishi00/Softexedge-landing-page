import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this line
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net;
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data: https://images.unsplash.com https://upload.wikimedia.org https://imgs.search.brave.com https://www.facebook.com;
      font-src 'self' data:;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      frame-src https://www.googletagmanager.com;
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "**" },
      { protocol: "https", hostname: "imgs.search.brave.com", pathname: "**" },
    ],
  },
};

export default nextConfig;
