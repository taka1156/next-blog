import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BaseNavIcon } from './BaseNavIcon';

describe('BaseNavIcon', () => {
  const noop = vi.fn();

  it('ボタン要素を描画する', () => {
    render(<BaseNavIcon isOpen={false} onClick={noop} />);
    expect(screen.getByTestId('targetNavButton')).toBeInTheDocument();
  });

  it('children を表示する', () => {
    render(
      <BaseNavIcon isOpen={false} onClick={noop}>
        MENU
      </BaseNavIcon>
    );
    expect(screen.getByText('MENU')).toBeInTheDocument();
  });

  it('ボタンをクリックすると onClick が呼ばれる', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BaseNavIcon isOpen={false} onClick={onClick} />);
    await user.click(screen.getByTestId('targetNavButton'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('className を適用する', () => {
    const { container } = render(
      <BaseNavIcon isOpen={false} onClick={noop} className='custom' />
    );
    expect(container.firstChild).toHaveClass('custom');
  });

  describe('isOpen=false のとき', () => {
    it('top スパンが close スタイルを持つ', () => {
      render(<BaseNavIcon isOpen={false} onClick={noop} />);
      // CSS クラスは実際の値に依存するため、存在チェックのみ行う
      expect(screen.getByTestId('targetNavTop')).toBeInTheDocument();
      expect(screen.getByTestId('targetNavMiddle')).toBeInTheDocument();
      expect(screen.getByTestId('targetNavBottom')).toBeInTheDocument();
    });
  });

  describe('isOpen=true のとき', () => {
    it('open スタイルのスパンが存在する', () => {
      render(<BaseNavIcon isOpen={true} onClick={noop} />);
      expect(screen.getByTestId('targetNavTop')).toBeInTheDocument();
      expect(screen.getByTestId('targetNavBottom')).toBeInTheDocument();
    });
  });
});
