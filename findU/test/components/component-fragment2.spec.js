import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Fragment2 from '../../components/fragment2'

const localVue = createLocalVue()

describe('fragment2', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('render', () => {
    const wrapper = shallowMount(Fragment2, {
      localVue,
      vuetify,
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('display text', () => {
    const wrapper = mount(Fragment2, {
      localVue,
      vuetify,
    })
    expect(wrapper.text()).toContain('einstein')
  })

  test('display image', () => {
    const wrapper = mount(Fragment2, {
      localVue,
      vuetify,
    })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
  })
})
