import { Metadata } from 'next';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ClassificationTitle } from '@/components/blog/ClassificationTitle/ClassificationTitle';
import { ArticleList } from '@/components/blog/ArticleList/ArticleList';
import { format } from '@/utils/imgix/';
import { getClassification } from '@/utils/ssg/brite';
import { resolveBlogImagePath } from '@/utils/imgix/r2';

export const generateStaticParams = async () => {
  const categories = await getClassification('blog', 'category');
  return categories ? Object.keys(categories).map((key) => ({ id: key })) : [];
};

const getStaticCategory = async () => {
  const categories = await getClassification('blog', 'category');

  if (!categories) {
    return null;
  }

  return categories ?? null;
};

export const generateMetadata = async (props: {
  params: CategoryPath;
}): Promise<Metadata> => {
  const { id } = await props.params;

  const URL = `${process.env.BASE_URL}/category/${id}/`;
  const imageUrl = resolveBlogImagePath('category', `${id}.svg`);
  const IMAGE = format(imageUrl);
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
  const categories = await getStaticCategory();
  const summaryByCategory = categories ? categories[id] : null;
  const imageUrl = resolveBlogImagePath('category', `${id}.svg`);

  if (summaryByCategory != null) {
    return (
      <div>
        <ClassificationTitle src={format(imageUrl)}>
          Category: {id}
        </ClassificationTitle>
        <ArticleList summaries={summaryByCategory ?? []} />
      </div>
    );
  } else {
    return <BaseText>存在しないカテゴリーです。</BaseText>;
  }
};

export default Category;
