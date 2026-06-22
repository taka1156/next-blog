import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BaseImg } from './BaseImg';

const meta: Meta<typeof BaseImg> = {
  component: BaseImg
};

export default meta;

type Story = StoryObj<typeof BaseImg>;

export const Basic: Story = {
  args: {
    src: 'https://placehold.jp/150x150.png',
    alt: 'Sample Image'
  },
  render: (args) => <BaseImg {...args} />
};
