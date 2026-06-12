import { ComponentProps } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { Link } from 'react-scroll';
import { setup } from '@/utils/testtool';
import { dummyTocs } from '@/dummy';
import { IndexListItem } from './IndexListItem';

vi.mock('react-scroll', () => ({
  Link: ({ to, onClick, className, children }: ComponentProps<typeof Link>) => (
    <a
      href={`#${to}`}
      onClick={onClick}
      className={className}
      data-testid='targetIndexListItem'
    >
      {children}
    </a>
  )
}));

describe('IndexListItem', () => {
  beforeEach(() => {
    mockChangeState.mockReset();
  });

  const mockChangeState = vi.fn();
  const dummyTocItem = dummyTocs[0];

  it('値がDOMに反映されているか', () => {
    const { renderResult } = setup(
      <IndexListItem t={dummyTocItem} changeState={mockChangeState} />
    );

    const targetIndexListItem = screen.getByTestId('targetIndexListItem');
    expect(targetIndexListItem).toBeInTheDocument();
    expect(targetIndexListItem).toHaveTextContent(dummyTocItem.escapedText);
    expect(targetIndexListItem).toHaveAttribute('href', `#${dummyTocItem.anchor}`);

    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });

  it('クリックされた時にchangeStateが発火すること', async () => {
    const { renderResult, user } = setup(
      <IndexListItem t={dummyTocItem} changeState={mockChangeState} />
    );

    const targetIndexListItem = screen.getByTestId('targetIndexListItem');

    await user.click(targetIndexListItem);

    expect(mockChangeState).toHaveBeenCalledTimes(1);

    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });
});
