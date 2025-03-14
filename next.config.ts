import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // You can still keep other experimental features if needed
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;