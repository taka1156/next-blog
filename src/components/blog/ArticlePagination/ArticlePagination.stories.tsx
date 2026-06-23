import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticlePagination } from './ArticlePagination';
import { dummyPagination } from '@/dummy';

const meta: Meta<typeof ArticlePagination> = {
  component: ArticlePagination
};

export default meta;

type Story = StoryObj<typeof ArticlePagination>;

export const Basic: Story = {
  args: {
    routePath: dummyPagination.routePath,
    prevIndex: dummyPagination.prevIndex,
    nextIndex: dummyPagination.nextIndex,
    currentPage: dummyPagination.currentPage,
    maxPage: dummyPagination.maxPage
  },
  render: (args) => <ArticlePagination {...args} />
};
