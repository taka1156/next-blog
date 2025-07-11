import { NavListItemPc } from '../NavListItemPc/NavListItemPc';
import { styles } from './NavListPc.css';

type NavListPc = {
  routes: RouteItems;
};

const NavListPc = ({ routes }: NavListPc) => {
  return (
    <ul className={styles.navListPc}>
      {routes.length !== 0 && (
        <>
          {routes.map((routeItem) => (
            <li key={routeItem.name}>
              <NavListItemPc
                name={routeItem.name}
                href={routeItem.href}
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
