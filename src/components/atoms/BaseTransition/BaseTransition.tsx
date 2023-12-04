'use client';
import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

type BaseTransition = {
  timeout: number;
  classNames: string;
  flag?: boolean | null | undefined;
  mode?: string| null | undefined;
  children: ReactNode;
};

const BaseTransition = ({
  timeout,
  classNames,
  children,
  flag,
  mode
}: BaseTransition) => {
    let configIn = true
    if (typeof flag !== "undefined" && typeof flag !== "object") {
        configIn = flag;
    } 

  return (
    <CSSTransition
      in={configIn}
      timeout={timeout}
      classNames={classNames}
      mode={mode}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export { BaseTransition };
