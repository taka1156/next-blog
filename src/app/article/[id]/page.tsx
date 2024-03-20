import { Metadata } from 'next';
import axios from 'axios';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { ArticleHeader } from '@/components/organisms/ArticleHeader/ArticleHeader';
import { ArticleBody } from '@/components/organisms/ArticleBody/ArticleBody';
import { getSsgArticlePaths } from '@/utils/ssg';
import { MICRO_CMS, ARTICLE_URL } from '@/constants/setting';
import styles from './Article.module.css';

export const generateStaticParams = async (): Promise<SSGArticlePaths> => {
  return await getSsgArticlePaths();
};

const getStaticArticle = async ({ params }: { params: ArticlePath }) => {
  const articleUrl = `${ARTICLE_URL}/${params.id}`;

  const OPTIONS = {
    fields:
      'id,title,summary,body,tags,category,createdAt,updatedAt,related_blogs',
  };

  const article = await axios
    .get<CommonArticle>(articleUrl, {
      params: { ...OPTIONS },
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

  return { article };
};

export const generateMetadata = async (
  props: { params: ArticlePath }
): Promise<Metadata> => {
  const { article } = await getStaticArticle(props);
  // メタタグ
  const { id, title, summary } = article as CommonArticle;
  const type = 'article';
  const url = `${process.env.BASE_URL}/${id}`;

  // NOTE OGP画像を動的に作成
  const encodeTitleUtf8 = encodeURI(title);
  const OGP_IMAGE =
    'https://images.microcms-assets.io/protected/ap-northeast-1:7cf4e012-34b8-42e4-9878-9730fb0adfdc/service/taka_blog/media/pablo-ogp.png';
  const PARAMS = `?txt=${encodeTitleUtf8}&txt-size=35&txt-color=white&txt-align=middle,center`;
  const image = OGP_IMAGE + PARAMS;

  return {
    title: title,
    description: summary,
    openGraph: {
      type: type,
      title: title,
      description: summary,
      images: [image],
      url: url,
    },
  };
};

const Article = async (props: { params: ArticlePath }) => {
  const { article } = await getStaticArticle(props);

  if (article != null) {
    return (
      <div className={styles.articleContent}>
        <ArticleHeader article={article} />
        <ArticleBody article={article} />
      </div>
    );
  } else {
    return <BaseText>存在しない記事です。</BaseText>;
  }
};

export default Article;
