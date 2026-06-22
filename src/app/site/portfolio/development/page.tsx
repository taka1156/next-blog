import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { DevelopmentCard } from '@/components/portfolio/DevelopmentCard/DevelopmentCard';
import { styles } from './page.css';

const cards: (CommonCard & { link: string })[] = [
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.',
    link: 'https://example.com/card1'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.',
    link: 'https://example.com/card1'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.',
    link: 'https://example.com/card1'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.',
    link: 'https://example.com/card1'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.',
    link: 'https://example.com/card1'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.',
    link: 'https://example.com/card1'
  }
];

export default function Development() {
  return (
    <div className={styles.container}>
      <BaseHeading hLv='1' className={styles.developmentHeading}>
        Development
      </BaseHeading>

      <div className={styles.cardList}>
        {cards.map((card, index) => (
          <DevelopmentCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
