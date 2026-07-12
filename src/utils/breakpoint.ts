// PC: 1024px 以上タブレット: 768 ~ 1023pxスマートフォン: 767px 以下

import { GlobalStyleRule, StyleRule } from '@vanilla-extract/css';

export const BREAKPOINT = {
  pc: 1024,
  tablet: 768,
  sp: 767,
  small: 320
} as const;

type BreakpointKey = keyof typeof BREAKPOINT;

/**
 * ブレークポイントに基づいてスタイルを生成するユーティリティ関数（アップ）
 */
export const responsiveUp = <T extends StyleRule | GlobalStyleRule>(
  breakpoints: Partial<Record<BreakpointKey, T>>
): { '@media': Record<string, T> } => ({
  '@media': Object.fromEntries(
    Object.entries(breakpoints).map(([key, style]) => [
      `screen and (min-width: ${BREAKPOINT[key as BreakpointKey]}px)`,
      style
    ])
  )
});

/**
 * ブレークポイントに基づいてスタイルを生成するユーティリティ関数（ダウン）
 */
export const responsiveDown = <T extends StyleRule | GlobalStyleRule>(
  breakpoints: Partial<Record<BreakpointKey, T>>
): { '@media': Record<string, T> } => ({
  '@media': Object.fromEntries(
    Object.entries(breakpoints).map(([key, style]) => [
      `screen and (max-width: ${BREAKPOINT[key as BreakpointKey]}px)`,
      style
    ])
  )
});
