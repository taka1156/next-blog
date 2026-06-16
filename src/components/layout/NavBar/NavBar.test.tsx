import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setup } from '@/utils/testtool';
import { screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import { dummyLogo } from '@/dummy';

describe('NavBar logoText={dummyLogoText}', () => {
  beforeEach(() => {
    mockChangeState.mockReset();
  });

  const dummyLogoText = dummyLogo;
  const dummyIsOpen = (toggle: boolean) => toggle;
  const mockChangeState = vi.fn();

  it('ナビゲーションバーを開く前のテキストがNAVIになること', () => {
    const { renderResult } = setup(
      <NavBar
        logoText={dummyLogoText}
        isOpen={dummyIsOpen(false)}
        routes={[]}
        changeState={mockChangeState}
      />
    );
    const targetNavText = screen.getByTestId('targetNavText');
    expect(targetNavText.textContent).toBe('NAVI');
    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });

  it('ナビゲーションバーを閉じる前のテキストがCLOSEになること', () => {
    const { renderResult } = setup(
      <NavBar
        logoText={dummyLogoText}
        isOpen={dummyIsOpen(true)}
        routes={[]}
        changeState={mockChangeState}
      />
    );
    const targetNavText = screen.getByTestId('targetNavText');
    expect(targetNavText.textContent).toBe('CLOSE');
    // スナップショット
    expect(renderResult).toMatchSnapshot();
  });
});
