import { Metadata } from 'next';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ClassificationTitle } from '@/components/blog/ClassificationTitle/ClassificationTitle';
import { ArticleList } from '@/components/blog/ArticleList/ArticleList';
import { BASE_URL } from '@/constants';
import { getClassification } from '@/utils/ssg/brite';
import { styles } from './category.css';

export const generateStaticParams = async () => {
  const categories = await getClassification('blog', 'category');
  return categories ? categories.map(({ name }) => ({ id: name })) : [];
};

const getStaticCategory = async (
  id: string
): Promise<CommonClassificationItem | undefined> => {
  const categories = await getClassification('blog', 'category');
  return categories?.find((category) => category.name === id);
};

export const generateMetadata = async (props: {
  params: CategoryPath;
}): Promise<Metadata> => {
  const { id } = await props.params;

  const category = await getStaticCategory(id);

  const URL = `${BASE_URL}/category/${id}/`;
  const IMAGE = category!.image;
  // メタタグ
  const title = `${id}カテゴリの記事一覧`;
  const description = `${id}関連の記事`;
  const type = 'article';
  const url = URL;
  const image = IMAGE;

  return {
    title: title,
    description: description,
    openGraph: {
      type: type,
      title: title,
      description: description,
      images: [image],
      url: url
    }
  };
};

const Category = async (props: { params: CategoryPath }) => {
  const { id } = await props.params;
  const category = await getStaticCategory(id);
  const summaryByCategory = category ? category.posts : null;
  const imageUrl = category!.image;

  if (summaryByCategory) {
    return (
      <div className={styles.container}>
        <ClassificationTitle src={imageUrl}>{id}</ClassificationTitle>
        <ArticleList summaries={summaryByCategory} />
      </div>
    );
  }

  return <BaseText>存在しないカテゴリーです。</BaseText>;
};

export default Category;
