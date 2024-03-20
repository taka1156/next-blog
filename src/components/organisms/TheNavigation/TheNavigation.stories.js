import TheNavigation from './TheNavigation.tsx';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/TheNavigation',
  component: TheNavigation
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheNavigation },
  template: '<the-navigation v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = {
  logoText: dummyLogo,
  routes: dummyRoutes
};
