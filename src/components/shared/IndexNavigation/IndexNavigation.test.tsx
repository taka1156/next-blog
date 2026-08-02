import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IndexNavigation } from './IndexNavigation';
import { dummyTocs } from '@/dummy';

vi.mock('@/hooks/useToggle', () => ({
  useOpen: vi.fn(() => ({ open: false, toggleOpen: vi.fn() }))
}));

vi.mock('@/hooks/useResponsive', () => ({
  useResponsive: vi.fn(() => ({ isMobile: false }))
}));

vi.mock('react-scroll', () => ({
  Link: ({
    children,
    to,
    containerId: _containerId,
    smooth: _smooth,
    ...props
  }: {
    children: React.ReactNode;
    to: string;
    containerId?: string;
    smooth?: boolean;
    [key: string]: unknown;
  }) => (
    <a href={`#${to}`} {...props}>
      {children}
    </a>
  )
}));

vi.mock('@/components/shared/BaseNavIcon/BaseNavIcon', () => ({
  BaseNavIcon: ({
    children,
    onClick
  }: {
    isOpen: boolean;
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
  }) => <button onClick={onClick}>{children}</button>
}));

vi.mock('@/components/shared/BaseHeading/BaseHeading', () => ({
  BaseHeading: ({ children }: { children: React.ReactNode }) => <h3>{children}</h3>
}));

describe('IndexNavigation', () => {
  it('初期状態では INDEX ボタンを表示する', async () => {
    const { useOpen } = await import('@/hooks/useToggle');
    vi.mocked(useOpen).mockReturnValue({ open: false, toggleOpen: vi.fn() });
    render(<IndexNavigation tocs={dummyTocs} />);
    expect(screen.getByText('INDEX')).toBeInTheDocument();
  });

  it('open=true のとき CLOSE ボタンを表示する', async () => {
    const { useOpen } = await import('@/hooks/useToggle');
    vi.mocked(useOpen).mockReturnValue({ open: true, toggleOpen: vi.fn() });
    render(<IndexNavigation tocs={dummyTocs} />);
    expect(screen.getByText('CLOSE')).toBeInTheDocument();
  });

  it('open=true のとき TOC 一覧を表示する', async () => {
    const { useOpen } = await import('@/hooks/useToggle');
    vi.mocked(useOpen).mockReturnValue({ open: true, toggleOpen: vi.fn() });
    render(<IndexNavigation tocs={dummyTocs} />);
    expect(screen.getByText(/1\. /)).toBeInTheDocument();
  });

  it('open=false のとき TOC 一覧を表示しない', async () => {
    const { useOpen } = await import('@/hooks/useToggle');
    vi.mocked(useOpen).mockReturnValue({ open: false, toggleOpen: vi.fn() });
    render(<IndexNavigation tocs={dummyTocs} />);
    expect(screen.queryByText(/1\. /)).not.toBeInTheDocument();
  });

  it('tocs が空のとき open=true でもリストを表示しない', async () => {
    const { useOpen } = await import('@/hooks/useToggle');
    vi.mocked(useOpen).mockReturnValue({ open: true, toggleOpen: vi.fn() });
    render(<IndexNavigation tocs={[]} />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('ボタンをクリックすると toggleOpen が呼ばれる', async () => {
    const user = userEvent.setup();
    const toggleOpen = vi.fn();
    const { useOpen } = await import('@/hooks/useToggle');
    vi.mocked(useOpen).mockReturnValue({ open: false, toggleOpen });
    render(<IndexNavigation tocs={dummyTocs} />);
    await user.click(screen.getByText('INDEX'));
    expect(toggleOpen).toHaveBeenCalled();
  });

  it('containerId があるとモーダルモードで描画する', async () => {
    const { useOpen } = await import('@/hooks/useToggle');
    vi.mocked(useOpen).mockReturnValue({ open: false, toggleOpen: vi.fn() });
    const { container } = render(
      <IndexNavigation tocs={dummyTocs} containerId='article-1' />
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
