import { Metadata } from 'next';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ClassificationTitle } from '@/components/blog/ClassificationTitle/ClassificationTitle';
import { ArticleList } from '@/components/blog/ArticleList/ArticleList';
import { format } from '@/utils/imgix';
import { getClassification, resolveBlogImagePath } from '@/utils/ssg/brite';
import { styles } from './tag.css';

export const generateStaticParams = async () => {
  const tags = await getClassification('blog', 'tag');
  return tags ? Object.keys(tags).map((key) => ({ id: key })) : [];
};

const getStaticTag = async () => {
  const tags = await getClassification('blog', 'tag');

  if (!tags) {
    return null;
  }

  return tags ?? null;
};

export const generateMetadata = async (props: {
  params: TagPath;
}): Promise<Metadata> => {
  const { id } = await props.params;

  const URL = `${process.env.BASE_URL}/tag/${id}/`;
  const imageUrl = resolveBlogImagePath('tag', `${id}.svg`);
  const IMAGE = format(imageUrl);
  // メタタグ
  const title = `${id}タグの記事一覧`;
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

const Tag = async (props: { params: TagPath }) => {
  const { id } = await props.params;
  const tags = await getStaticTag();
  const summaryByTag = tags ? tags[id] : null;
  const imageUrl = resolveBlogImagePath('tag', `${id}.svg`);

  if (summaryByTag != null) {
    return (
      <div className={styles.container}>
        <ClassificationTitle src={format(imageUrl)}>{id}</ClassificationTitle>
        <ArticleList summaries={summaryByTag ?? []} />
      </div>
    );
  } else {
    return <BaseText>存在しないタグです。</BaseText>;
  }
};

export default Tag;
