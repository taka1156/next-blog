import Link from 'next/link';
import { THEME_COLOR } from '@/constants/theme';
import { styles } from './notfound.css';

export default function NotFound() {
  return (
    <div className={styles.errorWrapper}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='90'
        height='90'
        fill={THEME_COLOR.main}
        viewBox='0 0 48 48'
      >
        <path d='M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z' />
      </svg>
      <div className={styles.title}>ページが見つかりません</div>
      <div className={styles.description}>
        <p>ページがありません(URLを確認してください。)</p>
        <Link className={styles.errorLink} href='/'>
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
