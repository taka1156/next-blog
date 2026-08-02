import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BaseTransition } from './BaseTransition';

vi.mock('react-transition-group', () => ({
  CSSTransition: ({
    children,
    in: inProp
  }: {
    children: React.ReactNode;
    in: boolean;
    timeout: number;
    classNames: string;
    unmountOnExit: boolean;
  }) => (inProp ? <>{children}</> : null)
}));

describe('BaseTransition', () => {
  it('flag が undefined のとき children を表示する（in=true）', () => {
    render(
      <BaseTransition timeout={300} classNames='fade'>
        <div>コンテンツ</div>
      </BaseTransition>
    );
    expect(screen.getByText('コンテンツ')).toBeInTheDocument();
  });

  it('flag=true のとき children を表示する', () => {
    render(
      <BaseTransition timeout={300} classNames='fade' flag={true}>
        <div>コンテンツ</div>
      </BaseTransition>
    );
    expect(screen.getByText('コンテンツ')).toBeInTheDocument();
  });

  it('flag=false のとき children を非表示にする', () => {
    render(
      <BaseTransition timeout={300} classNames='fade' flag={false}>
        <div>コンテンツ</div>
      </BaseTransition>
    );
    expect(screen.queryByText('コンテンツ')).not.toBeInTheDocument();
  });

  it('flag=null（オブジェクト）のとき children を表示する（in=true）', () => {
    render(
      <BaseTransition timeout={300} classNames='fade' flag={null}>
        <div>コンテンツ</div>
      </BaseTransition>
    );
    expect(screen.getByText('コンテンツ')).toBeInTheDocument();
  });
});
