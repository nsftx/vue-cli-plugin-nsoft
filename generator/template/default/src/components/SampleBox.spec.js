import { shallowMount } from '@vue/test-utils';
import SampleBox from '@/components/SampleBox';

describe('SampleBox', () => {
  it('is vue component', () => {
    const wrapper = shallowMount(SampleBox);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
