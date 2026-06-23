import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { ContributionBox } from '@/components/profile/ContributionBox/ContributionBox';
import { GithubStatus } from '@/components/profile/GithubStatus/GithubStatus';
import { ProfileBox } from '@/components/profile/ProfileBox/ProfileBox';
import { SnsIcons } from '@/components/profile/SnsIcons/SnsIcons';
import {
  GITHUB_CONTRIBUTION_IMG,
  GITHUB_STATUS,
  PROFILE,
  SNS_ICONS
} from '@/constants/';
import { styles } from './page.css';

export default function Profile() {
  return (
    <div className={styles.container}>
      <BaseHeading hLv='1' className={styles.profileHeading}>
        Profile
      </BaseHeading>

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.profileSubHeading}>
          自己紹介
        </BaseHeading>
        <ProfileBox profile={PROFILE} />
      </section>

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.profileSubHeading}>
          Githubの活動
        </BaseHeading>
        <ContributionBox githubContribution={GITHUB_CONTRIBUTION_IMG} />
      </section>

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.profileSubHeading}>
          Github Status
        </BaseHeading>
        <GithubStatus githubStatus={GITHUB_STATUS} />
      </section>

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.profileSubHeading}>
          SNSやGitHub等
        </BaseHeading>
        <SnsIcons snsIcons={SNS_ICONS} />
      </section>
    </div>
  );
}
