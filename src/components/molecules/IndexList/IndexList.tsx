import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { IndexListItem } from '@/components/molecules/IndexListItem/IndexListItem';
import styles from './IndexList.module.css';

type IndexList = {
  tocs: TocItems;
  isOpen: boolean;
  changeState: () => void;
};

const IndexList = ({ tocs, isOpen, changeState }: IndexList) => {
  return (
    <div className={styles.indexList}>
      <div className={styles.indexListBox}>
        <BaseHeading hLv="3" extendClass={styles.baseHeading3IndexList}>
          Index
        </BaseHeading>
        <ul>
          {tocs.map((t) => (
            <li
              key={`${t.index}-${t.escapedText}`}
              className={styles.indexListItemBox}
              onClick={changeState}
            >
              <IndexListItem t={t} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { IndexList };
