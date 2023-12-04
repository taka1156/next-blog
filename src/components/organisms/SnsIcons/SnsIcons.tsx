import { SnsIcon } from '@/components/molecules/SnsIcon/SnsIcon';
import styles from './SnsIcons.module.css';

type SnsIcons = {
  snsIcons: BlogSnsIcons;
};

const SnsIcons = ({ snsIcons }: SnsIcons) => {
  return (
    <ul className={styles.snsIcons}>
      {snsIcons.map((snsIcon) => (
        <li key={snsIcon.name} className={styles.snsIcon}>
          <SnsIcon name={snsIcon.name} link={snsIcon.link} img={snsIcon.img} />
        </li>
      ))}
    </ul>
  );
};

export { SnsIcons };
