import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_NODE_ENV === "production";
const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  assetPrefix: isProd ? "/jason-owlsome-tech/" : "",
  basePath: isProd ? "/jason-owlsome-tech" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
