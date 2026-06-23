import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleBody } from './ArticleBody';
import { dummyArticles } from '@/dummy';

const meta: Meta<typeof ArticleBody> = {
  component: ArticleBody
};

export default meta;

type Story = StoryObj<typeof ArticleBody>;

export const Basic: Story = {
  args: {
    article: dummyArticles[0]
  },
  render: (args) => <ArticleBody {...args} />
};
