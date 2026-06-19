'use client';
import { RelativeArticleList } from '@/components/blog/RelativeArticleList/RelativeArticleList';
import { IndexNavigation } from '@/components/blog/IndexNavigation/IndexNavigation';
import { useMarkedStateHook } from '@/hooks/markedStateHook';
import { BaseLoading } from '@/components/shared/BaseLoading/BaseLoading';
import { styles } from './ArticleBody.css';

type ArticleBodyProps = {
  article: CommonArticle;
};

const ArticleBody = ({ article }: ArticleBodyProps) => {
  const { parseCompleted, articleBodyTocs, articleBodyText } = useMarkedStateHook(
    article.body
  );
  return (
    <>
      {!parseCompleted && <BaseLoading />}
      {parseCompleted && (
        <>
          <div
            className={`${styles.articleBody} markdown-body`}
            dangerouslySetInnerHTML={{ __html: articleBodyText }}
          />
          <RelativeArticleList
            category={article.category}
            relatedArticles={article.related_blogs}
          />
          <IndexNavigation tocs={articleBodyTocs} />
        </>
      )}
    </>
  );
};

export { ArticleBody };
