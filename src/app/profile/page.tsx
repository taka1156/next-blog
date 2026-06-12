import { Metadata } from 'next';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { ProfileBox } from '@/components/profile/ProfileBox/ProfileBox';
import { ContributionBox } from '@/components/profile/ContributionBox/ContributionBox';
import { GithubStatus } from '@/components/profile/GithubStatus/GithubStatus';
import { SnsIcons } from '@/components/profile/SnsIcons/SnsIcons';
import {
  SNS_ICONS,
  PROFILE,
  GITHUB_CONTRIBUTION_IMG,
  GITHUB_STATUS
} from '@/constants/';
import { styles } from './Profile.css';

export const metadata = (): Metadata => {
  const URL = `${process.env.BASE_URL}/profile/`;
  const IMAGE = `${process.env.BASE_URL}/img/ogp/profile.png`;
  // メタタグ
  const title = 'プロフィール';
  const description =
    'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中';
  const type = 'article';
  const url = URL;
  const image = IMAGE;

  return {
    title: title,
    description: description,
    openGraph: {
      type: type,
      title: title,
      description: description,
      images: [image],
      url: url
    }
  };
};

const Profile = () => {
  return (
    <div>
      <BaseHeading hLv='1' className={styles.baseHeading1Profile}>
        Profile
      </BaseHeading>

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.baseHeading2Profile}>
          自己紹介
        </BaseHeading>
        <ProfileBox profile={PROFILE} />
      </section>

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.baseHeading2Profile}>
          Githubの活動
        </BaseHeading>
        <ContributionBox githubContribution={GITHUB_CONTRIBUTION_IMG} />
      </section>

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.baseHeading2Profile}>
          Github Status
        </BaseHeading>
        <GithubStatus githubStatus={GITHUB_STATUS} />
      </section>

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.baseHeading2Profile}>
          SNSやGitHub等
        </BaseHeading>
        <SnsIcons snsIcons={SNS_ICONS} />
      </section>
    </div>
  );
};

export default Profile;
