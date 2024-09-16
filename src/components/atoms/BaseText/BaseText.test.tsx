import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { BaseText } from './BaseText';

describe('BaseText', () => {
  it('値がDOMに反映されているか', () => {
    const dummyText = 'ダミーテキスト';

    const { renderResult } = setup(
      <BaseText data-testid='targetText'>{dummyText}</BaseText>
    );

    const targetText = screen.getByTestId<HTMLParagraphElement>('targetText');

    expect(targetText.textContent).toBe(dummyText);
    expect(renderResult).toMatchSnapshot();
  });
});
