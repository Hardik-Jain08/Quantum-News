import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Match all secure domains
      },
      {
        protocol: 'http',
        hostname: '**', // Match all non-secure domains (if needed)
      },
    ],
  },
};

export default nextConfig;
