import NavListItem from './NavListItem.tsx';
import { dummyRoutes } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/NavListItem',
  component: NavListItem,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavListItem },
  template: '<nav-list-item v-bind="$props" />',
});

export default config;

export const Default = Template.bind({});
Default.args = { navItem: dummyRoutes[0] };
