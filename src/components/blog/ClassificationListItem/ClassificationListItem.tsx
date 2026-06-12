import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { styles } from './ClassificationListItem.css';

type ClassificationListItem = {
  routePath: string;
  item: CommonClassificationItem;
};

const ClassificationListItem = ({ routePath, item }: ClassificationListItem) => {
  return (
    <article className={styles.classificationListItem}>
      <BaseLink
        href={`/${routePath}/${item.id}/`}
        className={styles.baseLinkClassificationListItem}
      >
        <div className={styles.classificationListItemBox}>
          <BaseHeading hLv='2'>{item.name}</BaseHeading>
          <BaseImg
            className={styles.classificationListItemImg}
            src={item.img.url}
            alt={`${item.name}のロゴ`}
          />
        </div>
      </BaseLink>
    </article>
  );
};

export { ClassificationListItem };
