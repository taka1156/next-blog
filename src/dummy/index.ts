const dummyImgUrl = 'https://placehold.jp/150x150.png';
const dummyUrl = 'https://placehold.jp';
const dummyCopyrightUrl = 'http://placehold.jp';
const dummyDay = '2023-12-31';
const MAX_NAV_DATA = 4;
const MAX_ICONS_DATA = 4;
const MAX_ARTICLE_DATA = 10;
const MAX_BADGE_DATA = 5;
const MAX_TOC_DATA = 5;

const dummyOutsideLink = { routeTo: dummyUrl };
const dummyRouteStr = { routeTo: '/' };
const dummyRouteObj = {
  routeTo: {
    name: 'sample-id',
    params: { id: 1 }
  }
};

// factory
const dummyFactory = <T>(num: number, fn: (id: number) => T) => {
  return [...new Array(num)].map((_, i) => fn(i + 1));
};

// template
const dummyNavTemplate = (i: number): RouteItem => ({
  name: `ダミー${i}`,
  href: '/test1',
  img: dummyImgUrl
});

// NOTE: 循環参照対策で、内部記事(posts)に付与するtagsは引数で受け取れるようにする。
// 未指定時は空配列にすることで、badgeテンプレート内部で
// dummyTagBadges を再帰的に参照してしまう自己参照ループを断ち切っている。
// tagsの型はArticleSummary.tagsの型(ArticleClassified[])と一致させる。
// dummyFactoryBadgeの戻り値({routePath, image, name})とは別物なので注意。
//
// さらに、badge -> posts(article) -> category(badge) -> posts(article) -> ...
// という構造自体に終端条件がなく無限再帰になるため、depthで深さを制限する。
// MAX_NEST_DEPTHに達したら posts は空配列にしてそこで再帰を打ち切る。
const MAX_NEST_DEPTH = 1;

const dummyBadgeTemplate = (
  name: string,
  tags: ArticleClassified[] = [],
  depth = 0
) => ({
  name: name,
  image: dummyImgUrl,
  posts:
    depth >= MAX_NEST_DEPTH
      ? []
      : dummyFactory(MAX_ARTICLE_DATA, (i: number) =>
          dummyArticleTemplate(`${name}-${i}`, tags, depth + 1)
        )
});

const dummyClassificationTemplate = (
  id: number,
  name: string
): CommonClassificationItem => ({
  name: name,
  image: dummyImgUrl,
  posts: dummyFactory(MAX_ARTICLE_DATA, (i: number) =>
    dummyArticleTemplate(`${id}-${i}`)
  )
});

const dummyTocTemplate = (i: number) => ({
  index: i,
  escapedText: 'この文章はダミーです。',
  anchor: `anchor_${i}`
});

const dummyMarkdown = `
## この文章はダミーです。 1
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 2
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 3
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。 4
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。 5
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。 6
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 7
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 8
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。 9
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。 10
  **文字の大きさ、量、字間、行間等を確認するために入れています。**

**aaa**

**bbb**

:: どんどん共有しましょう
*プログラミングに関することをどんどん投稿して、*
**知識を記録、共有しましょう。**
_プログラミングに関することをどんどん投稿して、_
~~知識を記録、共有しましょう。~~
::


## marked.js拡張構文

:: spoiler word
  **aaa**
::

:: point ポイント
  ポイント
::

:: info 情報
  インフォメーション
::

:: warn 注意
  〇〇に注意
::

:: alert 警告
  〇〇に警告
::

`;

