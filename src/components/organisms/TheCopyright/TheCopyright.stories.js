import TheCopyright from './TheCopyright.tsx';
import { dummyCopyrightUrl } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/TheCopyright',
  component: TheCopyright
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheCopyright },
  template: '<the-copyright v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
Default.args = { copyrightUrl: dummyCopyrightUrl };
