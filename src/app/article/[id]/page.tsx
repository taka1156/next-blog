import { Metadata } from 'next';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ArticleHeader } from '@/components/blog/ArticleHeader/ArticleHeader';
import { ArticleBody } from '@/components/shared/ArticleBody/ArticleBody';
import { getArticleBySlug, getArticles } from '@/utils/ssg/brite';

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  const articles = await getArticles('blog');
  return articles.map((article) => ({
    id: article.summary.slug
  }));
};

const getStaticArticle = async ({ params }: { params: ArticlePath }) => {
  const { id } = await params;
  const article = await getArticleBySlug('blog', id);
  return article;
};

export const generateMetadata = async (props: {
  params: ArticlePath;
}): Promise<Metadata> => {
  const { summary } = await getStaticArticle(props);
  // メタタグ
  const { title, description, slug } = summary;
  const type = 'article';
  const url = `${process.env.BASE_URL}/${slug}`;

  // NOTE OGP画像を動的に作成
  const encodeTitleUtf8 = encodeURI(title);
  const OGP_IMAGE =
    'https://images.microcms-assets.io/protected/ap-northeast-1:7cf4e012-34b8-42e4-9878-9730fb0adfdc/service/taka_blog/media/pablo-ogp.png';
  const PARAMS = `?txt=${encodeTitleUtf8}&txt-size=35&txt-color=white&txt-align=middle,center`;
  const image = OGP_IMAGE + PARAMS;

  return {
    title: title,
    description: description,
    openGraph: {
      type: type,
      title: title,
      description: description,
      images: [image],
      url: url
    }
  };
};

const Article = async (props: { params: ArticlePath }) => {
  const { summary, content } = await getStaticArticle(props);

  if (summary != null) {
    return (
      <>
        <ArticleHeader summary={summary} />
        <ArticleBody body={content} />
      </>
    );
  } else {
    return <BaseText>存在しない記事です。</BaseText>;
  }
};

export default Article;
