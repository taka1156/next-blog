import IndexList from './IndexList.tsx';
import { dummyTocs } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/IndexList',
  component: IndexList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexList },
  template: '<index-list v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { isOpen: false, tocs: dummyTocs };
