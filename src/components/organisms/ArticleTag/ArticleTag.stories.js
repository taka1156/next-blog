import ArticleTag from './ArticleTag.tsx';
import { dummyTagBadges } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ArticleTag',
  component: ArticleTag
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleTag },
  template: '<article-tag v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { tags: dummyTagBadges };
