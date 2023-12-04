import { IndexNavigation } from '@/components/organisms/IndexNavigation/IndexNavigation';
import { markedWrap, tocs } from '@/utils/marked';
import styles from './ArticleBody.module.css';

type ArticleBody = {
  article: CommonArticle;
};

const ArticleBody = ({ article }: ArticleBody) => {
  return (
    <>
      <div
        className={`${styles.articleBody} markdown-body`}
        dangerouslySetInnerHTML={{ __html: markedWrap(article.body) }}
      />
      <IndexNavigation tocs={tocs} />
    </>
  );
};

export { ArticleBody };
