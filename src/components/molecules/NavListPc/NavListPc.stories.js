import NavListPc from './NavListPc.tsx';
import { dummyRoutes } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/NavListPc',
  component: NavListPc,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavListPc },
  template: '<nav-list-pc v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { routes: dummyRoutes };
