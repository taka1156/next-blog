/// <reference types="vitest" >
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import test from 'node:test';

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
        statements: 80,
        functions: 80,
        branches: 80,
        lines: 80
      }
    }
  },
  resolve: {
    alias: {
      '@/': __dirname + '/src/'
    }
  }
});
