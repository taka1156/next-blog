import { Metadata } from 'next';
import axios from 'axios';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { ClassificationList } from '@/components/organisms/ClassificationList/ClassificationList';
import { MICRO_CMS, TAG_URL } from '@/constants/setting';

type GetTags = {
  contents: CommonBadges;
};

const getStaticTags = async () => {
  const PARAMS = { fields: 'id,name,img' };

  const tagsInfo = await axios
    .get<GetTags>(TAG_URL, {
      params: PARAMS,
      headers: { 'X-API-KEY': MICRO_CMS },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (tagsInfo != null) {
    const { contents } = tagsInfo;
    return { tags: contents };
  } else {
    return { tags: [] };
  }
};

export const generateMetadata = (): Metadata => {
  const URL = `${process.env.BASE_URL}/tags/`;
  const IMAGE = `${process.env.BASE_URL}/img/ogp/tag.png`;

  // メタタグ
  const title = 'タグ 一覧';
  const description =
    'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中';
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
      url: url,
    },
  };
};

const Tags = async () => {
  const { tags } = await getStaticTags();

  return (
    <div>
      <BaseHeading hLv="1" extendClass="base-heading1-tags">
        Tag
      </BaseHeading>
      <ClassificationList routePath="tag" items={tags} />
    </div>
  );
};

export default Tags;
