import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { dayjs } from '@/utils/dayjs';
import styles from './TheCopyright.module.css';

type TheCopyright = {
  copyrightUrl: string;
};

const TheCopyright = ({ copyrightUrl }: TheCopyright) => {
  const Year = () => dayjs().tz().year();

  return (
    <div className={styles.theCopyright}>
      <BaseText extendClass={styles.baseTextThecopyright}>
        &copy; 2019 - {Year()} taka1156 <br />
        使用素材、プライバシーポリシー等は
        <BaseLink
          routeTo={copyrightUrl}
          extendClass={styles.baseLinkThecopyright}
        >
          コチラ
        </BaseLink>
      </BaseText>
    </div>
  );
};

export { TheCopyright };
