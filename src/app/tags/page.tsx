import { Metadata } from 'next';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { ClassificationList } from '@/components/blog/ClassificationList/ClassificationList';
import { styles } from './Tags.css';
import { getClassification } from '@/utils/ssg/brite';

const getStaticTags = async () => {
  return await getClassification('blog', 'tag');
};

export const generateMetadata = (): Metadata => {
  const URL = `${process.env.BASE_URL}/tags/`;
  const IMAGE = `${process.env.BASE_URL}/img/ogp/tag.png`;

  // メタタグ
  const title = 'タグ 一覧';
  const description =
    'taka1156のタグ一覧。\nTSやGo、electron、Reactなど技術関連の記事を更新中';
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

const Tags = async () => {
  const tagObj = await getStaticTags();
  const tags = tagObj ? Object.keys(tagObj).map((key) => ({ name: key })) : [];

  const hasTags = tags != null && tags.length > 0;

  return (
    <div>
      <BaseHeading hLv='1' className={styles.tagTitle}>
        Tag
      </BaseHeading>
      {hasTags ? (
        <ClassificationList routePath='tag' items={tags} />
      ) : (
        <BaseHeading hLv='2'>タグが見つかりませんでした。</BaseHeading>
      )}
    </div>
  );
};

export default Tags;
