import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProfileBox } from './ProfileBox';
import { PROFILE } from '@/constants';

const meta: Meta<typeof ProfileBox> = {
  component: ProfileBox
};

export default meta;

type Story = StoryObj<typeof ProfileBox>;

export const Basic: Story = {
  args: {
    profile: PROFILE
  },
  render: (args) => <ProfileBox {...args} />
};
