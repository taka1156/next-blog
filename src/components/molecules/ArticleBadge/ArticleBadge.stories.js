import ArticleBadge from './ArticleBadge.tsx';
import { dummyCategoryBadge, dummyTagBadge } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/ArticleBadge',
  component: ArticleBadge
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleBadge },
  template: '<article-badge v-bind="$props" />'
});

export default config;

export const CategoryBadge = Template.bind({});
CategoryBadge.args = dummyCategoryBadge;

export const TagBadge = Template.bind({});
TagBadge.args = dummyTagBadge;
