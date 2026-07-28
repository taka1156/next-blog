// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/nextjs-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-coverage',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.base = './';
    config.plugins = [...(config.plugins || []), vanillaExtractPlugin()];

    config.resolve!.alias = {
      ...config.resolve?.alias,
      '@': path.resolve(__dirname, '../src')
    };

    config.server = {
      ...config.server,
      allowedHosts: ['localhost']
    };

    return config;
  }
};
export default config;
