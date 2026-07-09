'use client';
import { ArticleTag } from '@/components/blog/ArticleTag/ArticleTag';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { useRef, useCallback, useEffect } from 'react';
import { styles } from './DevelopmentCard.css';
import { ArticleBody } from '@/components/shared/ArticleBody/ArticleBody';
import { resolvePortfolioImagePath } from '@/utils/imgix/r2';
import { getPaletteSync } from 'colorthief';

const COLOR_BACKGROUND_INDEX = 1;
const DIALOG_ID = 'development-card-dialog';

type DevelopmentCardProps = {
  index: number;
  article: ArticleElement;
  className?: string;
};

const DevelopmentCard = (props: DevelopmentCardProps) => {
  const { thumbnail, title, description, tags } = props.article.summary;
  const imageUrl = resolvePortfolioImagePath('development', thumbnail);
  const imgRef = useRef<HTMLImageElement>(null);

  const modalRef = useRef<HTMLDialogElement>(null);

  const applyPaletteColor = useCallback((img: HTMLImageElement) => {
    try {
      const color = getPaletteSync(img);
      if (color && color[COLOR_BACKGROUND_INDEX]) {
        img.style.backgroundColor = color[COLOR_BACKGROUND_INDEX].hex();
      }
    } catch (err) {
      console.error('getPaletteSync failed:', err);
    }
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    // マウント時点で既に読み込み済み（キャッシュ済み）の場合
    if (img?.complete && img.naturalWidth > 0) {
      applyPaletteColor(img);
    }
  }, [applyPaletteColor]);

  return (
    <div className={props.className}>
      <article className={styles.cardListItem}>
        <figure className={styles.figure}>
          <BaseImg
            ref={imgRef}
            src={imageUrl}
            alt={`${title}の画像`}
            className={styles.cardImg}
            crossOrigin='anonymous'
            onLoad={(e) => applyPaletteColor(e.currentTarget)}
          />
          <figcaption className={styles.cardCaption}>
            <BaseHeading hLv='2' className={styles.title}>
              {title}
            </BaseHeading>
            <ArticleTag tags={tags.slice(0, 3).map((tag) => ({ name: tag }))} />
            <BaseText className={styles.description}>{description}</BaseText>
          </figcaption>
          <button
            className={styles.button}
            onClick={() => modalRef.current?.showModal()}
          >
            詳細
          </button>

          <dialog
            ref={modalRef}
            id={`${DIALOG_ID}-${props.index}`}
            className={styles.dialog}
          >
            <div className={styles.dialogHeader}>
              <BaseHeading hLv='2'>{title}</BaseHeading>
              <button
                className={styles.dialogClose}
                onClick={() => modalRef.current?.close()}
                aria-label='閉じる'
              >
                ×
              </button>
            </div>
            <ArticleBody
              body={props.article.content}
              containerId={`${DIALOG_ID}-${props.index}`}
            />
          </dialog>
        </figure>
      </article>
    </div>
  );
};

export { DevelopmentCard };
