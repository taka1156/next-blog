import { ComponentProps, ElementType } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool';
import { dummyTocs } from '@/dummy';
import { IndexList } from './IndexList';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { IndexListItem } from '../IndexListItem/IndexListItem';

vi.mock('@/components/atoms/BaseHeading/BaseHeading', () => ({
  BaseHeading: ({
    hLv,
    className,
    children
  }: ComponentProps<typeof BaseHeading>) => {
    const HeadingLv = `h${hLv}` as ElementType;
    return <HeadingLv className={className}>{children}</HeadingLv>;
  }
}));

vi.mock('@/components/molecules/IndexListItem/IndexListItem', () => ({
  IndexListItem: ({ t, changeState }: ComponentProps<typeof IndexListItem>) => (
    <button onClick={changeState} data-testid={`targetIndexListItem${t.index}`}>
      {t.escapedText}
    </button>
  )
}));

describe('IndexList', () => {
  beforeEach(() => {
    mockChangeState.mockReset();
  });

  const mockChangeState = vi.fn();
  const fistIndexId = 1;

  it('IndexList初期値が反映されていること', async () => {
    const { renderResult } = setup(
      <IndexList tocs={dummyTocs} changeState={mockChangeState} />
    );

    expect(screen.getByText('Index')).toBeInTheDocument();
    dummyTocs.forEach((toc, i) => {
      const targetIndexListItem = screen.getByTestId(`targetIndexListItem${i + 1}`);
      expect(targetIndexListItem.textContent).toBe(toc.escapedText);
      expect(targetIndexListItem).toBeInTheDocument();
    });

    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });

  it('クリックされた時にchangeStateが発火すること', async () => {
    const { renderResult, user } = setup(
      <IndexList tocs={dummyTocs} changeState={mockChangeState} />
    );

    const targetIndexListItem = screen.getByTestId(
      `targetIndexListItem${fistIndexId}`
    );

    await user.click(targetIndexListItem);

    expect(mockChangeState).toHaveBeenCalledTimes(1);

    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });
});
