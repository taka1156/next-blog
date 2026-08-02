const R2_URL = process.env.R2_URL || 'http://localhost:9000';
const BUCKET = process.env.R2_BUCKET || 'cms';

const CONTENT_PATHS = {
  blog: 'blog/contents',
  portfolio: 'portfolio/contents'
} as const;

const JSON_PATTERN = {
  all: 'all.json',
  category: 'category.json',
  tag: 'tag.json'
} as const;

const getArticle = async <T>(
  contentType: keyof typeof CONTENT_PATHS,
  jsonKey: keyof typeof JSON_PATTERN
): Promise<T | undefined> => {
  const url = `${R2_URL}/${BUCKET}/${CONTENT_PATHS[contentType]}/${JSON_PATTERN[jsonKey]}`;

  try {
    const res = await fetch(url, {
      cache: 'force-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return JSON.parse(await res.text()) as T;
  } catch {
    return undefined;
  }
};

type classification = 'category' | 'tag';

export const getArticleBySlug = async (
  contentType: keyof typeof CONTENT_PATHS,
  slug: string
): Promise<ArticleElement> => {
  const articles = await getArticles(contentType);
  const filteredArticles = articles.filter(
    (article) => article.summary.slug === slug
  );
  return filteredArticles[0];
};

export const getArticles = async (
  contentType: keyof typeof CONTENT_PATHS
): Promise<ArticleElement[]> => {
  const data = await getArticle<{ all: ArticleElement[] }>(contentType, 'all');
  return data?.all ?? [];
};

export const getClassification = async (
  contentType: keyof typeof CONTENT_PATHS,
  jsonKey: classification
): Promise<ArticleClassified[]> => {
  const data = await getArticle<ArticleClassified[]>(contentType, jsonKey);
  return data ?? [];
};
