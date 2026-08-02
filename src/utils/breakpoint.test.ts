import { describe, it, expect } from 'vitest';
import { BREAKPOINT, responsiveUp, responsiveDown } from './breakpoint';

describe('responsiveUp', () => {
  it('pc breakpoint に対して min-width のメディアクエリキーを生成する', () => {
    const result = responsiveUp({ pc: { color: 'red' } as never });
    expect(result['@media']).toHaveProperty(
      `screen and (min-width: ${BREAKPOINT.pc}px)`
    );
  });

  it('tablet breakpoint のピクセル値が正しい', () => {
    const result = responsiveUp({ tablet: { color: 'blue' } as never });
    expect(result['@media']).toHaveProperty(
      `screen and (min-width: ${BREAKPOINT.tablet}px)`
    );
  });

  it('複数のブレークポイントをまとめて処理できる', () => {
    const result = responsiveUp({
      pc: { color: 'red' } as never,
      sp: { color: 'blue' } as never
    });
    expect(Object.keys(result['@media'])).toHaveLength(2);
  });

  it('空オブジェクトを渡すと空の @media を返す', () => {
    const result = responsiveUp({});
    expect(result['@media']).toEqual({});
  });
});

describe('responsiveDown', () => {
  it('sp breakpoint に対して max-width のメディアクエリキーを生成する', () => {
    const result = responsiveDown({ sp: { color: 'green' } as never });
    expect(result['@media']).toHaveProperty(
      `screen and (max-width: ${BREAKPOINT.sp}px)`
    );
  });

  it('small breakpoint のピクセル値が正しい', () => {
    const result = responsiveDown({ small: { color: 'black' } as never });
    expect(result['@media']).toHaveProperty(
      `screen and (max-width: ${BREAKPOINT.small}px)`
    );
  });

  it('複数のブレークポイントをまとめて処理できる', () => {
    const result = responsiveDown({
      pc: { fontSize: '16px' } as never,
      tablet: { fontSize: '14px' } as never
    });
    expect(Object.keys(result['@media'])).toHaveLength(2);
  });

  it('空オブジェクトを渡すと空の @media を返す', () => {
    const result = responsiveDown({});
    expect(result['@media']).toEqual({});
  });
});
