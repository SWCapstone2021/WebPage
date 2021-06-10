export const state = () => ({
  user: null,
  userData: null,
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    // Do this:
    console.log('this is mutation...')
    if (!authUser) {
      // perform log out
      console.log('user is null')
      state.user = null
    } else {
      console.log('user is ok')
      const { uid, email, emailVerified, displayName } = authUser
      state.user = { uid, email, emailVerified, displayName }
    }
  },
  UPDATE_USER_INFO: (state, { displayName }) => {
    // Do this:
    console.log('this is mutation2...')
    if (!state.user) {
      // perform log out
      console.log('user is null')
    } else {
      console.log('user is ok')
      state.user.displayName = displayName
    }
  },
  UPDATE_USER_DATA: (state, userData) => {
    console.log(userData)
    state.userData = userData
  },
}

export const getters = {
  isPro(state) {
    if (state.userData) {
      return state.userData.membership === 'PRO'
    } else {
      return false
    }
  },
  membership(state) {
    return state.userData ? state.userData.membership : 'FREE'
  },
  lastOrderDate(state) {
    return state.userData ? state.userData.last_order : 'Not Available'
  },
  nextOrderDate(state) {
    return state.userData ? state.userData.next_order : 'Not Available'
  },
}
