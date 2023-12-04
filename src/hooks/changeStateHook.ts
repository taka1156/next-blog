"use client"
import { useState } from 'react';

const useChangeStateHook = (initState: boolean = false) => {
  const [open, setOpen] = useState<boolean>(initState);

  const changeState = () => {
    setOpen(!open)
  }

  return {
    open,
    changeState
  };
};

export { useChangeStateHook };
