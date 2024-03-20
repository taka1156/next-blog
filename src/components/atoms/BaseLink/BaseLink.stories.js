import BaseLink from './BaseLink.tsx';

const config = {
  title: 'Atoms/BaseLink',
  component: BaseLink
};

const Template = () => ({
  components: { BaseLink },
  template: '<base-link :routeTo="`/`">Text</base-link>'
});

export default config;

export const Default = Template.bind({});
