import { mount } from '@vue/test-utils';
import MockDate from 'mockdate';
import TheCopyright from './TheCopyright.tsx';
import { dummyCopyrightUrl, dummyDay } from '@/__testdata__/testdata.js';

describe('TheNavigation', () => {
  const theCopyright = propsData =>
    mount(TheCopyright, {
      propsData: {
        ...propsData
      }
    });

  beforeEach(() => {
    MockDate.set(dummyDay);
  });
  afterEach(() => {
    MockDate.reset();
  });

  it('TheNavigation初期値: copyrightUrl', () => {
    const wrapper = theCopyright({ copyrightUrl: dummyCopyrightUrl });
    expect(wrapper.vm.$options.props.copyrightUrl.required).toBe(true);
    expect(wrapper.vm.copyrightUrl).toBe(dummyCopyrightUrl);
  });

  it('値がDOMに反映されているか', () => {
    const wrapper = theCopyright({ copyrightUrl: dummyCopyrightUrl });
    const aTag = wrapper.find('a');
    expect(aTag.attributes().href).toBe(dummyCopyrightUrl);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
