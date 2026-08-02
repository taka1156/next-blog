import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavBarPc } from './NavBarPc';
import { dummyRoutes } from '@/dummy';

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

vi.mock('@/components/shared/BaseImg/BaseImg', () => ({
  BaseImg: ({ alt }: { alt: string }) => <img alt={alt} />
}));

vi.mock('@/components/shared/BaseText/BaseText', () => ({
  BaseText: ({ children }: { children: React.ReactNode }) => <p>{children}</p>
}));

describe('NavBarPc', () => {
  it('ロゴリンクを表示する', () => {
    render(<NavBarPc routes={dummyRoutes} />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('routes の数だけナビゲーションアイテムを描画する', () => {
    render(<NavBarPc routes={dummyRoutes} />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(dummyRoutes.length);
  });

  it('各ルートの名前を表示する', () => {
    render(<NavBarPc routes={dummyRoutes} />);
    for (const route of dummyRoutes) {
      expect(screen.getByText(route.name)).toBeInTheDocument();
    }
  });

  it('routes が空のとき ul の中身が空になる', () => {
    render(<NavBarPc routes={[]} />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
