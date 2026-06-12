import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ReactNode } from 'react';
import { styles } from './BaseCard.css';

type CardContents = {
  img: {
    url: string;
  };
  title: string;
  contents: string;
  link?: string;
};

type BaseCardProps = {
  contents: CardContents;
  children?: ReactNode;
};

const BaseCard = ({ contents, children }: BaseCardProps) => {
  return (
    <div>
      <article className={styles.cardListItem}>
        <figure>
          <BaseImg src={contents.img.url} alt={`${contents.title}の画像`} />
          <div className={styles.sectionBar} />
          <figcaption className={styles.cardCaption}>
            <BaseHeading hLv='2' className={styles.title}>
              {contents.title}
            </BaseHeading>
            <BaseText>{contents.contents}</BaseText>
          </figcaption>
        </figure>
        {children}
      </article>
    </div>
  );
};

export { BaseCard };
