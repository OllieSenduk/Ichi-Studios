// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import App from '~/components/App';
import Vuex from 'vuex'
import VueMq from 'vue-mq'

export default function (Vue, { router, head, isClient, appOptions}) {
  Vue.use(Vuex)

  appOptions.render = h => h(App);
  Vue.component('layout', DefaultLayout)
    
    // RESPONSIVE DESIGN 
  Vue.use(VueMq, {
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1250,
      desktop: Infinity,
    }
  })

    // HEADER OPTIONS
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap'
  })


    // VUEX
  appOptions.store = new Vuex.Store({
    state: {
      navOpen: false
    },
    getters: {
      navStatus:  state => {
        return state.navOpen
      }
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



