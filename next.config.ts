import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
