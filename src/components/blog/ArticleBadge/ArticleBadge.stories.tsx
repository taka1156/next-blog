import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleBadge } from './ArticleBadge';
import { dummyCategoryBadge, dummyTagBadge } from '@/dummy';

const meta: Meta<typeof ArticleBadge> = {
  component: ArticleBadge
};

export default meta;

type Story = StoryObj<typeof ArticleBadge>;

export const Category: Story = {
  args: {
    badgeType: 'category',
    badge: dummyCategoryBadge
  },
  render: (args) => <ArticleBadge {...args} />
};

export const Tag: Story = {
  args: {
    badgeType: 'tag',
    badge: dummyTagBadge
  },
  render: (args) => <ArticleBadge {...args} />
};
