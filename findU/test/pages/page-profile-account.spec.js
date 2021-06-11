import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Account from '../../pages/profile/account'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Account', () => {
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
    }
    store = new Vuex.Store({
      state,
      actions,
      getters,
    })
  })

  test('render', () => {
    const wrapper = shallowMount(Account, {
      localVue,
      vuetify,
      store,
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('chip email', () => {
    const wrapper = mount(Account, {
      localVue,
      vuetify,
      store,
    })
    const p = wrapper.findAllComponents({ name: 'v-chip' }).at(0)
    expect(p.text()).toBe('test@test.com')
  })

  test('chip name', () => {
    const wrapper = mount(Account, {
      localVue,
      vuetify,
      store,
    })
    const p = wrapper.findAllComponents({ name: 'v-chip' }).at(1)
    expect(p.text()).toBe('testUser')
  })

  test('chip membership', () => {
    const wrapper = mount(Account, {
      localVue,
      vuetify,
      store,
    })
    const p = wrapper.findAllComponents({ name: 'v-chip' }).at(2)
    expect(p.text()).toBe('PRO')
  })

  test('chip all', () => {
    const wrapper = mount(Account, {
      localVue,
      vuetify,
      store,
    })
    const p = wrapper.findAllComponents({ name: 'v-chip' })
    expect(p).toHaveLength(3)
  })
})
