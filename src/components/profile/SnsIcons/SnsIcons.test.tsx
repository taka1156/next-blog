import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SnsIcons } from './SnsIcons';
import { SNS_ICONS } from '@/constants';

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

vi.mock('next/image', () => ({
  default: vi.fn(
    ({
      src,
      alt,
      ...props
    }: {
      src: string;
      alt: string;
      [key: string]: unknown;
    }) => <img src={src} alt={alt} {...props} />
  )
}));

describe('SnsIcons', () => {
  it(`${SNS_ICONS.length} 件の li を描画する`, () => {
    const { container } = render(<SnsIcons snsIcons={SNS_ICONS} />);
    expect(container.querySelectorAll('li')).toHaveLength(SNS_ICONS.length);
  });

  it.each(SNS_ICONS)('$name の alt が設定される', ({ name }) => {
    render(<SnsIcons snsIcons={SNS_ICONS} />);
    expect(screen.getAllByAltText(name).length).toBeGreaterThan(0);
  });

  it.each(SNS_ICONS)('$name のリンク href が正しい', ({ name, link }) => {
    render(<SnsIcons snsIcons={SNS_ICONS} />);
    const img = screen.getAllByAltText(name)[0];
    expect(img.closest('a')).toHaveAttribute('href', link);
  });
});
