import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { BaseNavIcon } from '@/components/shared/BaseNavIcon/BaseNavIcon';
import { styles } from './NavBar.css';
import { BaseTransition } from '@/components/shared/BaseTransition/BaseTransition';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';

type NavBar = {
  logoText: string;
  isOpen: boolean;
  routes: RouteItems;
  changeState: () => void;
};

const NavBar = ({ logoText, isOpen, routes, changeState }: NavBar) => {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navBarBox}>
          <BaseLink href='/' className={styles.navBarLink}>
            {logoText}
          </BaseLink>
          <BaseNavIcon isOpen={isOpen} onClick={changeState}>
            {isOpen ? 'CLOSE' : 'NAVI'}
          </BaseNavIcon>
        </div>
      </div>
      {isOpen && (
        <div className={styles.navList}>
          <BaseTransition flag={isOpen} timeout={1500} classNames='navFade'>
            {
              <ul className={styles.navList}>
                {routes.map((route) => (
                  <li key={route.name} onClick={changeState}>
                    <BaseLink href={route.href} className={styles.navListItemLink}>
                      <BaseImg
                        className={styles.navListItemImg}
                        src={route.img}
                        alt={`${route.name}の画像`}
                      />
                      <BaseText
                        className={styles.navListItemText}
                        size='extraLarge'
                        color='white'
                      >
                        {route.name}
                      </BaseText>
                    </BaseLink>
                  </li>
                ))}
              </ul>
            }
          </BaseTransition>
        </div>
      )}
    </>
  );
};

export { NavBar };
