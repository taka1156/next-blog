import IndexNavigation from './IndexNavigation.tsx';
import { dummyTocs } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/IndexNavigation',
  component: IndexNavigation
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexNavigation },
  template: '<index-navigation v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = {
  tocs: dummyTocs
};
