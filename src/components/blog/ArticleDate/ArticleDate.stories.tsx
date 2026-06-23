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
    createdAt: dummyArticles[0].createdAt,
    updatedAt: dummyArticles[0].updatedAt
  },
  render: (args) => <ArticleDate {...args} />
};
