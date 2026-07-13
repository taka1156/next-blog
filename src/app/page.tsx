import { Metadata } from 'next';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { ArticleList } from '@/components/blog/ArticleList/ArticleList';
import { getArticles } from '@/utils/ssg/brite';
import { LOGO_TEXT } from '@/constants';
import { styles } from './Top.css';
import { SplashAnimation } from '@/components/layout/SplashAnimation/SplashAnimation';

const getStaticArticles = async () => {
  return await getArticles('blog');
};

export const generateMetadata = (): Metadata => {
  const URL = `${process.env.BASE_URL}/`;
  // メタタグ
  const title = 'トップ';
  const description =
    'taka1156のポートフォリオ兼ブログ。\nTSやGo、electron、Reactなど技術関連の記事を更新中';
  const type = 'article';
  const url = URL;

  return {
    title: `${title} | ${LOGO_TEXT}`,
    description: description,
    openGraph: {
      type: type,
      title: `${title} | ${LOGO_TEXT}`,
      description: description,
      url: url
    }
  };
};

const Articles = async () => {
  const articles = await getStaticArticles();

  return (
    <>
      <SplashAnimation />
      <div className={styles.container}>
        <BaseHeading hLv='1' className={styles.heading}>
          Top
        </BaseHeading>
        <ArticleList summaries={articles.map(({ summary }) => summary)} />
      </div>
    </>
  );
};

export default Articles;
