import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { styles } from './ClassificationList.css';

type ClassificationListProps = {
  items: CommonClassificationItems;
  routePath: string;
};

const ClassificationList = ({ items, routePath }: ClassificationListProps) => {
  if (items.length !== 0) {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
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
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>{routePath}がありません。</p>;
  }
};

export { ClassificationList };
