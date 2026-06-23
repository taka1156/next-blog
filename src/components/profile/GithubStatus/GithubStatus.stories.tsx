import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GithubStatus } from './GithubStatus';
import { GITHUB_STATUS } from '@/constants';

const meta: Meta<typeof GithubStatus> = {
  component: GithubStatus
};

export default meta;

type Story = StoryObj<typeof GithubStatus>;

export const Basic: Story = {
  args: {
    githubStatus: GITHUB_STATUS
  },
  render: (args) => <GithubStatus {...args} />
};
