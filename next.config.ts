import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // obligatoire pour GitHub Pages
  basePath:  isProd ? "/out" : "/out",
  assetPrefix: isProd ? "/out/" : "/out/",
  images: {
    unoptimized: true,       // obligatoire pour GitHub Pages
  },
};

export default nextConfig;
