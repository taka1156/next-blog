import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { BaseImg } from './BaseImg';
import { dummyImgUrl } from '@/dummy';

describe('BaseImg', () => {
  it('値がDOMに反映されているか(size: sm)', () => {
    const alt = 'ダミー';
    const { renderResult } = setup(
      <BaseImg src={dummyImgUrl} alt={alt} size='free' data-testid='targetImg' />
    );

    const targetImg = screen.getByTestId<HTMLImageElement>('targetImg');

    expect(targetImg.src).toBe(dummyImgUrl);
    expect(targetImg.alt).toBe(alt);

    expect(renderResult).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(size: lg)', () => {
    const alt = 'ダミー';
    const { renderResult } = setup(
      <BaseImg src={dummyImgUrl} alt={alt} size='free' data-testid='targetImg' />
    );

    const targetImg = screen.getByTestId<HTMLImageElement>('targetImg');

    expect(targetImg.src).toBe(dummyImgUrl);
    expect(targetImg.alt).toBe(alt);

    expect(renderResult).toMatchSnapshot();
  });
});
