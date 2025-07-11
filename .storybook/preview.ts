import type { Preview } from '@storybook/react';
import { getRouter } from '@storybook/nextjs/router.mock';
import { action } from '@storybook/addon-actions';

const preview: Preview = {
  parameters: {
    docs: {
      story: {
        autoplay: false
      }
    },
    nextjs: {
      appDirectory: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    async beforeEach() {
      getRouter().push.mockImplementation((args) => {
        action('link target')(args);
      });
    }
  }
};

export default preview;
