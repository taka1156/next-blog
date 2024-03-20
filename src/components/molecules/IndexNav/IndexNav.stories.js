import IndexNav from './IndexNav.tsx';

const config = {
  title: 'Molecules/IndexNav',
  component: IndexNav
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexNav },
  template: '<index-nav v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { isOpen: false };
