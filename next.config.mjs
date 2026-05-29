/** @type {import('next').NextConfig} */

// GitHub Pages 项目站点部署在子路径 /mmaicc 下，
// 资源与路由都需要带上该前缀。可通过环境变量覆盖（如部署到根路径时设为空）。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/mmaicc";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
