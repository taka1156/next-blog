import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { styles } from './ArticlePagination.css';

type ArticlePagination = {
  routePath: string;
  prevIndex: number;
  nextIndex: number;
  currentPage: number;
  maxPage: number;
};

const ArticlePagination = ({
  routePath,
  prevIndex,
  nextIndex,
  currentPage,
  maxPage
}: ArticlePagination) => {
  return (
    <div className={styles.articlePagination}>
      <BaseLink
        data-testid='targetPaginationPrevLink'
        href={`/${routePath}/${prevIndex}/`}
        className={styles.baseLinkPagination}
      >
        &lt;
      </BaseLink>
      <BaseText
        data-testid='targetPaginationCurrentText'
        className={styles.baseTextPagination}
      >
        {`${currentPage}/${maxPage}`}
      </BaseText>
      <BaseLink
        data-testid='targetPaginationNextLink'
        href={`/${routePath}/${nextIndex}/`}
        className={styles.baseLinkPagination}
      >
        &gt;
      </BaseLink>
    </div>
  );
};

export { ArticlePagination };
