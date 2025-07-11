const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  experimental: {
    scrollRestoration: true
  },

  compiler: {
    reactRemoveProperties: isProd
      ? {
          properties: ['^data-testid$']
        }
      : false
  }
};

module.exports = withVanillaExtract(nextConfig);
