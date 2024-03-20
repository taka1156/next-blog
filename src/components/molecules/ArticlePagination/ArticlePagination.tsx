import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import styles from './ArticlePagination.module.css';

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
        routeTo={`/${routePath}/${prevIndex}/`}
        extendClass={styles.baseLinkPagination}
      >
        &lt;
      </BaseLink>
      <BaseText extendClass={styles.baseTextPagination}>
        {`${currentPage}/${maxPage}`}
      </BaseText>
      <BaseLink
        routeTo={`/${routePath}/${nextIndex}/`}
        extendClass={styles.baseLinkPagination}
      >
        &gt;
      </BaseLink>
    </div>
  );
};

export { ArticlePagination };
