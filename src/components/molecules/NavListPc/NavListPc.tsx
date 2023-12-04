import { NavListItemPc } from '../NavListItemPc/NavListItemPc';
import styles from './NavListPc.module.css';

type NavListPc = {
  routes: RouteItems;
};

const NavListPc = ({ routes }: NavListPc) => {
  return (
    <ul className={styles.navList}>
      {routes.length !== 0 && (
        <>
          {routes.map((routeItem) => (
            <li key={routeItem.name} className={styles.navListItem }>
              <NavListItemPc
                to={routeItem.to}
                name={routeItem.name}
                img={routeItem.img}
              />
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export { NavListPc };
