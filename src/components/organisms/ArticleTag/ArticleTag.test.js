import { shallowMount } from '@vue/test-utils';
import ArticleTag from './ArticleTag.tsx';
import { dummyTagBadges } from '@/__testdata__/testdata.js';

describe('ArticleTag', () => {
  const articleTag = propsData =>
    shallowMount(ArticleTag, {
      propsData: {
        ...propsData
      }
    });

  it('ArticleTag初期値: tags', () => {
    const wrapper = articleTag({ tags: dummyTagBadges });
    expect(wrapper.vm.$options.props.tags.required).toBe(true);
    expect(wrapper.vm.tags).toBe(dummyTagBadges);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
