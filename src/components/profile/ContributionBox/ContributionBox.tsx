import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { styles } from './ContributionBox.css';

type ContributionBoxProps = {
  githubContribution: CommonImg;
};

const ContributionBox = ({ githubContribution }: ContributionBoxProps) => {
  const { src, alt } = githubContribution;

  return (
    <div className={styles.contributionBox}>
      <BaseImg src={src} alt={alt} className={styles.baseImgContributionBox} />
    </div>
  );
};

export { ContributionBox };
