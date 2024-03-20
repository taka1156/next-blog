import ClassificationListItem from './ClassificationListItem.tsx';
import {
  dummyClassificationTag,
  dummyClassificationCategory
} from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ClassificationListItem',
  component: ClassificationListItem
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationListItem },
  template: '<classification-list-item v-bind="$props" />'
});

export default config;

export const Category = Template.bind({});
Category.args = {
  item: dummyClassificationCategory.items[0],
  routePath: dummyClassificationCategory.routePath
};

export const Tag = Template.bind({});
Tag.args = {
  item: dummyClassificationTag.items[0],
  routePath: dummyClassificationTag.routePath
};
