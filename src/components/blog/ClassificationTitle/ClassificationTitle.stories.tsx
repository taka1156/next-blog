import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ClassificationTitle } from './ClassificationTitle';
import { dummyClassificationCategory, dummyClassificationTag } from '@/dummy';

const meta: Meta<typeof ClassificationTitle> = {
  component: ClassificationTitle
};

export default meta;

type Story = StoryObj<typeof ClassificationTitle>;

export const category: Story = {
  args: {
    src: dummyClassificationCategory.items[0].img.url,
    children: 'カテゴリタイトル'
  },
  render: (args) => <ClassificationTitle {...args} />
};

export const tag: Story = {
  args: {
    src: dummyClassificationTag.items[0].img.url,
    children: 'タグタイトル'
  },
  render: (args) => <ClassificationTitle {...args} />
};
