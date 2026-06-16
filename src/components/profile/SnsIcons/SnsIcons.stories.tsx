import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SnsIcons } from './SnsIcons';
import { SNS_ICONS } from '@/constants';

const meta: Meta<typeof SnsIcons> = {
  component: SnsIcons
};

export default meta;

type Story = StoryObj<typeof SnsIcons>;

export const Basic: Story = {
  args: {
    snsIcons: SNS_ICONS
  },
  render: (args) => <SnsIcons {...args} />
};
