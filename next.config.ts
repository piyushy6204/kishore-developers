import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from public folder and unoptimized for placeholder pngs
    formats: ["image/avif", "image/webp"],
    // No external domains needed — all images are local
  },
  // Required for Tailwind v4 CSS variable color opacity modifiers
  transpilePackages: [],
};

export default nextConfig;
