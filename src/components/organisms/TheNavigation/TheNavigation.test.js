import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import TheNavigation from './TheNavigation.tsx';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';
import '@/__mocks__/matchMediaMock.js';

describe('TheNavigation', () => {
  const theNavigation = shallowMount(TheNavigation, {
    stubs: {
      NuxtLink: RouterLinkStub
    },
    propsData: {
      logoText: dummyLogo,
      routes: dummyRoutes
    }
  });

  it('NavBar初期値: logoText, routes', () => {
    // logoText
    expect(theNavigation.vm.$options.props.logoText.required).toBe(true);
    expect(theNavigation.vm.logoText).toBe(dummyLogo);
    // routes
    expect(theNavigation.vm.$options.props.routes.required).toBe(true);
    expect(theNavigation.vm.routes).toBe(dummyRoutes);
  });

  it('閉じた時のスナップショット', () => {
    expect(theNavigation.html()).toMatchSnapshot();
  });

  it('changeStateのテスト', () => {
    expect(theNavigation.vm.$data.isOpen).toBe(false);
    theNavigation.vm.changeState(true);
    expect(theNavigation.vm.$data.isOpen).toBe(true);
  });

  it('開いた時のスナップショット', () => {
    expect(theNavigation.html()).toMatchSnapshot();
  });
});
