import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ClassificationList } from './ClassificationList';
import { dummyClassificationCategory, dummyClassificationTag } from '@/dummy';

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

describe('ClassificationList', () => {
  describe('items が存在するとき', () => {
    it('category リストを描画する', () => {
      render(
        <ClassificationList
          items={dummyClassificationCategory.items}
          routePath='category'
        />
      );
      expect(screen.getAllByRole('article')).toHaveLength(
        dummyClassificationCategory.items.length
      );
    });

    it('リンクの href に routePath と name が含まれる', () => {
      render(
        <ClassificationList
          items={dummyClassificationCategory.items.slice(0, 1)}
          routePath='category'
        />
      );
      const link = screen.getAllByRole('link')[0];
      expect(link).toHaveAttribute(
        'href',
        `/category/${dummyClassificationCategory.items[0].name}/`
      );
    });

    it('tag リストを描画する', () => {
      render(
        <ClassificationList items={dummyClassificationTag.items} routePath='tag' />
      );
      expect(screen.getAllByRole('article')).toHaveLength(
        dummyClassificationTag.items.length
      );
    });
  });

  describe('items が空のとき', () => {
    it('"category がありません。" を表示する', () => {
      render(<ClassificationList items={[]} routePath='category' />);
      expect(screen.getByText('categoryがありません。')).toBeInTheDocument();
    });

    it('"tag がありません。" を表示する', () => {
      render(<ClassificationList items={[]} routePath='tag' />);
      expect(screen.getByText('tagがありません。')).toBeInTheDocument();
    });

    it('ul を描画しない', () => {
      render(<ClassificationList items={[]} routePath='category' />);
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
  });
});
