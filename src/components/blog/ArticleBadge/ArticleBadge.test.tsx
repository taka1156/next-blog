import { describe, vi, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { dummyCategoryBadge, dummyTagBadge } from '@/dummy';
import { ArticleBadge } from './ArticleBadge';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';

vi.mock('@/components/atoms/BaseLink/BaseLink', () => ({
  BaseLink: ({ href, children }: React.ComponentProps<typeof BaseLink>) => (
    <a href={href} data-testid='targetBadgeLink'>
      {children}
    </a>
  )
}));

describe('ArticleBadge', () => {
  it('ArticleBadge初期値(Category): badge', () => {
    const { renderResult } = setup(
      <ArticleBadge
        badgeType='category'
        routePath={dummyTagBadge.routePath}
        badge={dummyTagBadge.badge}
      />
    );

    const targetBadgeLink = screen.getByTestId<HTMLAnchorElement>('targetBadgeLink');

    expect(targetBadgeLink.pathname).toBe(
      `/${dummyTagBadge.routePath}/${dummyTagBadge.badge.id}/`
    );
    expect(targetBadgeLink.textContent).toMatchSnapshot(dummyTagBadge.badge.name);
    expect(renderResult).matchSnapshot();
  });

  it('ArticleBadge初期値(Tag): badge', () => {
    const { renderResult } = setup(
      <ArticleBadge
        badgeType='tag'
        routePath={dummyCategoryBadge.routePath}
        badge={dummyCategoryBadge.badge}
      />
    );

    const targetBadgeLink = screen.getByTestId<HTMLAnchorElement>('targetBadgeLink');

    expect(targetBadgeLink.pathname).toBe(
      `/${dummyCategoryBadge.routePath}/${dummyCategoryBadge.badge.id}/`
    );
    expect(targetBadgeLink.textContent).toMatchSnapshot(
      dummyCategoryBadge.badge.name
    );
    expect(renderResult).matchSnapshot();
  });
});
