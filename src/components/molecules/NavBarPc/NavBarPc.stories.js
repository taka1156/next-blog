import NavBarPc from './NavBarPc.tsx';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/NavBarPc',
  component: NavBarPc
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavBarPc },
  template: '<nav-bar-pc v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { logoText: dummyLogo, routes: dummyRoutes };
