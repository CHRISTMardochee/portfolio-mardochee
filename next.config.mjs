/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-mardochee',
  assetPrefix: '/portfolio-mardochee/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
