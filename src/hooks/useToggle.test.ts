import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useOpen } from './useToggle';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/'),
  useSearchParams: vi.fn(() => new URLSearchParams())
}));

vi.mock('usehooks-ts', () => ({
  useToggle: vi.fn(() => [false, vi.fn(), vi.fn()])
}));

describe('useOpen', () => {
  it('初期状態では open が false', () => {
    const { result } = renderHook(() => useOpen());
    expect(result.current.open).toBe(false);
  });

  it('initState を true にすると初期状態が true になる', async () => {
    const { useToggle } = await import('usehooks-ts');
    vi.mocked(useToggle).mockReturnValue([true, vi.fn(), vi.fn()]);
    const { result } = renderHook(() => useOpen(true));
    expect(result.current.open).toBe(true);
  });

  it('toggleOpen を呼び出すと useToggle の toggle が呼ばれる', async () => {
    const toggleMock = vi.fn();
    const { useToggle } = await import('usehooks-ts');
    vi.mocked(useToggle).mockReturnValue([false, toggleMock, vi.fn()]);
    const { result } = renderHook(() => useOpen());
    act(() => {
      result.current.toggleOpen();
    });
    expect(toggleMock).toHaveBeenCalled();
  });

  it('URL が変化したとき open を false にリセットする', async () => {
    const { usePathname } = await import('next/navigation');
    const setOpenMock = vi.fn();
    const { useToggle } = await import('usehooks-ts');
    vi.mocked(useToggle).mockReturnValue([true, vi.fn(), setOpenMock]);
    vi.mocked(usePathname).mockReturnValue('/');

    const { rerender } = renderHook(() => useOpen());

    vi.mocked(usePathname).mockReturnValue('/new-page');
    rerender();

    expect(setOpenMock).toHaveBeenCalledWith(false);
  });
});
