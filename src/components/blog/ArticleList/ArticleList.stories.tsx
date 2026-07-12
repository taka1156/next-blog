import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleList } from './ArticleList';
import { dummyArticles } from '@/dummy';
import '@/app/layout.css';

const meta: Meta<typeof ArticleList> = {
  component: ArticleList
};

export default meta;

type Story = StoryObj<typeof ArticleList>;

export const Basic: Story = {
  args: {
    summaries: dummyArticles.slice(0, 5)
  },
  render: (args) => <ArticleList {...args} />
};
