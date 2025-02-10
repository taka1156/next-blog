import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../public'],
  webpackFinal(config, options) {
    config.resolve!.alias = {
      ...config.resolve?.alias,
      '@': path.resolve(__dirname, './src')
    };

    return config;
  }
};
export default config;
