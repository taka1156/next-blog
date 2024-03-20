import ArticleBody from './ArticleBody.tsx';
import { dummyArticles } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ArticleBody',
  component: ArticleBody
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleBody },
  template: '<article-body v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { article: dummyArticles[0] };
