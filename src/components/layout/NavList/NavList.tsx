import { BaseTransition } from '@/components/shared/BaseTransition/BaseTransition';
import { NavListItem } from '../NavListItem/NavListItem';
import { styles } from './NavList.css';

type NavList = {
  open: boolean;
  routes: RouteItems;
  changeState: () => void;
};

const NavList = ({ open, routes, changeState }: NavList) => {
  return (
    <div className={styles.navList}>
      <BaseTransition flag={open} timeout={1500} classNames='navFade'>
        {
          <div className={styles.navList}>
            <ul>
              {routes.map((route) => (
                <li key={route.name} onClick={changeState}>
                  <NavListItem href={route.href} name={route.name} img={route.img} />
                </li>
              ))}
            </ul>
          </div>
        }
      </BaseTransition>
    </div>
  );
};

export { NavList };
