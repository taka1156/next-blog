import ArticleHeader from './ArticleHeader.tsx';
import { dummyArticles } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ArticleHeader',
  component: ArticleHeader
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleHeader },
  template: '<article-header v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});

Default.args = { article: dummyArticles[0] };
