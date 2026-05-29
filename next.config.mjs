/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "true",
  },
};

export default nextConfig;
