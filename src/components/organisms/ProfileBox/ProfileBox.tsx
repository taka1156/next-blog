import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import styles from './ProfileBox.module.css';

type ProfileBox = {
  profile: BlogProfile;
};

const ProfileBox = ({ profile }: ProfileBox) => {
  const { img, introduce } = profile;

  return (
    <div className={styles.profileBox}>
      <BaseImg
        imgUrl={img}
        imgAlt="プロフィール画像"
        size="free"
        extendClass={styles.baseImgProfilebox}
      />
      <BaseText extendClass={styles.baseTextProfilebox}>{introduce}</BaseText>
    </div>
  );
};

export { ProfileBox };
