import { ArticlePagination } from './ArticlePagination';
import { dummyPagination } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/ArticlePagination',
  component: ArticlePagination
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticlePagination },
  template: '<article-pagination v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = dummyPagination;
