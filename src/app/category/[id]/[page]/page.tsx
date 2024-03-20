import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import axios from 'axios';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { ClassificationTitle } from '@/components/organisms/ClassificationTitle/ClassificationTitle';
import { ArticleList } from '@/components/organisms/ArticleList/ArticleList';
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

const getStaticCategory = async ({ params }: { params: CategoryPath }) => {
  const categoryUrl = `${CATEGORY_URL}/${params.id}`;
  const page = params.page != null ? params.page : '1';
  const pageIndex = parseInt(page);
  const offset = pageIndex - 1;

  const CATEGORY_OPTIONS: MicroCMSParams = { fields: 'id,name,img' };
  const ARTICLE_OPTIONS: MicroCMSParams = {
    fields: 'id,title,summary,tags,category,createdAt,updatedAt',
    limit: POSTS_PER_PAGE,
    offset: offset * POSTS_PER_PAGE,
    filters: `category[equals]${params.id}`
  };

  const category = await axios
    .get<CommonBadge>(categoryUrl, {
      params: CATEGORY_OPTIONS,
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

  let categoryArticleInfo: GetArticles | null = null;
  if (offset > -1) {
    categoryArticleInfo = await axios
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
  }

  if (category != null) {
    if (categoryArticleInfo != null) {
      const { contents: articles, totalCount } = categoryArticleInfo;
      const maxPage = Math.ceil(totalCount / POSTS_PER_PAGE);
      return { category, articles, maxPage };
    } else {
      return {
        category: category,
        articles: [],
        maxPage: 0
      };
    }
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
  const { category } = await getStaticCategory(props);
  const { id, page } = props.params;

  const URL = `${process.env.BASE_URL}/category/${id}/${page}/`;
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
  const { id, page } = props.params;

  if (page === '0') {
    redirect(`/category/${id}/`);
  }

  const { category, articles, maxPage } = await getStaticCategory(props);

  if (category != null) {
    return (
      <>
        <ClassificationTitle imgUrl={category.img.url}>
          Category: {category.name}
        </ClassificationTitle>
        <ArticleList
          articles={articles}
          maxPage={maxPage}
          routePath={`category/${category.id}`}
        />
      </>
    );
  } else {
    return <BaseText>存在しないカテゴリーです。</BaseText>;
  }
};

export default Category;
