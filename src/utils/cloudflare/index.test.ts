import { describe, it, expect, vi, afterEach } from 'vitest';
import { getBaseUrl } from './index';

describe('getBaseUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('CF_PAGES_URL が設定されている場合はその値を返す', () => {
    vi.stubEnv('CF_PAGES_URL', 'https://cf-pages.example.com');
    vi.stubEnv('BASE_URL', 'https://base.example.com');
    expect(getBaseUrl()).toBe('https://cf-pages.example.com');
  });

  it('CF_PAGES_URL が空文字の場合は BASE_URL を返す', () => {
    vi.stubEnv('CF_PAGES_URL', '');
    vi.stubEnv('BASE_URL', 'https://base.example.com');
    expect(getBaseUrl()).toBe('https://base.example.com');
  });

  it('CF_PAGES_URL が未設定の場合は BASE_URL を返す', () => {
    vi.stubEnv('BASE_URL', 'https://base.example.com');
    expect(getBaseUrl()).toBe('https://base.example.com');
  });
});
