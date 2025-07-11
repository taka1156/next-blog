import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { BaseNavIcon } from './BaseNavIcon';
import { styles } from './BaseNavIcon.css';

describe('navIcon', () => {
  const dummyOnClick = vi.fn();

  it('開いた時(閉じるアイコン表示)', () => {
    const dummyText = 'ダミーのナビテキスト(Open)';
    const dummyIsOpen = true;

    const { renderResult } = setup(
      <BaseNavIcon isOpen={dummyIsOpen} onClick={dummyOnClick}>
        {dummyText}
      </BaseNavIcon>
    );

    const targetNavTop = screen.getByTestId<HTMLSpanElement>('targetNavTop');
    const targetNavMiddle = screen.getByTestId<HTMLSpanElement>('targetNavMiddle');
    const targetNavBottom = screen.getByTestId<HTMLSpanElement>('targetNavBottom');
    const targetNavText = screen.getByTestId<HTMLSpanElement>('targetNavText');

    expect(targetNavTop).toHaveClass(styles.navIconTopOpen);
    expect(targetNavMiddle).toHaveClass(styles.navIconMiddleFade);
    expect(targetNavBottom).toHaveClass(styles.navIconBottomOpen);
    expect(targetNavText.textContent).toBe(dummyText);
    expect(renderResult).toMatchSnapshot();
  });

  it('閉じる時(開くアイコン表示)', () => {
    const dummyText = 'ダミーのナビテキスト(Close)';
    const dummyIsOpen = false;

    const { renderResult } = setup(
      <BaseNavIcon isOpen={dummyIsOpen} onClick={dummyOnClick}>
        {dummyText}
      </BaseNavIcon>
    );

    const targetNavTop = screen.getByTestId<HTMLSpanElement>('targetNavTop');
    const targetNavMiddle = screen.getByTestId<HTMLSpanElement>('targetNavMiddle');
    const targetNavBottom = screen.getByTestId<HTMLSpanElement>('targetNavBottom');
    const targetNavText = screen.getByTestId<HTMLSpanElement>('targetNavText');

    expect(targetNavTop).toHaveClass(styles.navIconTopClose);
    expect(targetNavMiddle).not.toHaveClass(styles.navIconMiddleFade);
    expect(targetNavBottom).toHaveClass(styles.navIconBottomClose);
    expect(targetNavText.textContent).toBe(dummyText);
    expect(renderResult).toMatchSnapshot();
  });

  it('onClickを実行した時、渡された関数が実行されるか', async () => {
    const dummyIsOpen = false;
    const dummyText = 'ダミーのナビテキスト';

    const { user } = setup(
      <BaseNavIcon isOpen={dummyIsOpen} onClick={dummyOnClick}>
        {dummyText}
      </BaseNavIcon>
    );

    const targetNavButton = screen.getByTestId<HTMLButtonElement>('targetNavButton');

    await user.click(targetNavButton);

    expect(dummyOnClick).toHaveBeenCalled();
  });
});
