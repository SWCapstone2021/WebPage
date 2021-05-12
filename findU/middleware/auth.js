export default function ({ store, redirect, route }) {
  // if (!store.state.user && route.path !== '/auth') {
  //   return redirect('/auth')
  // }
  if (store.state.user && route.path === '/auth') {
    return redirect('/')
  }
}
