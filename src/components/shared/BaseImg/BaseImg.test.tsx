import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { BaseImg } from './BaseImg';

vi.mock('next/image', () => ({
  default: vi.fn(
    ({
      src,
      alt,
      fill,
      ...props
    }: {
      src: string;
      alt: string;
      fill?: boolean;
      [key: string]: unknown;
    }) => (
      <img src={src} alt={alt} data-fill={fill ? 'true' : undefined} {...props} />
    )
  )
}));

describe('BaseImg', () => {
  describe('fill / height / width なし（通常 img）', () => {
    it('<img> タグを描画する', () => {
      const { container } = render(<BaseImg src='/img/test.png' alt='テスト' />);
      expect(container.querySelector('img')).toBeInTheDocument();
    });

    it('src と alt が正しく設定される', () => {
      const { container } = render(<BaseImg src='/img/test.png' alt='テスト画像' />);
      const img = container.querySelector('img');
      expect(img).toHaveAttribute('src', '/img/test.png');
      expect(img).toHaveAttribute('alt', 'テスト画像');
    });
  });

  describe('fill prop あり（Next.js Image）', () => {
    it('Next.js Image コンポーネントを描画する', () => {
      const { container } = render(
        <BaseImg src='/img/test.png' alt='テスト' fill />
      );
      expect(container.querySelector('[data-fill="true"]')).toBeInTheDocument();
    });
  });

  describe('width / height prop あり（Next.js Image）', () => {
    it('width と height を渡すと Next.js Image になる', () => {
      const { container } = render(
        <BaseImg src='/img/test.png' alt='テスト' width={100} height={100} />
      );
      const img = container.querySelector('img');
      expect(img).toHaveAttribute('width', '100');
    });
  });

  it('className が適用される', () => {
    const { container } = render(
      <BaseImg src='/img/test.png' alt='テスト' className='custom-img' />
    );
    expect(container.querySelector('img')).toHaveClass('custom-img');
  });
});
