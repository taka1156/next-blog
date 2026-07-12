import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TheCopyright } from '../TheCopyright/TheCopyright';
import { TheNavigation } from '../TheNavigation/TheNavigation';
import { COPYRIGHT_URL, ROUTES } from '@/constants';
import { ComponentProps } from 'react';
import { BaseTransition } from '@/components/shared/BaseTransition/BaseTransition';
import '@/app/layout.css';

const Contents = (
  args: ComponentProps<typeof TheCopyright> & ComponentProps<typeof TheNavigation>
) => (
  <div className='app'>
    <header>
      <TheNavigation {...args} />
    </header>
    <div className='container'>
      <main className='box'>
        <BaseTransition timeout={1500} classNames='slide-in-up'>
          <div
            style={{
              display: 'block',
              height: '100vh',
              padding: 0,
              margin: '0 auto'
            }}
          >
            コンテンツ
          </div>
        </BaseTransition>
      </main>
      <footer>
        <TheCopyright {...args} />
      </footer>
    </div>
  </div>
);

const meta: Meta<typeof Contents> = {
  component: Contents
};

export default meta;

type Story = StoryObj<typeof Contents>;

export const Basic: Story = {
  args: {
    routes: ROUTES,
    copyrightUrl: COPYRIGHT_URL
  },
  render: (
    args: ComponentProps<typeof TheCopyright> & ComponentProps<typeof TheNavigation>
  ) => <Contents {...args} />
};
