import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: 'auto'
  }
});

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  turbopack: {},
  compiler: {
    reactRemoveProperties: isProd
      ? {
          properties: ['^data-testid$']
        }
      : false
  }
};

export default withVanillaExtract(nextConfig);
