type ArticlePath = {
  id: string;
};
type SSGArticlePaths = ArticlePath[];

type ArticlesPath = {
  page: string;
};

type SSGArticlesPaths = ArticlesPath[];

type BadgePath = {
  id: string;
  page: string;
};

type TagPath = BadgePath;
type SSGTagPaths = TagPath[];

type CategoryPath = BadgePath;
type SSGCategoryPaths = CategoryPath[];

type ContentsPayload = {
  contents: CommonArticles;
  totalCount: number;
  offset: number;
  limit: number;
};

type MicroCMSParams = {
  fields: string;
  filters?: string;
  offset?: number;
  limit?: number;
};
