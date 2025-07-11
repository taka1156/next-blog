import { describe, vi, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { setup } from '@/utils/testtool/';
import { ArticleDate } from './ArticleDate';
import { dummyDate } from '@/dummy';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
dayjs.locale('ja');

vi.mock('@/components/atoms/BaseText/BaseText', () => ({
  BaseText: ({ children }: React.ComponentProps<typeof BaseText>) => (
    <p data-testid='targetDateText'>{children}</p>
  )
}));

describe('ArticleDate', () => {
  it('ArticleDate初期値: createdAt, updatedAt (dummy)', () => {
    const formatDate = (date = '') => {
      if (date === '') return '--/--/--';
      return dayjs(date).tz().format('YYYY/M/D');
    };

    const { createdAt, updatedAt } = dummyDate;

    const { renderResult } = setup(
      <ArticleDate
        createdAt={createdAt}
        updatedAt={updatedAt}
        data-testid='targetDateText'
      />
    );

    const targetDateText =
      screen.getByTestId<HTMLParagraphElement>('targetDateText');

    expect(targetDateText.textContent).toBe(
      `作成日:${formatDate(createdAt)} ~ 更新日:${formatDate(updatedAt)}`
    );

    expect(renderResult).toMatchSnapshot();
  });

  it('ArticleDate初期値: createdAt, updatedAt (空文字)', () => {
    const formatDate = (date = '') => {
      if (date === '') return '--/--/--';
      return dayjs(date).tz().format('YYYY/M/D');
    };

    const { renderResult } = setup(<ArticleDate createdAt='' updatedAt='' />);

    const targetDateText =
      screen.getByTestId<HTMLParagraphElement>('targetDateText');

    expect(targetDateText.textContent).toBe(
      `作成日:${formatDate('')} ~ 更新日:${formatDate('')}`
    );

    expect(renderResult).toMatchSnapshot();
  });
});
