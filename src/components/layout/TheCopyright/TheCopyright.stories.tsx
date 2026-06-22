import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TheCopyright } from './TheCopyright';
import { COPYRIGHT_URL } from '@/constants';

const meta: Meta<typeof TheCopyright> = {
  component: TheCopyright
};

export default meta;

type Story = StoryObj<typeof TheCopyright>;

export const Basic: Story = {
  args: {
    copyrightUrl: COPYRIGHT_URL
  },
  render: (args) => <TheCopyright {...args} />
};
