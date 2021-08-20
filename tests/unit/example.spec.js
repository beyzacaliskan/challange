import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders header', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('#nav').exists())
  })
})
