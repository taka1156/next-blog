import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IndexNavigation } from './IndexNavigation';
import { dummyTocs } from '@/dummy';

const meta: Meta<typeof IndexNavigation> = {
  component: IndexNavigation
};

export default meta;

type Story = StoryObj<typeof IndexNavigation>;

export const Basic: Story = {
  args: {
    tocs: dummyTocs
  },
  render: (args) => <IndexNavigation {...args} />
};
