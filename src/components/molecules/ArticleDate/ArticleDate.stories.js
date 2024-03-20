import ArticleDate from './ArticleDate.tsx';
import { dummyDate } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/ArticleDate',
  component: ArticleDate,
  argTypes: {
    createdAt: {
      control: 'date'
    },
    updatedAt: {
      control: 'date'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleDate },
  template: '<article-date v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { ...dummyDate };
