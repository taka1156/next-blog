import { mount } from '@vue/test-utils';
import BaseText from './BaseText.tsx';

describe('BaseText', () => {
  const dummyText = 'ダミーテキスト';
  const baseText = () =>
    mount(BaseText, {
      slots: {
        default: dummyText
      }
    });

  it('値がDOMに反映されているか', () => {
    const wrapper = baseText();
    expect(wrapper.text()).toBe(dummyText);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
