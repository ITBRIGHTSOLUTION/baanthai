// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-gtag',
    'nuxt3-meta-pixel',
    '@nuxtjs/i18n',
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  css: ['@/styles/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  spaLoadingTemplate: false,
  plugins: [
    { src: '~/plugins/fontawesome', ssr: false },
  ],
  ssr: false,
  i18n: {
    vueI18n: './i18n.config.js' // if you are using custom path, default 
  },
  // gtag: {
  //   property: {
  //     id: 'G-VC837F6PL5', // Replace with your actual Google Analytics Measurement ID
  //   },
  // },
  app: {
    head: {
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-VC837F6PL5', async: true },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VC837F6PL5');
          `,
          type: 'text/javascript'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag-inline': ['innerHTML']
      }
    }
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '775690060655691',
    autoPageView: true,
    disabled: false,
    // debug: process.env.NODE_ENV !== 'production',
    // dev: process.env.NODE_ENV !== 'production',
    version: '2.0'
  },

  // Router configuration for setting base URL
  router: {
    base: '/' // Replace with your actual base URL if applicable
  },

  build: {
    transpile: ['nuxt3-meta-pixel']
  }
})

