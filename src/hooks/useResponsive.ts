'use client';
import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [isMobile, setMobile] = useState<boolean>(false);

  const checkMobile = () => {
    const mobileState = window.matchMedia('(max-width:800px)').matches;
    setMobile(mobileState);
  };

  useEffect(() => {
    window.addEventListener('load', checkMobile);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('load', checkMobile);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return {
    isMobile
  };
};

export { useResponsive };
