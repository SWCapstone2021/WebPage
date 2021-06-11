import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Fragment4 from '../../components/fragment4'

const localVue = createLocalVue()

describe('fragment4', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('render', () => {
    const wrapper = shallowMount(Fragment4, {
      localVue,
      vuetify,
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('display text', () => {
    const wrapper = mount(Fragment4, {
      localVue,
      vuetify,
    })
    expect(wrapper.text()).toContain('Download')
  })
})
