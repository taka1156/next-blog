import IndexListItem from './IndexListItem.tsx';
import { dummyTocs } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/IndexListItem',
  component: IndexListItem,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexListItem },
  template: '<index-list-item v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { t: dummyTocs[0] };
