import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { useRouter } from 'next-router-mock';
import { setup } from '@/utils/testtool/';
import { ArticleBadge } from './ArticleBadge';
import { dummyCategoryBadge, dummyTagBadge } from '@/dummy';

describe('ArticleBadge', () => {
  vi.mock(
    'next/link',
    async (importOriginal: () => Promise<{ default: unknown }>) => {
      const original = await importOriginal();
      return {
        __esModule: true,
        ...original,
        default: original.default
      };
    }
  );

  vi.mock('next/router', () => ({
    useRouter: () => useRouter()
  }));

  it('ArticleBadge初期値(Category): badge', () => {
    const { renderResult } = setup(
      <ArticleBadge
        routePath={dummyTagBadge.routePath}
        badge={dummyTagBadge.badge}
      />
    );

    const targetBadgeLink = screen.getByTestId<HTMLAnchorElement>('targetBadgeLink');
    const targetBadgeText = screen.getByTestId<HTMLAnchorElement>('targetBadgeText');

    expect(targetBadgeLink.pathname).toBe(
      `/${dummyTagBadge.routePath}/${dummyTagBadge.badge.id}`
    );
    expect(targetBadgeText.textContent).toMatchSnapshot(dummyTagBadge.badge.name);
    expect(renderResult).matchSnapshot();
  });

  it('ArticleBadge初期値(Tag): badge', () => {
    const { renderResult } = setup(
      <ArticleBadge
        routePath={dummyCategoryBadge.routePath}
        badge={dummyCategoryBadge.badge}
      />
    );

    const targetBadgeLink = screen.getByTestId<HTMLAnchorElement>('targetBadgeLink');
    const targetBadgeText = screen.getByTestId<HTMLAnchorElement>('targetBadgeText');

    expect(targetBadgeLink.pathname).toBe(
      `/${dummyCategoryBadge.routePath}/${dummyCategoryBadge.badge.id}`
    );
    expect(targetBadgeText.textContent).toMatchSnapshot(
      dummyCategoryBadge.badge.name
    );
    expect(renderResult).matchSnapshot();
  });
});
