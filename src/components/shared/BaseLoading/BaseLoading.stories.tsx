import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BaseLoading } from './BaseLoading';

const meta: Meta<typeof BaseLoading> = {
  component: BaseLoading
};

export default meta;

type Story = StoryObj<typeof BaseLoading>;

export const Basic: Story = {
  render: () => <BaseLoading />
};
