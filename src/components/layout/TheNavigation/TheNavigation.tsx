'use client';
import { NavBar } from '@/components/layout/NavBar/NavBar';
import { NavBarPc } from '@/components/layout/NavBarPc/NavBarPc';
import { useOpen } from '@/hooks/useToggle';
import { useResponsive } from '@/hooks/useResponsive';

type TheNavigation = {
  routes: RouteItems;
};

const TheNavigation = ({ routes }: TheNavigation) => {
  const { open, toggleOpen } = useOpen(false);
  const { isMobile } = useResponsive();

  return (
    <div>
      <nav>
        {isMobile && (
          <NavBar isOpen={open} routes={routes} toggleOpen={toggleOpen} />
        )}
        {!isMobile && <NavBarPc routes={routes} />}
      </nav>
    </div>
  );
};

export { TheNavigation };
