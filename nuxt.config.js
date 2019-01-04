const baseDomain = 'https://masaakikunsan.com'

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
      { name: 'theme-color', content: '#E83B66' },
      { name: 'og:locale', content: 'ja_JP' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'masaakikunsan.com' },
      { name: 'og:description', content: 'masaakikunsan HP' },
      { name: 'og:url', content: `${baseDomain}/` },
      { name: 'og:site_name', content: 'masaakikunsan.com' },
      { name: 'og:image', content: `${baseDomain}/megumi.png` },
      {
        name: 'og:image:secure_url',
        content: `${baseDomain}/ogps/fabric-tokyo_ogp.png`
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: 'masaakikunsan HP' },
      { name: 'twitter:title', content: 'masaakikunsan.com' },
      { name: 'twitter:site', content: '@masaakikunsan' },
      {
        name: 'twitter:image',
        content: `${baseDomain}/megumi.png`
      },
      { name: 'twitter:creator', content: '@masaakikunsan' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/megumi.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'inherit' },
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
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
