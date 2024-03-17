/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  experimental: {
    scrollRestoration: true
  }
};

module.exports = nextConfig;
