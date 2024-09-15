import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { BaseHeading } from './BaseHeading';

describe('BaseHeading', () => {
  it('値がDOMに反映されているか(h1)', () => {
    const dummyText = 'ダミーの見出しh1';

    const { renderResult } = setup(
      <BaseHeading hLv='h1' data-testid='targetHeading'>
        {dummyText}
      </BaseHeading>
    );

    const targetHeading = screen.getByTestId<HTMLHeadingElement>('targetHeading');

    expect(targetHeading.textContent).toBe(dummyText);
    expect(renderResult).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(h3)', () => {
    const dummyText = 'ダミーの見出しh3';

    const { renderResult } = setup(
      <BaseHeading hLv='h3' data-testid='targetHeading'>
        {dummyText}
      </BaseHeading>
    );

    const targetHeading = screen.getByTestId<HTMLHeadingElement>('targetHeading');

    expect(targetHeading.textContent).toBe(dummyText);
    expect(renderResult).toMatchSnapshot();
  });
});
