import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { styles } from './ContributionBox.css';

type ContributionBox = {
  githubContribution: CommonImg;
};

const ContributionBox = ({ githubContribution }: ContributionBox) => {
  const { src, alt } = githubContribution;
  return (
    <div className={styles.contributionBox}>
      <BaseImg src={src} alt={alt} className={styles.baseImgContributionBox} />
    </div>
  );
};

export { ContributionBox };
