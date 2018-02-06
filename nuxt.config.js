module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'masaakikunsan.com',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'masaakikunsan' },
      { hid: 'keyword', name: 'keyword', content: 'masaakikunsan, masaaki' },
      { name: 'theme-color', content: '#E83B66' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/megumi.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'inherit' },
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
    }
  }
}
