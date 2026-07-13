import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Scroll } from '@/components/temporary/Scroll';
import { SplashAnimation } from '@/components/layout/SplashAnimation/SplashAnimation';
import { TheNavigation } from '@/components/layout/TheNavigation/TheNavigation';
import { TheCopyright } from '@/components/layout/TheCopyright/TheCopyright';
import { COPYRIGHT_URL, BASE_URL, LOGO_TEXT, ROUTES } from '@/constants/index';
import 'normalize.css/normalize.css';
import 'github-markdown-css/github-markdown-light.css';
import './layout.css';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: `%s | ${LOGO_TEXT}`,
    default: LOGO_TEXT
  },
  description:
    'taka1156のポートフォリオ兼ブログ。\nTSやGo、electron、Reactなど技術関連の記事を更新中'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <Suspense fallback={null}>
          <Scroll />
          <SplashAnimation>
            <header>
              <TheNavigation routes={ROUTES} />
            </header>
            <div className='container'>
              <main className='box'>{children}</main>
              <footer>
                <TheCopyright copyrightUrl={COPYRIGHT_URL} />
              </footer>
            </div>
          </SplashAnimation>
        </Suspense>
      </body>
    </html>
  );
}
