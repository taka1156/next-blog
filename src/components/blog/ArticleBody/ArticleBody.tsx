'use client';
import { RelativeArticleList } from '@/components/blog/RelativeArticleList/RelativeArticleList';
import { IndexNavigation } from '@/components/blog/IndexNavigation/IndexNavigation';
import { useMarked } from '@/hooks/useMarked';
import { BaseLoading } from '@/components/shared/BaseLoading/BaseLoading';
import { styles } from './ArticleBody.css';

type ArticleBodyProps = {
  body: string;
};

const ArticleBody = ({ body }: ArticleBodyProps) => {
  const { parseCompleted, articleBodyTocs, articleBodyText } = useMarked(body);
  return (
    <>
      {!parseCompleted && <BaseLoading />}
      {parseCompleted && (
        <>
          <div
            className={`${styles.articleBody} markdown-body`}
            dangerouslySetInnerHTML={{ __html: articleBodyText }}
          />
          {/* TODO: 廃止予定 */}
          {/* <RelativeArticleList
            category={article.category}
            relatedArticles={article.related_blogs}
          /> */}
          <IndexNavigation tocs={articleBodyTocs} />
        </>
      )}
    </>
  );
};

export { ArticleBody };
