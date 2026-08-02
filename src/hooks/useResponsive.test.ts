import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useResponsive } from './useResponsive';

vi.mock('usehooks-ts', () => ({
  useMediaQuery: vi.fn()
}));

describe('useResponsive', () => {
  it('useMediaQuery が false を返すとき isMobile は false', async () => {
    const { useMediaQuery } = await import('usehooks-ts');
    vi.mocked(useMediaQuery).mockReturnValue(false);
    const { result } = renderHook(() => useResponsive());
    expect(result.current.isMobile).toBe(false);
  });

  it('useMediaQuery が true を返すとき isMobile は true', async () => {
    const { useMediaQuery } = await import('usehooks-ts');
    vi.mocked(useMediaQuery).mockReturnValue(true);
    const { result } = renderHook(() => useResponsive());
    expect(result.current.isMobile).toBe(true);
  });

  it('(max-width:800px) クエリを useMediaQuery に渡す', async () => {
    const { useMediaQuery } = await import('usehooks-ts');
    vi.mocked(useMediaQuery).mockReturnValue(false);
    renderHook(() => useResponsive());
    expect(useMediaQuery).toHaveBeenCalledWith(
      '(max-width:800px)',
      expect.objectContaining({ defaultValue: false, initializeWithValue: false })
    );
  });
});
