import {
  BADGES_MAX,
  POSTS_PER_PAGE,
  ARTICLE_URL,
  MICRO_CMS,
  TAG_URL,
  CATEGORY_URL
} from '@/constants/setting';
import { getSsgRouteParams } from './utils';

const CLASSIFICATION_PARAMS = { fields: 'id,name,img', limit: BADGES_MAX };
const ARTICLE_DEPTH = 2; // flat実行時に空配列を残して、記事が存在しないページも明示的に表示する

const range = (start: number, end: number) => {
  if (end === 0) {
    return [0];
  }
  return [...Array(end - start + 1)].map((_, i) => start + i);
};

const getSsgArticlesPaths = async (): Promise<SSGArticlesPaths> => {
  const ARTICLES_PARAMS: MicroCMSParams = { fields: 'id' };

  const { totalCount } = await getSsgRouteParams(
    ARTICLE_URL,
    MICRO_CMS,
    ARTICLES_PARAMS
  );

  const pagePaths = range(1, Math.ceil(totalCount / POSTS_PER_PAGE)).map((page) => ({
    page: page.toString()
  }));

  return pagePaths;
};

const getSsgArticlePaths = async (): Promise<SSGArticlePaths> => {
  const ARTICLE_PARAMS = (offset: number = 0): MicroCMSParams => ({
    fields: 'id',
    offset: offset,
    limit: POSTS_PER_PAGE
  });

  const { contents, totalCount } = await getSsgRouteParams(
    ARTICLE_URL,
    MICRO_CMS,
    ARTICLE_PARAMS(0)
  );

  while (contents.length < totalCount) {
    // 2回目以降の取得
    const { contents: additionalContents } = await getSsgRouteParams(
      ARTICLE_URL,
      MICRO_CMS,
      ARTICLE_PARAMS(contents.length)
    );
    contents.push(...additionalContents);
  }

  const ArticlesPaths = contents.map(({ id }) => ({ id: id }));

  return ArticlesPaths;
};

const badgePathParams = (filters: string, id: string): MicroCMSParams => ({
  fields: 'id',
  filters: `${filters}${id}`
});

/**
 * カテゴリー、タグの共通取得設定
 */
const getSsgTagPaths = async (): Promise<SSGTagPaths> => {
  // タグのルーティング
  const { contents: tags } = await getSsgRouteParams(
    TAG_URL,
    MICRO_CMS,
    CLASSIFICATION_PARAMS
  );

  // 該当のタグを含む記事一覧
  const tagContainsArticlePaths = await Promise.all(
    tags.map(async (tag) => {
      const { totalCount } = await getSsgRouteParams(
        ARTICLE_URL,
        MICRO_CMS,
        badgePathParams('tags[contains]', tag.id)
      );

      return range(1, Math.ceil(totalCount / POSTS_PER_PAGE)).map((page) => ({
        id: tag.id,
        page: page.toString()
      }));
    })
  );

  const flattenTagsPages = tagContainsArticlePaths.flat(ARTICLE_DEPTH);

  return flattenTagsPages;
};

const getSsgCategoryPaths = async (): Promise<SSGCategoryPaths> => {
  // カテゴリーの個別ページのルーティング
  const { contents: categories } = await getSsgRouteParams(
    CATEGORY_URL,
    MICRO_CMS,
    CLASSIFICATION_PARAMS
  );

  const categoryEqualsArticlePaths = await Promise.all(
    categories.map(async (category) => {
      const { totalCount } = await getSsgRouteParams(
        ARTICLE_URL,
        MICRO_CMS,
        badgePathParams('category[equals]', category.id)
      );

      return range(1, Math.ceil(totalCount / POSTS_PER_PAGE)).map((page) => ({
        id: category.id,
        page: page.toString()
      }));
    })
  );

  const flattenCategoriesPages = categoryEqualsArticlePaths.flat(ARTICLE_DEPTH);

  return flattenCategoriesPages;
};

export {
  getSsgArticlesPaths,
  getSsgArticlePaths,
  getSsgTagPaths,
  getSsgCategoryPaths
};
