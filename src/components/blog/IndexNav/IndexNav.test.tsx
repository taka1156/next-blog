import { describe, it, expect, vi, beforeEach } from 'vitest';
import { IndexNav } from './IndexNav';
import { setup } from '@/utils/testtool';
import { screen } from '@testing-library/react';

describe('IndexNav', () => {
  const dummyIsOpen = (toggle: boolean) => toggle;
  const mockChangeState = vi.fn();

  beforeEach(() => {
    mockChangeState.mockReset();
  });

  it('目次を開く前のテキストがINDEXになること', () => {
    const { renderResult } = setup(
      <IndexNav isOpen={dummyIsOpen(false)} changeState={mockChangeState} />
    );
    const targetNavText = screen.getByTestId('targetNavText');
    expect(targetNavText.textContent).toBe('INDEX');
    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });

  it('目次を開く前のテキストがCLOSEになること', () => {
    const { renderResult } = setup(
      <IndexNav isOpen={dummyIsOpen(true)} changeState={mockChangeState} />
    );
    const targetNavText = screen.getByTestId('targetNavText');
    expect(targetNavText.textContent).toBe('CLOSE');
    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });
});
