// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import App from '~/components/App';
import Vuex from 'vuex'
import VueMq from 'vue-mq'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScrollmagic from 'vue-scrollmagic'


export default function (Vue, { router, head, isClient, appOptions}) {
  Vue.use(Vuex)
  Vue.use(VueObserveVisibility)
  if (process.isClient) {
    Vue.use(VueScrollmagic)
  }

  appOptions.render = h => h(App);
  Vue.component('layout', DefaultLayout)
    
    // RESPONSIVE DESIGN 
  Vue.use(VueMq, {
    breakpoints: {
      mobile: 320,
      largeMobile: 500,
      tablet: 740,
      laptop: 980,
      wide: 1300,
      external: 1600
    }
  })

    // HEADER OPTIONS
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap'
  })

  head.link.push({
    rel: 'script',
    src: "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
  })

  head.link.push({
    rel: 'script',
    src: "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"
  })


    // VUEX
  appOptions.store = new Vuex.Store({
    state: {
      navOpen: false,
    },
    getters: {
      navStatus:  state => {
        return state.navOpen
      },
    },
    mutations: {
      setNavStatus (state) {
        state.navOpen = !state.navOpen
      }
    },
    actions: {
      updateNavStatus (context) {
        context.commit('setNavStatus')
      }
    }
  })

}



