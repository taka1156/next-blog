import { BaseNavIcon } from '@/components/atoms/BaseNavIcon/BaseNavIcon';
import styles from './IndexNav.module.css';

type IndexNav = {
  isOpen: boolean;
  changeState: () => void;
};

const IndexNav = ({ isOpen, changeState }: IndexNav) => {
  return (
    <div className={styles.indexNav}>
      <BaseNavIcon
        isOpen={isOpen}
        onClick={changeState}
        className={styles.baseNavIconBox}
      >
        {isOpen ? 'CLOSE' : 'INDEX'}
      </BaseNavIcon>
    </div>
  );
};

export { IndexNav };
