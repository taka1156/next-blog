import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { IndexListItem } from '@/components/molecules/IndexListItem/IndexListItem';
import styles from './IndexList.module.css';

type IndexList = {
  tocs: TocItems;
  changeState: () => void;
};

const IndexList = ({ tocs, changeState }: IndexList) => {
  return (
    <div className={styles.indexList}>
      <div className={styles.indexListBox}>
        <BaseHeading hLv='3' extendClass={styles.baseHeading3IndexList}>
          Index
        </BaseHeading>
        <ul>
          {tocs.map((t) => (
            <li
              key={`${t.index}-${t.escapedText}`}
              className={styles.indexListItemBox}
            >
              <IndexListItem t={t} changeState={changeState} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { IndexList };
