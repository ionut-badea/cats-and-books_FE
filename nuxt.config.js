export default {
  target: 'static',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'Cats and Books',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css',
      },
    ],
  },

  css: [],

  plugins: ['~/plugins/axios', '~/plugins/vee-validate'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/moment'],

  moment: {
    timezone: true,
  },

  modules: ['@nuxtjs/axios', ['cookie-universal-nuxt', { parseJSON: false }]],

  axios: {
    baseURL: 'https://cats-and-books.herokuapp.com/',
    debug: false,
    progress: true,
    credentials: true,
  },

  middleware: [],

  // server: {
  //   host: '127.0.0.2',
  //   port: 3000,
  // },

  build: {
    transpile: ['vee-validate/dist/rules'],

    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
      }
    },
  },
};
