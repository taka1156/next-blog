import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import styles from './RelativeArticleList.module.css';

type RelativeArticleList = {
  category: CommonBadge;
  relatedArticles: CommonArticles;
};

const RelativeArticleList = ({ category, relatedArticles }: RelativeArticleList) => {
  const { name } = category;
  return (
    <div className={styles.relativeArticleList}>
      <div>
        <BaseHeading
          id='anchor_relative'
          hLv='h2'
          className={styles.baseHeading2Relativearticlelist}
        >
          関連記事: {name}
        </BaseHeading>
      </div>
      {relatedArticles.length !== 0 && (
        <div className={styles.relativeArticleListBox}>
          {relatedArticles.map((article) => (
            <div key={article.id}>
              <BaseLink href={`/article/${article.id}/`}>
                <BaseHeading
                  hLv='h3'
                  className={styles.baseHeading3Relativearticlelist}
                >
                  {article.title}
                </BaseHeading>
              </BaseLink>
            </div>
          ))}
        </div>
      )}
      {relatedArticles.length === 0 && (
        <BaseText className={styles.baseTextRelativearticlelist}>
          関連記事は、まだありません。
        </BaseText>
      )}
    </div>
  );
};

export { RelativeArticleList };
