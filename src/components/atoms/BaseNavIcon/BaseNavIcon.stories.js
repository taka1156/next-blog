import BaseNavIcon from './BaseNavIcon.tsx';

const config = {
  title: 'Atoms/BaseNavIcon',
  component: BaseNavIcon,
  argTypes: {
    btnClick: { action: 'clicked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseNavIcon },
  template:
    '<base-nav-icon v-bind="$props" @btn-click="btnClick">text</base-nav-icon>'
});

export default config;

export const Default = Template.bind({});
Default.args = { isOpen: false };
