import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleBadge } from './ArticleBadge';
import { dummyArticles, dummyCategoryBadge, dummyTagBadge } from '@/dummy';

const meta: Meta<typeof ArticleBadge> = {
  component: ArticleBadge
};

export default meta;

type Story = StoryObj<typeof ArticleBadge>;

export const Category: Story = {
  args: {
    badgeType: 'category',
    routePath: 'category',
    badge: { name: dummyCategoryBadge.badge }
  },
  render: (args) => <ArticleBadge {...args} />
};

export const Tag: Story = {
  args: {
    badgeType: 'tag',
    routePath: 'tag',
    badge: { name: dummyTagBadge.badge }
  },
  render: (args) => <ArticleBadge {...args} />
};
