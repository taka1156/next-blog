'use client';
import { Link as Scroll } from 'react-scroll';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseNavIcon } from '@/components/shared/BaseNavIcon/BaseNavIcon';
import { useToggle } from '@/hooks/useToggle';
import { styles } from './IndexNavigation.css';

type IndexNavigationProps = {
  tocs: TocItems;
};

const IndexNavigation = ({ tocs }: IndexNavigationProps) => {
  const { open, changeState } = useToggle(false);

  return (
    <div>
      <div className={styles.indexNav}>
        <BaseNavIcon
          isOpen={open}
          className={styles.navIconBox}
          onClick={changeState}
        >
          {open ? 'CLOSE' : 'INDEX'}
        </BaseNavIcon>
      </div>
      {open && tocs.length !== 0 && (
        <div className={styles.indexList}>
          <div className={styles.indexListBox}>
            <BaseHeading hLv='3' className={styles.indexListHeading}>
              Index
            </BaseHeading>
            <ul>
              {tocs.map((t) => (
                <li
                  key={`${t.index}-${t.escapedText}`}
                  className={styles.indexListItemBox}
                >
                  <Scroll
                    to={`${t.anchor}`}
                    onClick={changeState}
                    className={styles.indexListItem}
                    smooth
                    offset={-65}
                  >
                    {`${t.index}. ${t.escapedText}`}
                  </Scroll>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export { IndexNavigation };
