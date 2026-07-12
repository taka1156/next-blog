import { Metadata } from 'next';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { ArticleList } from '@/components/blog/ArticleList/ArticleList';
import { getArticles } from '@/utils/ssg/brite';
import { styles } from './Top.css';

const getStaticArticles = async () => {
  return await getArticles('blog');
};

export const generateMetadata = (): Metadata => {
  const URL = `${process.env.BASE_URL}/articles`;
  // メタタグ
  const title = 'トップ';
  const description =
    'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中';
  const type = 'article';
  const url = URL;

  return {
    title: title,
    description: description,
    openGraph: {
      type: type,
      title: title,
      description: description,
      url: url
    }
  };
};

const Articles = async () => {
  const articles = await getStaticArticles();

  return (
    <div>
      <BaseHeading hLv='1' className={styles.heading}>
        Top
      </BaseHeading>
      <ArticleList summaries={articles.map(({ summary }) => summary)} />
    </div>
  );
};

export default Articles;
