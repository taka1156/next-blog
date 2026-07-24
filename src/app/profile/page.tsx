import { Metadata } from 'next';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BASE_URL } from '@/constants';
import { ContributionBox } from '@/components/profile/ContributionBox/ContributionBox';
import { ProfileBox } from '@/components/profile/ProfileBox/ProfileBox';
import { DevelopmentCard } from '@/components/profile/DevelopmentCard/DevelopmentCard';
import { SnsIcons } from '@/components/profile/SnsIcons/SnsIcons';
import { getArticles } from '@/utils/ssg/brite';
import { GITHUB_CONTRIBUTION_IMG, PROFILE, SNS_ICONS } from '@/constants/';
import { styles } from './page.css';

const getStaticArticles = async () => {
  return await getArticles('portfolio');
};

export const generateMetadata = async (): Promise<Metadata> => {
  const URL = `${BASE_URL}/profile/`;
  const IMAGE = `${BASE_URL}/img/ogp/profile.png`;
  const TITLE = 'プロフィール';
  const DESCRIPTION =
    'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中';

  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: URL,
      images: [
        {
          url: IMAGE
        }
      ],
      type: 'article'
    }
  };
};

export default async function Profile() {
  const articles = await getStaticArticles();

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

      {/* <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.profileSubHeading}>
          Github Status
        </BaseHeading>
        <GithubStatus githubStatus={GITHUB_STATUS} />
      </section> */}

      <section className={styles.contents}>
        <BaseHeading hLv='2' className={styles.profileSubHeading}>
          制作物
        </BaseHeading>
        <div className={styles.cardList}>
          {articles.map((article, index) => (
            <DevelopmentCard key={index} index={index} article={article} />
          ))}
        </div>
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
