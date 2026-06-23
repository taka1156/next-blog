import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores(['**/next.config.js', '**/*.test.js', '**/*.stories.js']),
  {
    extends: fixupConfigRules(
      compat.extends(
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'prettier',
        'plugin:storybook/recommended'
      )
    ),
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
      'unused-imports': unusedImports
    },
    languageOptions: {
      parser: tsParser
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'unused-imports/no-unused-imports': 'error'
    }
  }
]);
