import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ClassificationList } from './ClassificationList';
import { dummyClassificationTag, dummyClassificationCategory } from '@/dummy';

const meta: Meta<typeof ClassificationList> = {
  component: ClassificationList
};

export default meta;

type Story = StoryObj<typeof ClassificationList>;

export const Categories: Story = {
  args: {
    items: dummyClassificationCategory.items,
    routePath: dummyClassificationCategory.routePath as 'category'
  },
  render: (args) => <ClassificationList {...args} />
};

export const Tags: Story = {
  args: {
    items: dummyClassificationTag.items,
    routePath: dummyClassificationTag.routePath as 'tag'
  },
  render: (args) => <ClassificationList {...args} />
};
