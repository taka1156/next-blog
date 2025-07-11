import { ComponentProps, ElementType } from 'react';
import { describe, vi, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { BaseHeading } from './BaseHeading';

vi.mock('@/components/atoms/BaseHeading/BaseHeading', () => ({
  BaseHeading: ({
    hLv,
    className,
    children
  }: ComponentProps<typeof BaseHeading>) => {
    const HeadingLv = `h${hLv}` as ElementType;
    return (
      <HeadingLv className={className} data-testid='targetHeading'>
        {children}
      </HeadingLv>
    );
  }
}));

describe('BaseHeading', () => {
  it('値がDOMに反映されているか(h1)', () => {
    const dummyText = 'ダミーの見出しh1';

    const { renderResult } = setup(
      <BaseHeading hLv='1' data-testid='targetHeading'>
        {dummyText}
      </BaseHeading>
    );

    const targetHeading = screen.getByTestId<HTMLHeadingElement>('targetHeading');

    expect(targetHeading.textContent).toBe(dummyText);
    expect(renderResult).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(h3)', () => {
    const dummyText = 'ダミーの見出しh3';

    const { renderResult } = setup(<BaseHeading hLv='3'>{dummyText}</BaseHeading>);

    const targetHeading = screen.getByTestId<HTMLHeadingElement>('targetHeading');

    expect(targetHeading.textContent).toBe(dummyText);
    expect(renderResult).toMatchSnapshot();
  });
});
