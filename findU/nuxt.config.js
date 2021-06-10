import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - findU',
    title: 'findU',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/jquery.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // env
  publicRuntimeConfig: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.PRO_BASE_URL
        : process.env.DEV_BASE_URL,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    [
      '@nuxtjs/vuetify',
      {
        theme: {
          dark: false,
          themes: {
            light: {
              primary: '#3d98c0',
              secondary: '#90CAF9',
              accent: '#286a93',
              error: '#932834',
              surface: '#E0F7FA',
              background: '#FFFFFF',
            },
            dark: {
              primary: '#50778D',
              secondary: '#0B1C3D',
              accent: '#204165',
            },
          },
        },
        icons: {
          iconfont: 'mdiSvg || mdi || fa',
        },
      },
    ],
  ],

  firebase: {
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          subscribeManually: false,
        },
        emulatorPort: process.env.NODE_ENV === 'production' ? undefined : 9099,
      },
      firestore: {
        emulatorPort: process.env.NODE_ENV === 'production' ? undefined : 8080,
      },
      functions: {
        location: 'us-central1',
        emulatorPort: process.env.NODE_ENV === 'production' ? undefined : 5001,
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    'vuetify-dialog/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.txt$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/,
      })
    },
  },

  generate: {
    dir: 'public',
  },

  router: {
    middleware: ['auth'],
  },
}
