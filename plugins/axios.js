export default async function({ $axios, $cookies }) {
  await $axios.onRequest((config) => {
    config.xsrfCookieName = 'csrftoken';
    config.xsrfHeaderName = 'X-CSRFToken';
    config.headers['Content-Type'] = 'application/json';
    const csrfCookie = $cookies.get('csrftoken');
    if (csrfCookie) {
      config.headers['X-CSRFToken'] = csrfCookie;
    }
  });
  await $axios.onResponse((res) => {
    if (process.server) {
      if (!$cookies.get('csrftoken')) {
        let csrfCookie = res.headers['set-cookie'][0].split('; ');
        csrfCookie = csrfCookie[0].split('=');
        const cookieName = csrfCookie[0];
        const cookieValue = csrfCookie[1];
        $cookies.set(cookieName, cookieValue, {
          path: '/',
          httpOnly: false,
          secure: false,
          maxAge: 60 * 60 * 24 * 365,
          sameSite: 'Lax',
        });
      }
    }
  });
}
