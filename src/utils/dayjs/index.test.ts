import { describe, it, expect } from 'vitest';
import { dayjs } from './index';

describe('dayjs', () => {
  it('Asia/Tokyo タイムゾーンで日付をフォーマットできる', () => {
    const result = dayjs('2023-12-31T00:00:00Z').tz().format('YYYY/M/D');
    expect(result).toBe('2023/12/31');
  });

  it('日本語ロケールで月名が日本語になる', () => {
    const result = dayjs('2023-01-15').format('MMMM');
    expect(result).toBe('1月');
  });

  it('.tz() でタイムゾーン変換が行える', () => {
    const result = dayjs('2023-06-01T00:00:00Z').tz();
    expect(result.utcOffset()).toBe(9 * 60);
  });

  it('UTC 日時を JST に変換したとき時刻が +9h になる', () => {
    const utc = dayjs.utc('2023-01-01T00:00:00Z');
    const jst = utc.tz('Asia/Tokyo');
    expect(jst.hour()).toBe(9);
  });
});
