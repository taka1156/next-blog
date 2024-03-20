import NavList from './NavList.tsx';
import { dummyRoutes } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/NavList',
  component: NavList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavList },
  template: '<nav-list v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { isOpen: false, routes: dummyRoutes };
