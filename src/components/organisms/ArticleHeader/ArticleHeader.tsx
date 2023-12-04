import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { ArticleDate } from '@/components/molecules/ArticleDate/ArticleDate';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleTag } from '../ArticleTag/ArticleTag';
import styles from './ArticleHeader.module.css';

type ArticleHeader = {
  article: CommonArticle;
};

const ArticleHeader = ({ article }: ArticleHeader) => {
  return (
    <div className={styles.articleHeader}>
      <ArticleCategory category={article.category} />
      <ArticleDate
        createdAt={article.createdAt}
        updatedAt={article.updatedAt}
      />
      <BaseHeading hLv="1" extendClass={styles.baseHeading1Articleheader}>
        {article.title}
      </BaseHeading>
      <ArticleTag tags={article.tags} />
    </div>
  );
};

export { ArticleHeader };
