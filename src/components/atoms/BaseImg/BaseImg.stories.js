import BaseImg from './BaseImg.tsx';
import { dummyImg } from '@/__testdata__/testdata.js';

const config = {
  title: 'Atoms/BaseImg',
  component: BaseImg
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImg },
  template: '<base-img v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { ...dummyImg, size: 'sm' };
