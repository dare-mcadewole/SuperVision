
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'SuperVision',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Anti-Vandalism Supervisory Panel. Remote Surveillance with System Controls and Sensors Tracking. PIR Sensor, Doppler, Intrusion System.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'vandalism, supervisory, panel, surveillance, remote surveillance, system controls, sensor, tracking, PIR, doppler, dopler, intrusion, intrusion system'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/animate.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/foundation.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/icofont/icofont.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/fonts.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/base.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
