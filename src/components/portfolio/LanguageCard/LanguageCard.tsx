import { BaseCard } from '@/components/shared/BaseCard/BaseCard';
import { BaseHeading } from '@/components/shared/BaseHeading/BaseHeading';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { BaseText } from '@/components/shared/BaseText/BaseText';

type LanguageCardProps = {
  img: {
    url: string;
  };
  title: string;
  contents: string;
  link: string;
};

const isGithubRepo = ({ link }: LanguageCardProps) => {
  /**
   * githubリポジトリかどうかを判定する処理
   */
  return (
    `${link}`.toLocaleLowerCase().includes('github') &&
    !`${link}`.includes('github.io')
  );
};

const LanguageCard = (props: LanguageCardProps) => {
  return (
    <BaseCard contents={props}>
      <BaseLink href={props.link}>
        {isGithubRepo(props) ? 'GitHub' : 'WebSite'}
      </BaseLink>
    </BaseCard>
  );
};

export { LanguageCard };
