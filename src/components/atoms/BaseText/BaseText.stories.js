import BaseText from './BaseText.tsx';

const config = {
  title: 'Atoms/BaseText',
  component: BaseText,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
};

const Template = () => ({
  components: { BaseText },
  template: '<base-text>Text</base-text>'
});

export default config;

export const Default = Template.bind({});