// NOTE: tagsを引数化。未指定時は空配列（dummyTagBadges初期化前でも安全に呼べる）。
// depthはdummyBadgeTemplateと共有し、再帰の深さを制限するために使う。
const dummyArticleTemplate = (
  i: string,
  tags: ArticleClassified[] = [],
  depth = 0
): ArticleSummary => ({
  ...dummyDate,
  slug: `dummy-article-${i}`,
  title:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
  thumbnail: dummyImgUrl,
  description:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
  tags,
  category: dummyBadgeTemplate('ダミーカテゴリ', [], depth)
  // related_blogs: [
  //   {
  //     id: `${i}-1`,
  //     title: 'ダミー記事1',
  //     summary: 'ダミー記事1の概要',
  //     body: '',
  //     tags: dummyTagBadges,
  //     category: dummyBadgeTemplate(1, 'カテゴリー'),
  //     ...dummyDate,
  //     related_blogs: []
  //   },
  //   {
  //     id: `${i}-2`,
  //     title: 'ダミー記事2',
  //     summary: 'ダミー記事2の概要',
  //     body: dummyMarkdown,
  //     tags: dummyTagBadges,
  //     category: dummyBadgeTemplate(1, 'カテゴリー'),
  //     ...dummyDate,
  //     related_blogs: []
  //   }
  // ]
});

const dummySnsIconTemplate = (i: number) => ({
  name: `ダミー${i}`,
  img: dummyImgUrl,
  link: dummyUrl
});

// dummyDate
const dummyImg = {
  imgUrl: dummyImgUrl,
  imgAlt: 'ダミーの画像'
};

const dummyDate = {
  created_at: '2020-07-04T10:53:40.252Z',
  updated_at: '2020-07-08T15:15:07.668Z'
};

const dummyRoutes = dummyFactory(MAX_NAV_DATA, (i: number) => dummyNavTemplate(i));

// NOTE: この時点ではdummyTagBadgesはまだ存在しない（後段で定義される）ため、
// badge/article生成時には空配列を渡し、自己参照を防いでいる。
const dummyTagBadges = dummyFactory(MAX_BADGE_DATA, (i: number) =>
  dummyBadgeTemplate(`タグ${i}`)
);

const dummyClassificationFactory = (
  items: CommonClassificationItems,
  routePath: string
) => {
  const tmp = items;
  return {
    items: tmp,
    routePath: routePath
  };
};

const dummyClassificationCategory = dummyClassificationFactory(
  dummyFactory(MAX_BADGE_DATA, (id: number) =>
    dummyClassificationTemplate(id, `カテゴリー${id}`)
  ),
  'category'
);

const dummyClassificationTag = dummyClassificationFactory(
  dummyFactory(MAX_BADGE_DATA, (id: number) =>
    dummyClassificationTemplate(id, `タグ${id}`)
  ),
  'tag'
);

// NOTE: dummyTagBadgesが初期化済みのここで初めて実際のtagsを渡す。
const dummyArticles = dummyFactory(MAX_ARTICLE_DATA, (id: number) =>
  dummyArticleTemplate(`${id}`, dummyTagBadges)
);

const dummyFactoryBadge = (name: string, routePath: string) => {
  const tmp = dummyBadgeTemplate(name);
  return {
    routePath: routePath,
    image: tmp.image,
    name: tmp.name
  };
};

const dummyCategoryBadge = dummyFactoryBadge('カテゴリー', 'category-id');

const dummyTagBadge = dummyFactoryBadge('タグ', 'tag-id');

const dummyPagination = {
  currentPage: 1,
  maxPage: Math.ceil(dummyArticles.length / 5),
  routePath: 'page-pageid',
  prevIndex: 2,
  nextIndex: 2
};

const dummyTocs = dummyFactory(MAX_TOC_DATA, (i: number) => dummyTocTemplate(i));

const dummyLogo = 'ダミーロゴ';

const dummySnsIcons = dummyFactory(MAX_ICONS_DATA, (i: number) =>
  dummySnsIconTemplate(i)
);

const dummyProfile = {
  img: dummyImgUrl,
  introduce:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'
};

export {
  dummyUrl,
  dummyImgUrl,
  dummyOutsideLink,
  dummyRouteStr,
  dummyRouteObj,
  dummyImg,
  dummyCategoryBadge,
  dummyTagBadge,
  dummyTagBadges,
  dummyDate,
  dummyArticles,
  dummyPagination,
  dummyClassificationCategory,
  dummyClassificationTag,
  dummyLogo,
  dummyTocs,
  dummyRoutes,
  dummyCopyrightUrl,
  dummyDay,
  dummySnsIcons,
  dummyProfile,
  dummyMarkdown
};
