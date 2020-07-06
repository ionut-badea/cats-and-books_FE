export default async function({ $axios, app }) {
  await $axios.onRequest((config) => {
    config.xsrfCookieName = 'csrftoken'
    config.xsrfHeaderName = 'X-CSRFToken'
    config.headers['Content-Type'] = 'application/json'
    const csrfCookie = app.$cookies.get('csrftoken')
    if (csrfCookie) {
      config.headers['X-CSRFToken'] = csrfCookie
      // if (process.server) {
      // } else if (process.client) {
      // }
    } else {
      alert('Something')
    }
  })
  await $axios.onResponse((res) => {
    if (process.server) {
      if (!app.$cookies.get('csrftoken')) {
        let csrfCookie = res.headers['set-cookie'][0].split('; ')
        csrfCookie = csrfCookie[0].split('=')
        const cookieName = csrfCookie[0]
        const cookieValue = csrfCookie[1]
        app.$cookies.set(cookieName, cookieValue, {
          path: '/',
          httpOnly: false,
          secure: true,
          maxAge: 60 * 60 * 24 * 365,
          sameSite: 'Lax'
        })
      }
    }
  })
}
