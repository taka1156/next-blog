'use client';
import { NavBar } from '@/components/layout/NavBar/NavBar';
import { NavList } from '@/components/layout/NavList/NavList';
import { NavBarPc } from '@/components/layout/NavBarPc/NavBarPc';
import { useChangeStateHook } from '@/hooks/changeStateHook';
import { useResponsiveStateHook } from '@/hooks/responsiveHook';

type TheNavigation = {
  logoText: string;
  routes: RouteItems;
};

const TheNavigation = ({ logoText, routes }: TheNavigation) => {
  const { open, changeState } = useChangeStateHook(false);
  const { isMobile } = useResponsiveStateHook();

  return (
    <div>
      <nav>
        {isMobile && (
          <>
            <NavBar logoText={logoText} isOpen={open} changeState={changeState} />
            {open && (
              <NavList open={open} routes={routes} changeState={changeState} />
            )}
          </>
        )}
        {!isMobile && <NavBarPc logoText={logoText} routes={routes} />}
      </nav>
    </div>
  );
};

export { TheNavigation };
