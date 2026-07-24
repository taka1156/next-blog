import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleCategory } from './ArticleCategory';
import { dummyCategoryBadge } from '@/dummy';

const meta: Meta<typeof ArticleCategory> = {
  component: ArticleCategory
};

export default meta;

type Story = StoryObj<typeof ArticleCategory>;

export const Basic: Story = {
  args: {
    category: dummyCategoryBadge
  },
  render: (args) => <ArticleCategory {...args} />
};
