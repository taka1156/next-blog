import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TheNavigation } from './TheNavigation';
import { ROUTES } from '@/constants';

const meta: Meta<typeof TheNavigation> = {
  component: TheNavigation
};

export default meta;

type Story = StoryObj<typeof TheNavigation>;

export const Basic: Story = {
  args: {
    logoText: 'Navigation',
    routes: ROUTES
  },
  render: (args) => <TheNavigation {...args} />
};
