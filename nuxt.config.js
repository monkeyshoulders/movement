module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Movement Landing Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'movement landing page' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,800|Playfair+Display:900' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.0.10/js/all.js', integrity: 'sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+', crossorigin: 'anonymous'}
    ]
  },
  modules: [
    ['storyblok-nuxt', {
      accessToken: 'Z4ziIxTA9MkYUY0a3tneDQtt',
      cacheProvider: 'memory'
    }]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ["vue2-google-maps"]
  },
  plugins: [
    {src: '~/plugins/vue2-google-maps.js'}
  ]
}
