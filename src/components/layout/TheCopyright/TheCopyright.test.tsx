import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TheCopyright } from './TheCopyright';
import { dummyCopyrightUrl } from '@/dummy';

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

vi.mock('@/components/shared/BaseText/BaseText', () => ({
  BaseText: ({ children }: { children: React.ReactNode }) => <p>{children}</p>
}));

vi.mock('@/utils/dayjs', () => ({
  dayjs: Object.assign(() => ({ tz: () => ({ year: () => 2024 }) }), {
    extend: () => {}
  })
}));

describe('TheCopyright', () => {
  it('著作権テキストに taka1156 を含む', () => {
    render(<TheCopyright copyrightUrl={dummyCopyrightUrl} />);
    expect(screen.getByText(/taka1156/)).toBeInTheDocument();
  });

  it('「2019 -」で始まる著作権年表示を含む', () => {
    render(<TheCopyright copyrightUrl={dummyCopyrightUrl} />);
    expect(screen.getByText(/2019/)).toBeInTheDocument();
  });

  it('dayjs から取得した年を表示する', () => {
    render(<TheCopyright copyrightUrl={dummyCopyrightUrl} />);
    expect(screen.getByText(/2024/)).toBeInTheDocument();
  });

  it('コチラリンクを表示する', () => {
    render(<TheCopyright copyrightUrl={dummyCopyrightUrl} />);
    expect(screen.getByText('コチラ')).toBeInTheDocument();
  });
});
