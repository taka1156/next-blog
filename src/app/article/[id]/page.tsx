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
