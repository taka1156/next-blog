'use client';
import { useState } from 'react';

const useToggle = (initState: boolean = false) => {
  const [open, setOpen] = useState<boolean>(initState);

  const changeState = () => {
    setOpen(!open);
  };

  return {
    open,
    changeState
  };
};

export { useToggle };
