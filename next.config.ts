import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
