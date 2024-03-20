import NavListItemPc from './NavListItemPc.tsx';
import { dummyRoutes } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/NavListItemPc',
  component: NavListItemPc,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavListItemPc },
  template: '<nav-list-item-pc v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { navItem: dummyRoutes[0] };
