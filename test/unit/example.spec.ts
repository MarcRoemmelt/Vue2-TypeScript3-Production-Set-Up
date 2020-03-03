import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallowMount } from '@vue/test-utils';
import Home from '../../src/views/Home/index.vue';

describe('Home/index.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.text()).to.include('test');
    expect(wrapper.text()).to.include('test');
  });
});
