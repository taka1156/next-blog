import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BaseLink } from './BaseLink';

const meta: Meta<typeof BaseLink> = {
  component: BaseLink
};

export default meta;

type Story = StoryObj<typeof BaseLink>;

export const Basic: Story = {
  args: {
    href: '/internal-link',
    children: 'link'
  },
  render: (args) => <BaseLink {...args} />
};

export const withExternal: Story = {
  args: {
    href: 'https://example.com',
    children: 'link',
    enableNewTab: true
  },
  render: (args) => <BaseLink {...args} />
};
