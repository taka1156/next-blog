import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ClassificationList } from './ClassificationList';
import { dummyClassificationTag, dummyClassificationCategory } from '@/dummy';

const meta: Meta<typeof ClassificationList> = {
  component: ClassificationList
};

export default meta;

type Story = StoryObj<typeof ClassificationList>;

export const categories: Story = {
  args: {
    items: dummyClassificationCategory.items,
    routePath: dummyClassificationCategory.routePath
  },
  render: (args) => <ClassificationList {...args} />
};

export const tags: Story = {
  args: {
    items: dummyClassificationTag.items,
    routePath: dummyClassificationTag.routePath
  },
  render: (args) => <ClassificationList {...args} />
};
