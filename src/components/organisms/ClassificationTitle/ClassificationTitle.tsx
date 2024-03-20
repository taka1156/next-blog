import { ReactNode } from 'react';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import styles from './ClassificationTitle.module.css';

type ClassificationTitle = {
  children: ReactNode;
  imgUrl: string;
};

const ClassificationTitle = ({ imgUrl, children }: ClassificationTitle) => {
  return (
    <div>
      <div className={styles.classificationTitle}>
        <BaseHeading hLv='1' extendClass={styles.baseHeading1Classificationtitle}>
          {children}
        </BaseHeading>
        <BaseImg size='lg' imgUrl={imgUrl} imgAlt='ロゴ' />
      </div>
      <div className={styles.classificationTitleBorder} />
    </div>
  );
};

export { ClassificationTitle };
