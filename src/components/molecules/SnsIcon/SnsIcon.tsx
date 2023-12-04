import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import styles from './SnsIcon.module.css';

type SnsIcon = {
  name: string;
  link: string;
  img: string;
};

const SnsIcon = ({ name, link, img }: SnsIcon) => {
  return (
    <div className={styles.snsIcon}>
      <BaseLink routeTo={link} extendClass={styles.baseLinkSnsicon}>
        <BaseImg size="lg" imgUrl={img} imgAlt={`${name}アイコン`} />
        {name}
      </BaseLink>
    </div>
  );
};

export { SnsIcon };
