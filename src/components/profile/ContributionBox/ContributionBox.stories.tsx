import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ContributionBox } from './ContributionBox';
import { GITHUB_CONTRIBUTION_IMG } from '@/constants';

const meta: Meta<typeof ContributionBox> = {
  component: ContributionBox
};

export default meta;

type Story = StoryObj<typeof ContributionBox>;

export const Basic: Story = {
  args: {
    githubContribution: GITHUB_CONTRIBUTION_IMG
  },
  render: (args) => <ContributionBox {...args} />
};
