function signedUp(store) {
  return store.state.user !== null && store.state.user !== undefined
}

function finishSignUp(store) {
  return store.state.user.displayName
}

function accessAuth(route) {
  return /\/auth.*/.test(route.path)
}

// eslint-disable-next-line no-unused-vars
function accessProfile(route) {
  return /\/profile.*/.test(route.path)
}

function accessSignOut(route) {
  return /\/auth\/signout/.test(route.path)
}

export default function ({ store, redirect, route }) {
  // if (!store.state.user && route.path !== '/auth') {
  //   return redirect('/auth')
  // }
  // console.log('hello')
  // console.log(store.state)
  if (signedUp(store)) {
    console.log('hello')
    if (finishSignUp(store)) {
      console.log('hello')
      if (accessAuth(route)) {
        if (!accessSignOut(route)) {
          return redirect('/')
        }
      }
    } else {
      return redirect('/auth/newuser')
    }
  }
  // } else if (accessProfile(route)) {
  //   console.log('hello')
  //   return redirect('/auth/login')
  // }
}
