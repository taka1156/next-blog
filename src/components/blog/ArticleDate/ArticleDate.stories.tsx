import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleDate } from './ArticleDate';
import { dummyArticles } from '@/dummy';

const meta: Meta<typeof ArticleDate> = {
  component: ArticleDate
};

export default meta;

type Story = StoryObj<typeof ArticleDate>;

export const Basic: Story = {
  args: {
    createdAt: dummyArticles[0].created_at,
    updatedAt: dummyArticles[0].updated_at
  },
  render: (args) => <ArticleDate {...args} />
};
