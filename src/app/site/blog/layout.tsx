import type { Metadata } from 'next';
import { BaseTransition } from '@/components/shared/BaseTransition/BaseTransition';
import { TheNavigation } from '@/components/layout/TheNavigation/TheNavigation';
import { TheCopyright } from '@/components/layout/TheCopyright/TheCopyright';
import { COPYRIGHT_URL } from '@/constants/';
import { BASE_URL } from '@/constants/setting';
import { LOGO_TEXT, ROUTES } from '@/constants/blog';
import 'github-markdown-css/github-markdown-light.css';
import './markdownExtensions.css';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: LOGO_TEXT,
  description:
    'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
