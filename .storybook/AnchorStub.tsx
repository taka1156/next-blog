import { ReactNode, useEffect } from 'react';
import { action } from 'storybook/actions';

/**
 * Storybook内でのアンカータグのクリックイベントをキャッチして、リンク遷移を防止するためのスタブコンポーネント
 * Storybookのpreview.tsxで使用される
 */
const AnchorStub = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');

      if (target) {
        event.preventDefault();
        event.stopPropagation();
        action('link target')(target.getAttribute('href'));
      }
    };

    console.log('AnchorStub handleClick');
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return <>{children}</>;
};

export { AnchorStub };
