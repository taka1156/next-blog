import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { DevelopmentCard } from '@/components/portfolio/DevelopmentCard/DevelopmentCard';
import { styles } from './page.css';
import { getArticles } from '@/utils/ssg/brite';

const getStaticArticles = async () => {
  const articles = await getArticles('portfolio');
  return articles;
};

export default async function Development() {
  const articles = await getStaticArticles();

  return (
    <div className={styles.container}>
      <BaseHeading hLv='1' className={styles.developmentHeading}>
        Development
      </BaseHeading>

      <div className={styles.cardList}>
        {articles.map((article, index) => (
          <DevelopmentCard key={index} index={index} article={article} />
        ))}
      </div>
    </div>
  );
}
