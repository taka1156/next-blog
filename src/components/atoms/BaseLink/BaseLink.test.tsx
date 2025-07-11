import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { useRouter } from 'next-router-mock';
import { setup } from '@/utils/testtool/';
import { BaseLink } from './BaseLink';
import { dummyUrl } from '@/dummy';

describe('BaseLink', () => {
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

  it('BaseLink初期値(External Link): String', () => {
    const resultURL = dummyUrl;
    const resultText = '外部リンク';

    const { renderResult } = setup(
      <BaseLink href={resultURL} data-testid='targetLink'>
        {resultText}
      </BaseLink>
    );

    const targetLink = screen.getByTestId<HTMLAnchorElement>('targetLink');

    expect(targetLink.href.replace(/\/$/, '')).toBe(resultURL);
    expect(targetLink.textContent).toBe(resultText);

    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });

  it('BaseLink初期値(Internal Link): String', () => {
    const resultURL = '/';
    const resultText = '内部リンク';

    const { renderResult } = setup(
      <BaseLink href={resultURL} data-testid='targetLink'>
        {resultText}
      </BaseLink>
    );

    const targetLink = screen.getByTestId<HTMLAnchorElement>('targetLink');

    expect(targetLink.pathname).toBe(resultURL);
    expect(targetLink.textContent).toBe(resultText);

    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });
});
