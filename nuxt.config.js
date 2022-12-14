export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jewel Home',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/assets/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/font-awesome.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/templatemo-klassy-cafe.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/owl-carousel.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/lightbox.css'
      }
    ],
    script:[
      {
        src: "/assets/js/jquery-2.1.0.min.js",
        type: "text/javascript",
        body: true,
        ssr: false,
      },
      {
        src: "/assets/js/popper.js",
        type: "text/javascript",
        body: true,
        ssr: false,
      },
      {
        src: "/assets/js/bootstrap.min.js",
        type: "text/javascript",
        body: true,
        ssr: false,
      },
      // {
      //   src: "/assets/js/owl-carousel.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/jsaccordions.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/datepicker.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/scrollreveal.min.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/waypoints.min.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/jquery.counterup.min.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/imgfix.min.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/slick.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/lightbox.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/isotope.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
      // {
      //   src: "/assets/js/custom.js",
      //   type: "text/javascript",
      //   body: true,
      //   ssr: false,
      // },
    ],

  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/files/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vform.js',
    '~/plugins/toast.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
	'@nuxt/content',
  '@nuxtjs/axios',
  '@nuxtjs/auth-next'
  ],

  //nuxt auth package configaration
  auth:{
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          //property: 'user',
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'post' }
        },
        redirect: {
          login: '/login',
          logout: '/',
          callback: '/login',
          home: '/dashboard'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-axios
  axios: {
      baseURL: 'http://127.0.0.1:8000/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
