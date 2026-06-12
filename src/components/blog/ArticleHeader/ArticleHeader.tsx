import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { ArticleDate } from '@/components/blog/ArticleDate/ArticleDate';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleTag } from '../ArticleTag/ArticleTag';
import { styles } from './ArticleHeader.css';

type ArticleHeader = {
  article: CommonArticle;
};

const ArticleHeader = ({ article }: ArticleHeader) => {
  return (
    <div className={styles.articleHeader}>
      <ArticleCategory category={article.category} />
      <ArticleDate createdAt={article.createdAt} updatedAt={article.updatedAt} />
      <BaseHeading hLv='1' className={styles.baseHeading1ArticleHeader}>
        {article.title}
      </BaseHeading>
      <ArticleTag tags={article.tags} />
    </div>
  );
};

export { ArticleHeader };
