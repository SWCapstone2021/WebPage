export const state = () => ({
  user: null,
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
    console.log('this is mutation...')
    if (!state.user) {
      // perform log out
      console.log('user is null')
    } else {
      console.log('user is ok')
      state.user.displayName = displayName
    }
  },
}
