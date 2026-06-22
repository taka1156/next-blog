import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { ArticleDate } from '@/components/blog/ArticleDate/ArticleDate';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleTag } from '../ArticleTag/ArticleTag';
import { styles } from './ArticleHeader.css';

type ArticleHeaderProps = {
  article: CommonArticle;
};

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <div className={styles.articleHeader}>
      <ArticleCategory category={article.category} />
      <ArticleDate createdAt={article.createdAt} updatedAt={article.updatedAt} />
      <BaseHeading hLv='1' className={styles.articleHeaderHeading}>
        {article.title}
      </BaseHeading>
      <ArticleTag tags={article.tags} />
    </div>
  );
};

export { ArticleHeader };
