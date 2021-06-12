import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Billing from '../../pages/profile/billing'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Billing', () => {
  let vuetify

  let actions
  let state
  let store
  let getters

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
      user: {
        email: 'test@test.com',
        displayName: 'testUser',
      },
    }
    getters = {
      membership: jest.fn(() => 'PRO'),
      isPro: jest.fn(() => true),
      nextOrderDate: jest.fn(() => 'Not available'),
      lastOrderDate: jest.fn(() => 'Not available'),
    }
    store = new Vuex.Store({
      state,
      actions,
      getters,
    })
  })

  test('render', () => {
    const wrapper = shallowMount(Billing, {
      localVue,
      vuetify,
      store,
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('chip subscription', () => {
    const wrapper = mount(Billing, {
      localVue,
      vuetify,
      store,
    })
    const p = wrapper.findAllComponents({ name: 'v-chip' }).at(0)
    expect(p.text()).toBe('PRO')
  })

  test('chip lastOrder', () => {
    const wrapper = mount(Billing, {
      localVue,
      vuetify,
      store,
    })
    const p = wrapper.findAllComponents({ name: 'v-chip' }).at(1)
    expect(p.text()).toBe('Not available')
  })

  test('chip next order', () => {
    const wrapper = mount(Billing, {
      localVue,
      vuetify,
      store,
    })
    const p = wrapper.findAllComponents({ name: 'v-chip' }).at(2)
    expect(p.text()).toBe('Not available')
  })

  test('change subscription', () => {
    const wrapper = mount(Billing, {
      localVue,
      vuetify,
      store,
    })
    const btn = wrapper.findComponent({ name: 'v-btn' })
    expect(btn.text()).toContain('Change Subscription')
  })

  test('button click', async () => {
    const wrapper = mount(Billing, {
      localVue,
      vuetify,
      store,
    })
    const btn = wrapper.findComponent({ name: 'v-btn' })
    await btn.trigger('click')
  })
})
