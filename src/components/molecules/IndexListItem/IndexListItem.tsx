'use client';
import { Link as Scroll } from 'react-scroll';
import styles from './IndexListItem.module.css';

type IndexListItem = {
  t: TocItem;
};

const IndexListItem = ({ t }: IndexListItem) => {
  return (
    <div>
      <Scroll to={`#${t.anchor}`} className={styles.indexListItem} smooth>
        {`${t.index}. ${t.escapedText}`}
      </Scroll>
    </div>
  );
};

export { IndexListItem };
