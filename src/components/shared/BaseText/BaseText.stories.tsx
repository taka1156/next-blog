import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BaseText } from './BaseText';
import { FONT_SIZES, FONT_COLORS, FONT_WEIGHTS } from './BaseText.css';

const meta: Meta<typeof BaseText> = {
  component: BaseText,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.keys(FONT_SIZES)
    },
    color: {
      control: { type: 'select' },
      options: Object.keys(FONT_COLORS)
    },
    weight: {
      control: { type: 'select' },
      options: Object.keys(FONT_WEIGHTS)
    },
    children: {
      control: { type: 'text' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof BaseText>;

export const Basic: Story = {
  args: {
    size: 'medium',
    color: 'base',
    weight: 'regular',
    children: 'Base Text'
  },
  render: (args) => <BaseText {...args} />
};
