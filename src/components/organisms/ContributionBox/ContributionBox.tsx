import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import styles from './ContributionBox.module.css';

type ContributionBox = {
  githubContribution: CommonImg;
};

const ContributionBox = ({ githubContribution }: ContributionBox) => {
  const { imgUrl, imgAlt } = githubContribution;
  return (
    <div className={styles.contributionBox}>
      <BaseImg
        imgUrl={imgUrl}
        imgAlt={imgAlt}
        extendClass={styles.baseImgContributionbox}
        size="free"
      />
    </div>
  );
};

export { ContributionBox };
