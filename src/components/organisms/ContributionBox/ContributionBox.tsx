import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { styles } from './ContributionBox.css';

type ContributionBox = {
  githubContribution: CommonImg;
};

const ContributionBox = ({ githubContribution }: ContributionBox) => {
  const { imgUrl, imgAlt } = githubContribution;
  return (
    <div className={styles.contributionBox}>
      <BaseImg
        src={imgUrl}
        alt={imgAlt}
        className={styles.baseImgContributionBox}
        size='free'
      />
    </div>
  );
};

export { ContributionBox };
