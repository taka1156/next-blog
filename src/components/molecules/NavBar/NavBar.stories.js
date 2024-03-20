import NavBar from './NavBar.tsx';
import { dummyLogo } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/NavBar',
  component: NavBar
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavBar },
  template: '<nav-bar v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { isOpen: false, logoText: dummyLogo };
