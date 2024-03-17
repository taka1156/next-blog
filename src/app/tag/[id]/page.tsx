import { Metadata } from 'next';
import axios from 'axios';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { ClassificationTitle } from '@/components/organisms/ClassificationTitle/ClassificationTitle';
import { ArticleList } from '@/components/organisms/ArticleList/ArticleList';
import { format } from '@/utils/imgix';
import { getSsgTagPaths } from '@/utils/ssg';
import {
  MICRO_CMS,
  ARTICLE_URL,
  TAG_URL,
  POSTS_PER_PAGE,
} from '@/constants/setting';

export const generateStaticParams = async (): Promise<SSGTagPaths> => {
  return await getSsgTagPaths();
};

const getStaticTag = async ({ params }: { params: TagPath }) => {
  const tagUrl = `${TAG_URL}/${params.id}`;
  const page = 1;

  const TAG_OPTIONS: MicroCMSParams = { fields: 'id,name,img' };
  const ARTICLE_OPTIONS: MicroCMSParams = {
    fields: 'id,title,summary,tags,category,createdAt,updatedAt',
    limit: POSTS_PER_PAGE,
    offset: (page - 1) * POSTS_PER_PAGE,
    filters: `tags[contains]${params.id}`,
  };

  const tag = await axios
    .get<CommonBadge>(tagUrl, {
      params: TAG_OPTIONS,
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

  const tagArticleInfo = await axios
    .get<GetArticles>(ARTICLE_URL, {
      params: ARTICLE_OPTIONS,
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

  if (tag != null && tagArticleInfo != null) {
    const { contents: articles, totalCount } = tagArticleInfo;
    const maxPage = Math.ceil(totalCount / POSTS_PER_PAGE);
    return { tag, articles, maxPage };
  } else {
    return {
      tag: { id: '', name: '', img: { url: '' } },
      articles: [],
      maxPage: 0,
    };
  }
};

export const generateMetadata = async (props: {
  params: TagPath;
}): Promise<Metadata> => {
  const { tag } = await getStaticTag(props);
  const { id } = props.params;

  const URL = `${process.env.baseURL}/tag/${id}/`;
  const IMAGE = format(tag.img.url);
  // メタタグ
  const title = `${tag.name}タグの記事一覧`;
  const description = `${tag.name}関連の記事`;
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

const Tag = async (props: { params: TagPath }) => {
  const { tag, articles, maxPage } = await getStaticTag(props);

  if (tag != null) {
    return (
      <>
        <ClassificationTitle imgUrl={tag.img.url}>
          tag: {tag.name}
        </ClassificationTitle>
        <ArticleList
          articles={articles}
          maxPage={maxPage}
          routePath={`tag/${tag.id}`}
        />
      </>
    );
  } else {
    return <BaseText>存在しないタグです。</BaseText>;
  }
};

export default Tag;
