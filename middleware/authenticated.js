export default function({ store, redirect }) {
  if (!store.state.account.user.isAuthenticated) {
    return redirect('/login')
  }
}
