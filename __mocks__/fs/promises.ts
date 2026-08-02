import { vi } from 'vitest';

export const readFile = vi.fn();
export const writeFile = vi.fn();
export const mkdir = vi.fn();
export const rm = vi.fn();
export const access = vi.fn();
export const stat = vi.fn();
export const readdir = vi.fn();
export const unlink = vi.fn();
export const copyFile = vi.fn();
export const rename = vi.fn();

export default {
  readFile,
  writeFile,
  mkdir,
  rm,
  access,
  stat,
  readdir,
  unlink,
  copyFile,
  rename
};
