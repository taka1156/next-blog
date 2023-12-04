import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import styles from './GithubStatus.module.css';

type GithubStatus = {
  githubStatus: BlogGitHubStatus;
};

const GithubStatus = ({ githubStatus }: GithubStatus) => {
  const { statusUrl, usedLangUrl, imgAlt } = githubStatus;
  return (
    <div className={styles.githubStatus}>
      <BaseImg
        imgUrl={statusUrl}
        imgAlt={imgAlt}
        size="free"
        extendClass={styles.baseImgGithubstatus}
      />
      <BaseImg
        imgUrl={usedLangUrl}
        imgAlt={imgAlt}
        size="free"
        extendClass={styles.baseImgGithubstatus}
      />
    </div>
  );
};

export { GithubStatus };
