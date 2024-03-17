import { Metadata } from 'next';
import axios from 'axios';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { ArticleList } from '@/components/organisms//ArticleList/ArticleList';
import styles from '@/app/Top.module.css';
import { getSsgArticlesPaths } from '@/utils/ssg';
import { MICRO_CMS, ARTICLE_URL, POSTS_PER_PAGE } from '@/constants/setting';

export const generateStaticParams = async (): Promise<SSGArticlesPaths> => {
  return await getSsgArticlesPaths();
};

const getStaticArticles = async ({ params }: { params: ArticlesPath }) => {
  const page = parseInt(params.page) || 1;

  const PARAMS = {
    fields: 'id,title,summary,tags,category,createdAt,updatedAt',
    limit: POSTS_PER_PAGE,
    offset: (page - 1) * POSTS_PER_PAGE,
  };

  const articlesInfo = await axios
    .get<GetArticles>(ARTICLE_URL, {
      params: PARAMS,
      headers: { 'X-API-KEY': MICRO_CMS },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (articlesInfo != null) {
    const { contents: articles, totalCount } = articlesInfo;
    const maxPage = Math.ceil(totalCount / POSTS_PER_PAGE);
    return { articles, maxPage };
  } else {
    return { articles: [], maxPage: 0 };
  }
};

export const generateMetadata = (): Metadata => {
  const URL = `${process.env.baseURL}/articles`;
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
      url: url,
    },
  };
};

const Articles = async (props: { params: ArticlesPath }) => {
  const { articles, maxPage } = await getStaticArticles(props);

  return (
    <>
      <BaseHeading hLv="1" extendClass={styles.baseHeading1Articles}>
        Top
      </BaseHeading>
      <ArticleList articles={articles} maxPage={maxPage} routePath="articles" />
    </>
  );
};

export default Articles;
