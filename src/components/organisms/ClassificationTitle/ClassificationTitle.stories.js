import ClassificationTitle from './ClassificationTitle.tsx';
import {
  dummyClassificationTag,
  dummyClassificationCategory
} from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ClassificationTitle',
  component: ClassificationTitle
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationTitle },
  template:
    '<classification-title v-bind="$props">ダミー : ダミータグ</classification-title>'
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationTitle },
  template:
    '<classification-title v-bind="$props">ダミー : ダミーカテゴリー</classification-title>'
});

export default config;

export const Tag = Template1.bind({});
Tag.args = {
  imgUrl: dummyClassificationTag.items[0].img.url
};

export const Category = Template2.bind({});
Category.args = {
  imgUrl: dummyClassificationCategory.items[0].img.url
};
