import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // obligatoire pour GitHub Pages
  basePath:  isProd ? "/out" : "",
  assetPrefix: isProd ? "/out/" : "",
  images: {
    unoptimized: true,       // obligatoire pour GitHub Pages
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/out",
  }
};

export default nextConfig;
