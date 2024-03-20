type BlogSnsIcon = {
  name: string;
  img: string;
  link: string;
};

type BlogSnsIcons = BlogSnsIcon[];

type GetArticles = {
  contents: CommonArticles;
  totalCount: number;
};

type BlogProfile = {
  img: string;
  introduce: string;
};

type BlogGitHubStatus = {
  statusUrl: string;
  usedLangUrl: string;
  imgAlt: string;
};

type RouteItem = {
  name: string;
  to: string;
  img: string;
};

type RouteItems = RouteItem[];

type TocItem = {
  index: number;
  anchor: string;
  escapedText: string;
};

type TocItems = TocItem[];

type CommonImg = {
  imgUrl: string;
  imgAlt: string;
};

type CommonBadge = {
  id: string;
  name: string;
  img: {
    url: string;
  };
};

type CommonBadges = CommonBadge[];

type CommonArticle = {
  id: string;
  title: string;
  summary: string;
  category: CommonBadge;
  tags: CommonBadges;
  body: string;
  related_blogs: CommonRelatedArticles;
  createdAt: string;
  updatedAt: string;
};

type CommonArticles = CommonArticle[];

type CommonClassificationItem = {
  id: string;
  name: string;
  img: {
    url: string;
  };
};

type CommonClassificationItems = CommonClassificationItem[];

type CommonRelatedArticles = CommonArticles;
