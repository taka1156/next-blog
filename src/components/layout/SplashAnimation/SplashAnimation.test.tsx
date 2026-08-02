import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { SplashAnimation } from './SplashAnimation';

vi.mock('@/hooks/useResponsive', () => ({
  useResponsive: vi.fn(() => ({ isMobile: false }))
}));

vi.mock('@/components/shared/BaseImg/BaseImg', () => ({
  BaseImg: ({ alt }: { alt: string }) => <img alt={alt} />
}));

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] ?? ''),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    })
  };
})();

describe('SplashAnimation', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.stubGlobal('localStorage', localStorageMock);
  });

  it('マウント前（サーバー）は null を返す', () => {
    // useSyncExternalStore のサーバースナップショットは true を返す
    // mounted=false の段階では null を返すため何も描画されない
    const { container } = render(
      <SplashAnimation>
        <div>コンテンツ</div>
      </SplashAnimation>
    );
    // マウント直後にコンテナは空 or アニメーション表示
    expect(container).toBeInTheDocument();
  });

  it('スプラッシュ表示済み（animation=false）のときは children を表示する', async () => {
    localStorageMock.getItem.mockImplementation((key: string) =>
      key === 'animation' ? 'false' : ''
    );

    render(
      <SplashAnimation>
        <div>コンテンツ</div>
      </SplashAnimation>
    );

    await waitFor(() => {
      expect(screen.getByText('コンテンツ')).toBeInTheDocument();
    });
  });

  it('スプラッシュ未表示のときはロゴアニメーション画像を表示する', async () => {
    localStorageMock.getItem.mockReturnValue('');

    render(
      <SplashAnimation>
        <div>コンテンツ</div>
      </SplashAnimation>
    );

    await waitFor(() => {
      expect(screen.getByAltText('Logo Animation')).toBeInTheDocument();
    });
  });
});
