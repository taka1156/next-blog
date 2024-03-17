'use client';
import { Link as Scroll } from 'react-scroll';
import styles from './IndexListItem.module.css';

type IndexListItem = {
  t: TocItem;
  changeState: () => void;
};

const IndexListItem = ({ t, changeState }: IndexListItem) => {
  return (
    <Scroll
      to={`${t.anchor}`}
      onClick={changeState}
      className={styles.indexListItem}
      smooth
      offset={-65}
    >
      {`${t.index}. ${t.escapedText}`}
    </Scroll>
  );
};

export { IndexListItem };
