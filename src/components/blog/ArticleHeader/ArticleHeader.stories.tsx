import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleHeader } from './ArticleHeader';
import { dummyArticles } from '@/dummy';

const meta: Meta<typeof ArticleHeader> = {
  component: ArticleHeader
};

export default meta;

type Story = StoryObj<typeof ArticleHeader>;

export const Basic: Story = {
  args: {
    summary: dummyArticles[0]
  },
  render: (args) => <ArticleHeader {...args} />
};
