import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleTag } from './ArticleTag';
import { dummyTagBadges } from '@/dummy';

const meta: Meta<typeof ArticleTag> = {
  component: ArticleTag
};

export default meta;

type Story = StoryObj<typeof ArticleTag>;

export const Basic: Story = {
  args: {
    tags: dummyTagBadges
  },
  render: (args) => <ArticleTag {...args} />
};
