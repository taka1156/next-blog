import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseCard } from '@/components/shared/BaseCard/BaseCard';
import { styles } from './page.css';

const cards: CommonCard[] = [
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 2',
    description: 'This is a description for Card 2.'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 2',
    description: 'This is a description for Card 2.'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 1',
    description: 'This is a description for Card 1.'
  },
  {
    img: {
      url: 'https://placehold.jp/150x150.png'
    },
    title: 'Card Title 2',
    description: 'This is a description for Card 2.'
  }
];

export default function Skill() {
  return (
    <div className={styles.container}>
      <BaseHeading hLv='1' className={styles.skillHeading}>
        Skill
      </BaseHeading>

      <div className={styles.cardList}>
        {cards.map((card, index) => (
          <BaseCard key={index} contents={card} />
        ))}
      </div>
    </div>
  );
}
