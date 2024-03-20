import ArticleListItem from './ArticleListItem.tsx';
import { dummyArticles } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ArticleListItem',
  component: ArticleListItem
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleListItem },
  template: '<article-list-item v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { article: dummyArticles[0] };
