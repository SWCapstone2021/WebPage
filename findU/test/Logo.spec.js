import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

function sum(number1, number2) {
  return number1 + number2
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

function accessAuth(route) {
  return /\/auth.*/.test(route.path)
}

function accessSignOut(route) {
  return /\/auth\/signout/.test(route.path)
}

test('differ accessing Auth Page', () => {
  expect(accessAuth({ path: '/auth/login' })).toBe(true)
})

test('check accessing SignOut Page', () => {
  expect(accessSignOut({ path: '/auth/signout' })).toBe(true)
})

test('check not accessing SignOut Page', () => {
  expect(accessSignOut({ path: '/auth/signou' })).toBe(false)
})
