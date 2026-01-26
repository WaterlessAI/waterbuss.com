import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TypeScript hatalarını derleme sırasında yoksay
  typescript: {
    ignoreBuildErrors: true,
  },
  // ESLint hatalarını derleme sırasında yoksay
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;