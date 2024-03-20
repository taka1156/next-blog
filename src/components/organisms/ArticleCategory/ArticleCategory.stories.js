import ArticleCategory from './ArticleCategory.tsx';
import { dummyCategoryBadge } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ArticleCategory',
  component: ArticleCategory
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleCategory },
  template: '<article-category v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { category: dummyCategoryBadge.badge };
