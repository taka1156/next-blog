import type { Metadata } from 'next';
import { Scroll } from '@/components/temporary/Scroll';
import { TheNavigation } from '@/components/layout/TheNavigation/TheNavigation';
import { TheCopyright } from '@/components/layout/TheCopyright/TheCopyright';
import { COPYRIGHT_URL, BASE_URL, LOGO_TEXT, ROUTES } from '@/constants/index';
import 'github-markdown-css/github-markdown-light.css';
import 'normalize.css/normalize.css';
import './markdownExtensions.css';
import './layout.css';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: LOGO_TEXT,
  description:
    'taka1156のブログ。\nTSやGo、electron、Reactなど技術関連の記事を更新中'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <Scroll />
        <header>
          <TheNavigation logoText={LOGO_TEXT} routes={ROUTES} />
        </header>
        <div className='container'>
          <main className='box'>
            {/* <BaseTransition timeout={1500} classNames='slide-in-up'> */}
            {children}
            {/* </BaseTransition> */}
          </main>
          <footer>
            <TheCopyright copyrightUrl={COPYRIGHT_URL} />
          </footer>
        </div>
      </body>
    </html>
  );
}
