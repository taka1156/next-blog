import { BaseCard } from '@/components/shared/BaseCard/BaseCard';
import { BaseLink } from '@/components/shared/BaseLink/BaseLink';

type DevelopmentCardProps = {
  img: {
    url: string;
  };
  title: string;
  description: string;
  link: string;
  className?: string;
};

const isGithubRepo = ({ link, className }: DevelopmentCardProps) => {
  /**
   * githubリポジトリかどうかを判定する処理
   */
  return (
    `${link}`.toLocaleLowerCase().includes('github') &&
    !`${link}`.includes('github.io')
  );
};

const DevelopmentCard = (props: DevelopmentCardProps) => {
  return (
    <BaseCard contents={props} className={props.className}>
      <BaseLink href={props.link}>
        {isGithubRepo(props) ? 'GitHub' : 'WebSite'}
      </BaseLink>
    </BaseCard>
  );
};

export { DevelopmentCard };
