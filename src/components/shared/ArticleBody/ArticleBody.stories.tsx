import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleBody } from './ArticleBody';
import { dummyMarkdown } from '@/dummy';

const meta: Meta<typeof ArticleBody> = {
  component: ArticleBody
};

export default meta;

type Story = StoryObj<typeof ArticleBody>;

export const Basic: Story = {
  args: {
    body: dummyMarkdown
  },
  render: (args) => <ArticleBody {...args} />
};
