/// <reference types="vitest" >
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ['setupTest.ts'],
    environment: 'jsdom',
    reporters: ['default', 'html'],
    coverage: {
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
