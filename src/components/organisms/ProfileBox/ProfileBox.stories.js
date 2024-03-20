import ProfileBox from './ProfileBox.tsx';
import { dummyProfile } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/ProfileBox ',
  component: ProfileBox
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProfileBox },
  template: '<profile-box  v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { profile: dummyProfile };
