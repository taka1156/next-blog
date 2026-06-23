import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BaseNavIcon } from './BaseNavIcon';

const meta: Meta<typeof BaseNavIcon> = {
  component: BaseNavIcon,
  parameters: {
    backgrounds: { default: 'dark' }
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' }
    },
    children: {
      control: { type: 'text' }
    },
    onClick: { action: 'clicked' }
  }
};

export default meta;

type Story = StoryObj<typeof BaseNavIcon>;

export const Basic: Story = {
  args: {
    isOpen: false,
    children: 'Menu'
  },
  render: (args) => <BaseNavIcon {...args}>{args.children}</BaseNavIcon>
};
