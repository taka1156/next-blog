import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { GithubStatus } from './GithubStatus';
import { GITHUB_STATUS } from '@/constants';

vi.mock('next/image', () => ({
  default: vi.fn(
    ({
      src,
      alt,
      ...props
    }: {
      src: string;
      alt: string;
      [key: string]: unknown;
    }) => <img src={src} alt={alt} {...props} />
  )
}));

describe('GithubStatus', () => {
  it('画像を 2 枚描画する', () => {
    const { container } = render(<GithubStatus githubStatus={GITHUB_STATUS} />);
    expect(container.querySelectorAll('img')).toHaveLength(2);
  });

  it('1 枚目に statusUrl の src が設定される', () => {
    const { container } = render(<GithubStatus githubStatus={GITHUB_STATUS} />);
    const imgs = container.querySelectorAll('img');
    expect(imgs[0]).toHaveAttribute('src', GITHUB_STATUS.statusUrl);
  });

  it('2 枚目に usedLangUrl の src が設定される', () => {
    const { container } = render(<GithubStatus githubStatus={GITHUB_STATUS} />);
    const imgs = container.querySelectorAll('img');
    expect(imgs[1]).toHaveAttribute('src', GITHUB_STATUS.usedLangUrl);
  });

  it('両画像に imgAlt の alt が設定される', () => {
    const { container } = render(<GithubStatus githubStatus={GITHUB_STATUS} />);
    container.querySelectorAll('img').forEach((img) => {
      expect(img).toHaveAttribute('alt', GITHUB_STATUS.imgAlt);
    });
  });
});
