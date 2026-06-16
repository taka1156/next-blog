import { BaseLink } from '@/components/shared/BaseLink/BaseLink';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { BaseText } from '@/components/shared/BaseText/BaseText';
import { styles } from './NavBarPc.css';

type NavBarPcProps = {
  logoText: string;
  routes: RouteItems;
};

const NavBarPc = ({ logoText, routes }: NavBarPcProps) => {
  return (
    <div className={styles.navBarPC}>
      <div className={styles.navBarBoxPc}>
        <BaseLink href='/' className={styles.navBarPcLink}>
          {logoText}
        </BaseLink>
        <ul className={styles.navListPc}>
          {routes.length !== 0 && (
            <>
              {routes.map((routeItem) => (
                <li key={routeItem.name}>
                  <BaseLink
                    href={routeItem.href}
                    className={styles.navListItemLinkPc}
                  >
                    <BaseImg
                      className={styles.navListItemImgPc}
                      src={routeItem.img}
                      alt={`${routeItem.name}の画像`}
                    />
                    <BaseText className={styles.navListItemTextPc}>
                      {routeItem.name}
                    </BaseText>
                  </BaseLink>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export { NavBarPc };
