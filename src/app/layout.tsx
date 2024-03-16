import type { Metadata } from 'next';
import { BaseTransition } from '@/components/atoms/BaseTransition/BaseTransition';
import { TheNavigation } from '@/components/organisms/TheNavigation/TheNavigation';
import { TheCopyright } from '@/components/organisms/TheCopyright/TheCopyright';
import { LOGO_TEXT, ROUTES, COPYRIGHT_URL } from '@/constants/';
import { BASE_URL } from '@/constants/setting';
import 'normalize.css/normalize.css';
import 'github-markdown-css/github-markdown-light.css';
import './layout.css';
import './markdownExtensions.css';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'TakaTechBlog',
  description: 'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="app">
          <header>
            <TheNavigation logoText={LOGO_TEXT} routes={ROUTES} />
          </header>
          <div className="container">
            <main className="box">
              <BaseTransition
                timeout={1500}
                classNames="slide-in-up"
                mode="out-in"
              >
                {children}
              </BaseTransition>
            </main>
            <footer>
              <TheCopyright copyrightUrl={COPYRIGHT_URL} />
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
