import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
    ],
    // deviceSizes / imageSizes chosen to match our icon slots (14, 16, 24, 48px).
    deviceSizes: [48, 64, 96, 128, 256, 384],
    imageSizes: [14, 16, 24, 32, 48, 64],
    // Silence console warnings for unoptimised local PNGs that 404 during dev
    dangerouslyAllowSVG: false,
    unoptimized: true,
  },
};

export default nextConfig;
