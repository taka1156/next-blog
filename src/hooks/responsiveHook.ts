'use client';
import { useEffect, useState } from 'react';

const useResponsiveStateHook = () => {
  const [isMobile, setMobile] = useState<boolean>(false);

  const checkMobile = () => {
    const mobileState = window.matchMedia('(max-width:800px)').matches;
    setMobile(mobileState);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      checkMobile();
    });
  }, []);

  return {
    isMobile,
  };
};

export { useResponsiveStateHook };
