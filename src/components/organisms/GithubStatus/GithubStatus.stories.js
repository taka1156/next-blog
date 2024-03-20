import GithubStatus from './GithubStatus.tsx';
import { dummyImg } from '@/__testdata__/testdata.js';

const config = {
  title: 'Organisms/GithubStatus',
  component: GithubStatus
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GithubStatus },
  template: '<github-status v-bind="$props" />'
});

export default config;

export const Default = Template.bind({});
const { imgUrl, imgAlt } = dummyImg;
Default.args = {
  statusUrl: imgUrl,
  usedLangUrl: imgUrl,
  imgAlt
};
