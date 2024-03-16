'use client';
import { RelativeArticleList } from '@/components/organisms/RelativeArticleList/RelativeArticleList';
import { IndexNavigation } from '@/components/organisms/IndexNavigation/IndexNavigation';
import { useMarkedStateHook } from '@/hooks/markedStateHook';
import styles from './ArticleBody.module.css';
import { BaseLoading } from '@/components/atoms/BaseLoading/BaseLoading';

type ArticleBody = {
  article: CommonArticle;
};

const ArticleBody = ({ article }: ArticleBody) => {
  const { parseCompleted, articleBodyTocs, articleBodyText } =
    useMarkedStateHook(article.body);
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
