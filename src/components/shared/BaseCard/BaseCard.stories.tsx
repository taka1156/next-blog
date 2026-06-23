import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BaseCard } from './BaseCard';
import { BaseLink } from '@/components/shared/BaseLink/BaseLink';

const meta: Meta<typeof BaseCard> = {
  component: BaseCard
};

export default meta;

type Story = StoryObj<typeof BaseCard>;

export const Basic: Story = {
  args: {
    contents: {
      img: {
        url: 'https://placehold.jp/150x150.png'
      },
      title: 'Sample Title',
      description: 'Sample contents for the card.'
    }
  },
  render: (args) => <BaseCard {...args} />
};

export const WithLinkChildren: Story = {
  args: {
    contents: {
      img: {
        url: 'https://placehold.jp/150x150.png'
      },
      title: 'Sample Title',
      description: 'Sample contents for the card.'
    }
  },
  render: (args) => (
    <>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
        }
      `}</style>
      <BaseCard {...args}>
        <div className='container'>
          <BaseLink
            href='https://example.com'
            enableNewTab
            style={{
              display: 'block',
              margin: 8,
              textAlign: 'center'
            }}
          >
            Read More
          </BaseLink>
        </div>
      </BaseCard>
    </>
  )
};

export const WithButtonChildren: Story = {
  args: {
    contents: {
      img: {
        url: 'https://placehold.jp/150x150.png'
      },
      title: 'Sample Title',
      description: 'Sample contents for the card.'
    }
  },
  render: (args) => (
    <>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
        }
      `}</style>
      <BaseCard {...args}>
        <div className='container'>
          <BaseLink
            href='https://example.com'
            enableNewTab
            style={{
              display: 'block',
              width: '75%',
              padding: '10px',
              margin: '5px',
              fontSize: '1em',
              color: 'gray',
              backgroundColor: 'white',
              border: '1px solid gray',
              borderRadius: '5px',
              outline: 'none',
              textAlign: 'center'
            }}
          >
            Read More
          </BaseLink>
        </div>
      </BaseCard>
    </>
  )
};

export const WithLongDescriptionChildren: Story = {
  args: {
    contents: {
      img: {
        url: 'https://placehold.jp/150x150.png'
      },
      title: 'Sample Title',
      description: `a`.repeat(115)
    }
  },
  render: (args) => (
    <>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
        }
      `}</style>
      <BaseCard {...args}>
        <div className='container'>
          <BaseLink
            href='https://example.com'
            enableNewTab
            style={{
              display: 'block',
              width: '75%',
              padding: '10px',
              margin: '5px',
              fontSize: '1em',
              color: 'gray',
              backgroundColor: 'white',
              border: '1px solid gray',
              borderRadius: '5px',
              outline: 'none',
              textAlign: 'center'
            }}
          >
            Read More
          </BaseLink>
        </div>
      </BaseCard>
    </>
  )
};
