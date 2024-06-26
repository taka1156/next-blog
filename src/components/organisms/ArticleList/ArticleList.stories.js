import ArticleList from './ArticleList.tsx';
import { dummyArticles, dummyPagination } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ArticleList',
  component: ArticleList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleList },
  template: '<article-list v-bind="$props" />'
});

export default config;

export const Page = Template.bind({});
Page.args = {
  articles: dummyArticles.slice(0, 5),
  maxPage: dummyPagination.maxPage,
  routePath: 'page-page'
};

export const Tag = Template.bind({});
Tag.args = {
  articles: dummyArticles.slice(0, 5),
  maxPage: dummyPagination.maxPage,
  routePath: 'tag-id-page'
};

export const Category = Template.bind({});
Category.args = {
  articles: dummyArticles.slice(0, 5),
  maxPage: dummyPagination.maxPage,
  routePath: 'category-id-page'
};
