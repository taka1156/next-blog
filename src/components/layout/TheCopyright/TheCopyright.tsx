import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { dayjs } from '@/utils/dayjs';
import { styles } from './TheCopyright.css';

type TheCopyright = {
  copyrightUrl: string;
};

const TheCopyright = ({ copyrightUrl }: TheCopyright) => {
  const Year = () => dayjs().tz().year();

  return (
    <div className={styles.theCopyright}>
      <BaseText className={styles.baseTextTheCopyright}>
        &copy; 2019 - {Year()} taka1156 <br />
        使用素材、プライバシーポリシー等は
        <BaseLink href={copyrightUrl} className={styles.baseLinkTheCopyright}>
          コチラ
        </BaseLink>
      </BaseText>
    </div>
  );
};

export { TheCopyright };
