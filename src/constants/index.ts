const LOGO_TEXT = 'TakaTechBlog';
const ROUTES: RouteItems = [
  {
    name: 'Top',
    to: '/',
    img: '/img/ui/home.svg',
  },
  {
    name: 'Category',
    to: '/categories/',
    img: '/img/ui/category.svg',
  },
  {
    name: 'Tag',
    to: '/tags/',
    img: '/img/ui/tag.svg',
  },
  {
    name: 'Profile',
    to: '/profile/',
    img: '/img/ui/profile.svg',
  },
];
const COPYRIGHT_URL = 'https://policy.taka1156.site/';

const SNS_ICONS: BlogSnsIcons = [
  {
    name: 'GitHub',
    img: '/img/github-logo.png',
    link: 'https://github.com/taka1156',
  },
  {
    name: 'Qiita',
    img: '/img/qiita-logo.png',
    link: 'https://qiita.com/taka_1156',
  },
  {
    name: 'Twitter',
    img: '/img/twitter-logo.png',
    link: 'https://twitter.com/taka_1156',
  },
  {
    name: 'Portfolio',
    img: '/img/prof.png',
    link: 'https://www.taka1156.site',
  },
];

const PROFILE: BlogProfile = {
  img: '/img/prof.png',
  introduce:
    'プログラミングは、大学1年から触り始めC、Java、Python3などを学びました。現在は、TypeScriptやPHP(+Laravelについて学習しています。',
};

const GITHUB_CONTRIBUTION_IMG: CommonImg = {
  imgUrl: 'https://ghchart.rshah.org/taka1156',
  imgAlt: "taka1156's Github chart",
};

const GITHUB_STATUS: BlogGitHubStatus = {
  statusUrl:
    'https://github-readme-stats.vercel.app/api?username=taka1156&count_private=true&show_icons=true&hide_border=true&bg_color=white',
  usedLangUrl:
    'https://github-readme-stats.vercel.app/api/top-langs/?username=taka1156&layout=compact&hide_border=true&bg_color=white',
  imgAlt: 'github status',
};

export {
  LOGO_TEXT,
  ROUTES,
  COPYRIGHT_URL,
  SNS_ICONS,
  PROFILE,
  GITHUB_CONTRIBUTION_IMG,
  GITHUB_STATUS,
};
