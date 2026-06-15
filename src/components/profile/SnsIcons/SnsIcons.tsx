import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { styles } from './SnsIcons.css';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';

type SnsIconsProps = {
  snsIcons: BlogSnsIcons;
};

const SnsIcons = ({ snsIcons }: SnsIconsProps) => {
  return (
    <ul className={styles.snsIcons}>
      {snsIcons.map((snsIcon) => (
        <li key={snsIcon.name} className={styles.snsIcon}>
          <BaseLink href={snsIcon.link}>
            <BaseImg alt={snsIcon.name} src={snsIcon.img} />
          </BaseLink>
        </li>
      ))}
    </ul>
  );
};

export { SnsIcons };
