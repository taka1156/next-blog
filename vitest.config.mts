/// <reference types="vitest" >
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    include: ['**/*.test.{ts,tsx}'],
    globals: true,
    setupFiles: ['setupTest.ts'],
    environment: 'jsdom',
    reporters: ['default'],
    coverage: {
      reporter: ['json', 'html'],
      thresholds: {
        statements: 90,
        functions: 90,
        branches: 90,
        lines: 90
      }
    }
  },
  resolve: {
    alias: {
      '@/': __dirname + '/src/'
    }
  }
});
