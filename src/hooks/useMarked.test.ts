import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor, act } from '@testing-library/react';
import { useMarked } from './useMarked';

vi.mock('@/utils/marked', () => ({
  markedWrap: vi.fn().mockResolvedValue({
    tocs: [{ index: 1, anchor: 'anchor_1', escapedText: '見出し' }],
    htmlText: '<h2 id="anchor_1">見出し</h2>'
  })
}));

describe('useMarked', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('初期状態では parseCompleted が false', async () => {
    const { result } = renderHook(() => useMarked('# test'));
    expect(result.current.parseCompleted).toBe(false);
    await act(async () => {});
  });

  it('マークダウンを解析すると parseCompleted が true になる', async () => {
    const { result } = renderHook(() => useMarked('## 見出し'));
    await waitFor(() => {
      expect(result.current.parseCompleted).toBe(true);
    });
  });

  it('解析後に articleBodyText が設定される', async () => {
    const { result } = renderHook(() => useMarked('## 見出し'));
    await waitFor(() => {
      expect(result.current.articleBodyText).toBe('<h2 id="anchor_1">見出し</h2>');
    });
  });

  it('解析後に articleBodyTocs が設定される', async () => {
    const { result } = renderHook(() => useMarked('## 見出し'));
    await waitFor(() => {
      expect(result.current.articleBodyTocs).toHaveLength(1);
      expect(result.current.articleBodyTocs[0].escapedText).toBe('見出し');
    });
  });

  it('anchorPrefix が markedWrap に渡される', async () => {
    const { markedWrap } = await import('@/utils/marked');
    renderHook(() => useMarked('## 見出し', 'prefix_'));
    await waitFor(() => {
      expect(markedWrap).toHaveBeenCalledWith('## 見出し', 'prefix_');
    });
  });

  it('markdownText が変わると再解析する', async () => {
    const { markedWrap } = await import('@/utils/marked');
    const { rerender } = renderHook(({ md }: { md: string }) => useMarked(md), {
      initialProps: { md: '## 最初' }
    });
    rerender({ md: '## 変更後' });
    await waitFor(() => {
      expect(markedWrap).toHaveBeenCalledWith('## 変更後', undefined);
    });
  });
});
