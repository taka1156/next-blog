'use client';

import { useMediaQuery } from 'usehooks-ts';

const QUERY = '(max-width:800px)';

const useResponsive = () => {
  const isMobile = useMediaQuery(QUERY, {
    defaultValue: false,
    initializeWithValue: false
  });

  return {
    isMobile
  };
};

export { useResponsive };
