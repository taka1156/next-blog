import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: 'auto'
  }
});

const isProd = process.env.NODE_ENV === 'production';

const R2_URL = process.env.R2_URL || 'http://localhost:9000';
const BUCKET = process.env.R2_BUCKET || 'CMS';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  turbopack: {},
  async rewrites() {
    return [
      {
        source: '/api/cms/:path*',
        destination: `${R2_URL}/${BUCKET}/:path*`
      }
    ];
  },
  compiler: {
    reactRemoveProperties: isProd
      ? {
          properties: ['^data-testid$']
        }
      : false
  }
};

export default withVanillaExtract(nextConfig);
