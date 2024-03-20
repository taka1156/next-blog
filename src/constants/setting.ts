const BADGES_MAX = 20; // タグとカテゴリーの最大数
const POSTS_PER_PAGE = 5; // １ページあたりの記事数
const BASE_URL = process.env.BASE_URL || '';
const MICRO_CMS = process.env.MICRO_CMS || '';
const ARTICLE_URL = process.env.ARTICLE_URL || '';
const TAG_URL = process.env.TAG_URL || '';
const CATEGORY_URL = process.env.CATEGORY_URL || '';

export {
  BASE_URL,
  BADGES_MAX,
  POSTS_PER_PAGE,
  ARTICLE_URL,
  MICRO_CMS,
  TAG_URL,
  CATEGORY_URL
};
