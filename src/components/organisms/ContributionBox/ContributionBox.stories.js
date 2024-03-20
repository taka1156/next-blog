import ContributionBox from './ContributionBox.tsx';
import { dummyImg } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ContributionBox',
  component: ContributionBox
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ContributionBox },
  template: '<contribution-box v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = dummyImg;
