import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Payment from '../../components/payment'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('payment', () => {
  let vuetify
  let actions
  let state
  let store

  beforeEach(() => {
    vuetify = new Vuetify()
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn(),
    }
    state = {
      userData: {
        membership: null,
      },
    }
    store = new Vuex.Store({
      state,
      actions,
    })
  })

  test('render', () => {
    const wrapper = shallowMount(Payment, {
      localVue,
      vuetify,
      store,
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('display text', () => {
    const wrapper = mount(Payment, {
      localVue,
      vuetify,
      store,
    })
    expect(wrapper.text()).toContain('Select Card')
  })
})
