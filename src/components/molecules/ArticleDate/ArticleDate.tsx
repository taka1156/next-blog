import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { dayjs } from '@/utils/dayjs';
import styles from './ArticleDate.module.css';

type ArticleDate = {
  createdAt: string;
  updatedAt: string;
};

const ArticleDate = ({ createdAt, updatedAt }: ArticleDate) => {
  const formatDate = (date = '') => {
    if (date === '') return '--/--/--';
    return dayjs(date).tz().format('YYYY/M/D');
  };

  return (
    <div className={styles.articleDate}>
      <BaseImg
        size="sm"
        imgUrl="/img/icon/date.svg"
        imgAlt="日付"
        extendClass={styles.baseTextDate}
      />
      <BaseText extendClass={styles.baseTextDate}>
        作成日:{formatDate(createdAt)} ~ 更新日:{formatDate(updatedAt)}
      </BaseText>
    </div>
  );
};

export { ArticleDate };
