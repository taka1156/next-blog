'use client';
import { NavBar } from '@/components/layout/NavBar/NavBar';
import { NavBarPc } from '@/components/layout/NavBarPc/NavBarPc';
import { useToggle } from '@/hooks/useToggle';
import { useResponsiveStateHook } from '@/hooks/responsiveHook';

type TheNavigation = {
  logoText: string;
  routes: RouteItems;
};

const TheNavigation = ({ logoText, routes }: TheNavigation) => {
  const { open, changeState } = useToggle(false);
  const { isMobile } = useResponsiveStateHook();

  return (
    <div>
      <nav>
        {isMobile && (
          <NavBar
            logoText={logoText}
            isOpen={open}
            routes={routes}
            changeState={changeState}
          />
        )}
        {!isMobile && <NavBarPc logoText={logoText} routes={routes} />}
      </nav>
    </div>
  );
};

export { TheNavigation };
