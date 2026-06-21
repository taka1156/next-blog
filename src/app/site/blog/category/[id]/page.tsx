import { Metadata } from 'next';
import axios from 'axios';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { ClassificationTitle } from '@/components/blog/ClassificationTitle/ClassificationTitle';
import { ArticleList } from '@/components/blog/ArticleList/ArticleList';
import { format } from '@/utils/imgix/';
import { getSsgCategoryPaths } from '@/utils/ssg';
import {
  MICRO_CMS,
  ARTICLE_URL,
  CATEGORY_URL,
  POSTS_PER_PAGE
} from '@/constants/setting';

export const generateStaticParams = async (): Promise<SSGCategoryPaths> => {
  return await getSsgCategoryPaths();
};

const getStaticCategory = async (params: CategoryPath) => {
  const { id } = await params;
  const categoryUrl = `${CATEGORY_URL}?ids=${id}`;
  const page = 1;

  const CATEGORY_OPTIONS: MicroCMSParams = { fields: 'id,name,img' };
  const ARTICLE_OPTIONS: MicroCMSParams = {
    fields: 'id,title,summary,tags,category,createdAt,updatedAt',
    limit: POSTS_PER_PAGE,
    offset: (page - 1) * POSTS_PER_PAGE,
    filters: `category[equals]${id}`
  };

  const category = await axios
    .get<{ contents: CommonBadge[] }>(categoryUrl, {
      params: CATEGORY_OPTIONS,
      headers: { 'X-API-KEY': MICRO_CMS }
    })
    .then((res) => {
      const { data } = res;
      return data.contents[0];
    })
    .catch((e) => {
      console.error(e);
      return null;
    });

  const categoryArticleInfo = await axios
    .get<GetArticles>(ARTICLE_URL, {
      params: ARTICLE_OPTIONS,
      headers: { 'X-API-KEY': MICRO_CMS }
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (category != null && categoryArticleInfo != null) {
    const { contents: articles, totalCount } = categoryArticleInfo;
    const maxPage = Math.ceil(totalCount / POSTS_PER_PAGE);
    return { category, articles, maxPage };
  } else {
    return {
      category: { id: '', name: '', img: { url: '' } },
      articles: [],
      maxPage: 0
    };
  }
};

export const generateMetadata = async (props: {
  params: CategoryPath;
}): Promise<Metadata> => {
  const { params } = await props;
  const { id } = params;

  const { category } = await getStaticCategory(params);

  const URL = `${process.env.BASE_URL}/category/${id}/`;
  const IMAGE = format(category.img.url);
  // メタタグ
  const title = `${category.name}カテゴリの記事一覧`;
  const description = `${category.name}関連の記事`;
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
  const { params } = await props;
  const { category, articles, maxPage } = await getStaticCategory(params);

  if (category != null) {
    return (
      <div>
        <ClassificationTitle src={category.img.url}>
          Category: {category.name}
        </ClassificationTitle>
        <ArticleList
          articles={articles}
          maxPage={maxPage}
          routePath={`category/${category.id}`}
        />
      </div>
    );
  } else {
    return <BaseText>存在しないカテゴリーです。</BaseText>;
  }
};

export default Category;
