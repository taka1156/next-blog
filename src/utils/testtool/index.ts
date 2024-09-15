import { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

const setup = (jsx: ReactElement) => {
  return {
    user: userEvent.setup(),
    renderResult: render(jsx)
  };
};

export { setup };
