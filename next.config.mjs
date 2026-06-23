import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: 'auto'
  }
});

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
