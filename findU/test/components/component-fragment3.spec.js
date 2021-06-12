import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Fragment3 from '../../components/fragment3'

const localVue = createLocalVue()

describe('fragment3', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('render', () => {
    const wrapper = shallowMount(Fragment3, {
      localVue,
      vuetify,
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('display text', () => {
    const wrapper = mount(Fragment3, {
      localVue,
      vuetify,
    })
    expect(wrapper.text()).toContain('FindU give user a powerful')
  })

  test('button', () => {
    const wrapper = mount(Fragment3, {
      localVue,
      vuetify,
    })
    const dialog = wrapper.find('div')
    expect(dialog.exists()).toBe(true)
  })
})
