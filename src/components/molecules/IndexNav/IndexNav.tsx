import { BaseNavIcon } from '@/components/atoms/BaseNavIcon/BaseNavIcon';
import { styles } from './IndexNav.css';

type IndexNav = {
  isOpen: boolean;
  changeState: () => void;
};

const IndexNav = ({ isOpen, changeState }: IndexNav) => {
  return (
    <div className={styles.indexNav}>
      <BaseNavIcon
        isOpen={isOpen}
        className={styles.baseNavIconBox}
        onClick={changeState}
      >
        {isOpen ? 'CLOSE' : 'INDEX'}
      </BaseNavIcon>
    </div>
  );
};

export { IndexNav };
