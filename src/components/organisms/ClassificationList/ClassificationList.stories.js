import ClassificationList from './ClassificationList.tsx';
import {
  dummyClassificationTag,
  dummyClassificationCategory
} from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ClassificationList',
  component: ClassificationList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationList },
  template: '<classification-list v-bind="$props" />'
});

export default config;

export const Categories = Template.bind({});
Categories.args = dummyClassificationCategory;

export const Tags = Template.bind({});
Tags.args = dummyClassificationTag;
