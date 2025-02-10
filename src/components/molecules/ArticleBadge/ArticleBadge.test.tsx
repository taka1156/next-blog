import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { ArticleBadge } from './ArticleBadge';
import { dummyCategoryBadge, dummyTagBadge } from '@/dummy';

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
        badgeType='tag'
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
