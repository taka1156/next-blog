import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { styles } from './ProfileBox.css';

type ProfileBoxProps = {
  profile: BlogProfile;
};

const ProfileBox = ({ profile }: ProfileBoxProps) => {
  const { img, introduce } = profile;

  return (
    <div className={styles.profileBox}>
      <BaseImg
        src={img}
        alt='プロフィール画像'
        className={styles.baseImgProfileBox}
      />
      <BaseText className={styles.baseTextProfileBox}>{introduce}</BaseText>
    </div>
  );
};

export { ProfileBox };
