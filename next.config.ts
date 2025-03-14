import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["skillicons.dev"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
