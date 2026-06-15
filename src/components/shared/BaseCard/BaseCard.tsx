import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ReactNode } from 'react';
import { styles } from './BaseCard.css';

const MAX_DESCRIPTION_LENGTH = 100;

type CardContents = {
  /** カードに表示する画像のURL */
  img: {
    url: string;
  };
  /** カードのタイトル */
  title: string;
  /** カードの説明文 */
  description: string;
};

type BaseCardProps = {
  /** カードに表示する内容 */
  contents: CardContents;
  children?: ReactNode;
};

const wrapText = (text: string, maxLineLength: number): string => {
  if (text.length <= maxLineLength) {
    return text;
  }

  return text.slice(0, maxLineLength) + '...';
};

/**
 * 画像、タイトル、説明文を表示するカードコンポーネント
 *
 * childrenを渡すことで、カードの下部に任意の要素を追加可能
 *
 * ボタンやリンクなどを配置するのに利用
 */
const BaseCard = ({ contents, children }: BaseCardProps) => {
  return (
    <div>
      <article className={styles.cardListItem}>
        <figure>
          <BaseImg
            src={contents.img.url}
            alt={`${contents.title}の画像`}
            className={styles.cardImg}
          />
          <div className={styles.sectionBar} />
          <figcaption className={styles.cardCaption}>
            <BaseHeading hLv='2' className={styles.title}>
              {contents.title}
            </BaseHeading>
            {/** TODO: 長い説明文の場合は省略表示するかアコーディオンにする */}
            <BaseText className={styles.description}>
              {wrapText(contents.description, MAX_DESCRIPTION_LENGTH)}
            </BaseText>
          </figcaption>
          {children}
        </figure>
      </article>
    </div>
  );
};

export { BaseCard };
