import { IndexListItem } from '../IndexListItem/IndexListItem';
import styles from "./IndexList.module.css";

type IndexList = {
  tocs: TocItems;
  isOpen: boolean;
  changeState: () => void;
};

const IndexList = ({ tocs, isOpen, changeState }: IndexList) => {
  return (
    isOpen && (
      <div className={styles.indexList}>
        <div className={styles.indexListBox}>
          <h3 className={styles.indexListTitle}>Index</h3>
          <ul >
            {tocs.length !== 0 && (
              <>
                {tocs.map((t) => {
                  <li
                    key={`${t.index}-${t.escapedText}`}
                    className={styles.indexListItemBox}
                    onClick={changeState}
                  >
                    <IndexListItem t={t} />
                  </li>;
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    )
  );
};

export { IndexList };
