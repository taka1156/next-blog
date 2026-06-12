import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { dayjs } from '@/utils/dayjs';
import { styles } from './ArticleDate.css';

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
        src='/img/icon/date.svg'
        alt='日付'
        className={styles.articleDateImg}
      />
      <BaseText className={styles.articleDateText}>
        作成日:{formatDate(createdAt)} ~ 更新日:{formatDate(updatedAt)}
      </BaseText>
    </div>
  );
};

export { ArticleDate };
