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
        src={statusUrl}
        alt={imgAlt}
        size='free'
        className={styles.baseImgGithubstatus}
      />
      <BaseImg
        src={usedLangUrl}
        alt={imgAlt}
        size='free'
        className={styles.baseImgGithubstatus}
      />
    </div>
  );
};

export { GithubStatus };
