import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { styles } from './RelativeArticleList.css';

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
          hLv='2'
          className={styles.baseHeading2RelativeArticleList}
        >
          関連記事: {name}
        </BaseHeading>
      </div>
      {relatedArticles.length !== 0 && (
        <div className={styles.relativeArticleListBox}>
          {relatedArticles.map((article) => (
            <div key={article.id}>
              <BaseLink routeTo={`/article/${article.id}/`}>
                <BaseHeading
                  hLv='3'
                  className={styles.baseHeading3RelativeArticleList}
                >
                  {article.title}
                </BaseHeading>
              </BaseLink>
            </div>
          ))}
        </div>
      )}
      {relatedArticles.length === 0 && (
        <BaseText className={styles.baseTextRelativeArticleList}>
          関連記事は、まだありません。
        </BaseText>
      )}
    </div>
  );
};

export { RelativeArticleList };
