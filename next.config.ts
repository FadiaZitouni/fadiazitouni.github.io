import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // obligatoire pour GitHub Pages
  basePath:  isProd ? "/fadiazitouni.github.io" : "/out",
  assetPrefix: isProd ? "/fadiazitouni.github.io/" : "/out/",
  images: {
    unoptimized: true,       // obligatoire pour GitHub Pages
  },
};

export default nextConfig;
