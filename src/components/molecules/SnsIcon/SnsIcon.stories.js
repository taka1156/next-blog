import SnsIcon from './SnsIcon.tsx';
import { dummySnsIcons } from '@/__testdata__/testdata.js';

const config = {
  title: 'Molecules/SnsIcon',
  component: SnsIcon
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SnsIcon },
  template: '<sns-icon v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { sns: dummySnsIcons[0] };
