import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { styles } from './GithubStatus.css';

type GithubStatus = {
  githubStatus: BlogGitHubStatus;
};

const GithubStatus = ({ githubStatus }: GithubStatus) => {
  const { statusUrl, usedLangUrl, imgAlt } = githubStatus;
  return (
    <div className={styles.githubStatus}>
      <BaseImg src={statusUrl} alt={imgAlt} className={styles.baseImgGithubStatus} />
      <BaseImg
        src={usedLangUrl}
        alt={imgAlt}
        className={styles.baseImgGithubStatus}
      />
    </div>
  );
};

export { GithubStatus };
