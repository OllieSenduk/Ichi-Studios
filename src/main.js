// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import App from '~/components/App';

export default function (Vue, { router, head, isClient, appOptions}) {
  head.link.push({
    rel: 'script',
    scr: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js'
  })
  appOptions.render = h => h(App);
  Vue.component('layout', DefaultLayout)
}