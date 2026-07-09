import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TheNavigation } from './TheNavigation';
import { ROUTES as blogRoutes } from '@/constants/blog';
import { ROUTES as portfolioRoutes } from '@/constants/portfolio';
import '@/app/layout.css';

const meta: Meta<typeof TheNavigation> = {
  component: TheNavigation
};

export default meta;

type Story = StoryObj<typeof TheNavigation>;

export const Blog: Story = {
  args: {
    logoText: 'Navigation',
    routes: blogRoutes
  },
  render: (args) => <TheNavigation {...args} />
};

export const Portfolio: Story = {
  args: {
    logoText: 'Navigation',
    routes: portfolioRoutes
  },
  render: (args) => <TheNavigation {...args} />
};
