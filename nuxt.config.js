const description = `Find and consume data faster from the leading Polkadot/Substrate protocols using our free MassBit explorer. The world’s decentralised data is now available to query using GraphQL.`;
const color = `#2C3ACF`;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MassBit',
    bodyAttrs: {
      class: ['antialiased bg-white text-base'],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/fonts.css', '~/assets/css/graphiql.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/validate', ssr: true },
    { src: '~/plugins/vuera', ssr: false },
    { src: '~/plugins/notifications/ssr', ssr: true },
    { src: '~/plugins/notifications/client', ssr: false },
    '~/plugins/api/subApi.js',
    '~/plugins/api/solApi.js',
    '~/plugins/api/ethApi.js',
    '~/plugins/api/userApi.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  loading: {
    color,
  },

  env: {
    // Substrate Indexer
    subUrl: process.env.API_SUB_INDEX_URL,
    // Solana indexer
    solUrl: process.env.API_SOL_INDEX_URL,
    // Ethereum indexer
    ethUrl: process.env.API_ETH_INDEX_URL,
    // User management
    userApi: process.env.API_USER_MANAGAMENT,
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL,
    },
    query: {
      subUrl: process.env.API_QUERY_SUB_INDEX_URL,
      solUrl: process.env.API_QUERY_SOL_INDEX_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL,
    },
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  auth: {
    plugins: ['~/plugins/auth'],
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/',
    },
    strategies: {
      oauth2Github: {
        scheme: '~/schemes/github',
        endpoints: {
          login: process.env.API_USER_MANAGAMENT,
          logout: `${process.env.API_USER_MANAGAMENT}/auth/logout`,
        },
        token: {
          global: true,
          prefix: '',
          type: 'Bearer',
          name: 'Authorization',
          required: true,
        },
      },
    },
  },

  tailwindcss: {
    viewer: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  dayjs: {},

  sitemap: {
    gzip: true,
    hostname: 'https://indexer-app-staging.massbit.io',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'MassBit',
      short_name: 'MassBit',
      description,
      lang: 'en',
      theme_color: color,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
    transpile: ['vee-validate'],
  },
};
