import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { styles } from './ClassificationListItem.css';

type ClassificationListItem = {
  routePath: string;
  item: CommonClassificationItem;
};

const ClassificationListItem = ({ routePath, item }: ClassificationListItem) => {
  return (
    <article className={styles.classificationListItem}>
      <BaseLink
        routeTo={`/${routePath}/${item.id}/`}
        className={styles.baseLinkClassificationListItem}
      >
        <div className={styles.classificationListItemBox}>
          <BaseHeading hLv='2'>{item.name}</BaseHeading>
          <BaseImg size='lg' imgUrl={item.img.url} imgAlt={`${item.name}のロゴ`} />
        </div>
      </BaseLink>
    </article>
  );
};

export { ClassificationListItem };
