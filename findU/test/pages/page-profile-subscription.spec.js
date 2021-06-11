import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Subscribe from '../../pages/profile/subscribe'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Subscribe', () => {
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
    }
    store = new Vuex.Store({
      state,
      actions,
      getters,
    })
  })

  test('render', () => {
    const wrapper = shallowMount(Subscribe, {
      localVue,
      vuetify,
      store,
    })
    expect(wrapper.exists()).toBe(true)
  })
})
