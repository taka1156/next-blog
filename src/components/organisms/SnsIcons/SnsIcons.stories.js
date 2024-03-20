import SnsIcons from './SnsIcons.tsx';
import { dummySnsIcons } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/SnsIcons',
  component: SnsIcons
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SnsIcons },
  template: '<sns-icons v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { snsIcons: dummySnsIcons };
