/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PRODUCTS: process.env.API_PRODUCTS,
  },
  images: {
    domains: ["localhost", "http2.mlstatic.com"],
  },
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  pageExtensions: ["jsx", "js"],
};

module.exports = nextConfig;
