import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { styles } from './SnsIcon.css';

type SnsIcon = {
  name: string;
  link: string;
  img: string;
};

const SnsIcon = ({ name, link, img }: SnsIcon) => {
  return (
    <div className={styles.snsIcon}>
      <BaseLink href={link} className={styles.baseLinkSnsIcon}>
        <BaseImg size='lg' src={img} alt={`${name}アイコン`} />
        {name}
      </BaseLink>
    </div>
  );
};

export { SnsIcon };
