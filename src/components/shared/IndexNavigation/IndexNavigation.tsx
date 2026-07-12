'use client';
import { Link as Scroll } from 'react-scroll';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseNavIcon } from '@/components/shared/BaseNavIcon/BaseNavIcon';
import { useOpen } from '@/hooks/useToggle';
import { styles } from './IndexNavigation.css';

type IndexNavigationProps = {
  tocs: TocItems;
  containerId?: string;
};

const IndexNavigation = ({ tocs, containerId }: IndexNavigationProps) => {
  const { open, toggleOpen } = useOpen(false);
  const isModal = !!containerId;

  const navIcon = (
    <BaseNavIcon isOpen={open} className={styles.navIconBox} onClick={toggleOpen}>
      {open ? 'CLOSE' : 'INDEX'}
    </BaseNavIcon>
  );

  const list = open && tocs.length !== 0 && (
    <div className={isModal ? styles.modalContainer : styles.indexContainer}>
      <div className={styles.indexListBox}>
        <BaseHeading hLv='3' className={styles.indexListHeading}>
          Index
        </BaseHeading>
        <ul className={styles.indexList}>
          {tocs.map((t) => (
            <li
              key={`${t.index}-${t.escapedText}`}
              className={styles.indexListItemBox}
            >
              <Scroll
                to={`${t.anchor}`}
                containerId={containerId}
                onClick={toggleOpen}
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
  );

  if (isModal) {
    return (
      <div className={styles.wrapperModal}>
        <div className={styles.innerRelative}>
          <div className={styles.indexNavModal}>{navIcon}</div>
          {list}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.indexNav}>{navIcon}</div>
      {list}
    </div>
  );
};

export { IndexNavigation };
