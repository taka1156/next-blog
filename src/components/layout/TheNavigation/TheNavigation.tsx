'use client';
import { NavBar } from '@/components/layout/NavBar/NavBar';
import { NavBarPc } from '@/components/layout/NavBarPc/NavBarPc';
import { useOpen } from '@/hooks/useToggle';
import { useResponsive } from '@/hooks/useResponsive';

type TheNavigation = {
  logoText: string;
  routes: RouteItems;
};

const TheNavigation = ({ logoText, routes }: TheNavigation) => {
  const { open, toggleOpen } = useOpen(false);
  const { isMobile } = useResponsive();

  return (
    <div>
      <nav>
        {isMobile && (
          <NavBar
            logoText={logoText}
            isOpen={open}
            routes={routes}
            toggleOpen={toggleOpen}
          />
        )}
        {!isMobile && <NavBarPc logoText={logoText} routes={routes} />}
      </nav>
    </div>
  );
};

export { TheNavigation };
