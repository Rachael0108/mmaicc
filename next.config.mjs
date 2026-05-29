/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "true"
  }
};

export default nextConfig;
