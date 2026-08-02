import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    '.cz-config.js',
    'src/hooks/usePagination.ts',
    'src/utils/testtool/index.ts'
  ],
  ignoreDependencies: [
    '@eslint/compat',
    '@eslint/eslintrc',
    '@eslint/js',
    '@storybook/cli',
    '@storybook/manager-api',
    '@storybook/react',
    '@storybook/theming',
    'commitizen',
    'eslint-plugin-import',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'inquirer',
    'next-router-mock',
    'typescript-eslint',
    'yarn-audit-fix'
  ]
};

export default config;
