import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Fragment1 from '../../components/fragment1'

const localVue = createLocalVue()

describe('fragment1', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('render', () => {
    const wrapper = mount(Fragment1, {
      localVue,
      vuetify,
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('display correctly', () => {
    const wrapper = mount(Fragment1, {
      localVue,
      vuetify,
    })
    expect(wrapper.text()).toContain('Search Engine For Youtube')
  })

  test('display correctly', () => {
    const wrapper = mount(Fragment1, {
      localVue,
      vuetify,
    })
    expect(wrapper.text()).toContain('Search Engine For Youtube')
  })

  test('check button exist', () => {
    const wrapper = mount(Fragment1, {
      localVue,
      vuetify,
    })
    const link = wrapper.find('a')
    expect(link.text()).toContain('Download Latest Version')
  })

  test('check button works', async () => {
    const wrapper = mount(Fragment1, {
      localVue,
      vuetify,
    })
    const link = wrapper.find('a')

    await link.trigger('click')
  })
})
