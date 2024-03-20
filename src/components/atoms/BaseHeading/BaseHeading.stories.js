import BaseHeading from './BaseHeading.tsx';

const config = {
  title: 'atoms/BaseHeading',
  component: BaseHeading
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseHeading },
  template: '<base-heading v-bind="$props">ダミーテキスト</base-heading>'
});

export default config;

export const Default = Template.bind({});
Default.args = { hLv: '1' };
