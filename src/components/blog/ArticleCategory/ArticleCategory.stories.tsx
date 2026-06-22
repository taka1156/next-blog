import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleCategory } from './ArticleCategory';
import { dummyArticles } from '@/dummy';

const meta: Meta<typeof ArticleCategory> = {
  component: ArticleCategory
};

export default meta;

type Story = StoryObj<typeof ArticleCategory>;

export const Basic: Story = {
  args: {
    category: dummyArticles[0].category
  },
  render: (args) => <ArticleCategory {...args} />
};
