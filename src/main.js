// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import App from '~/components/App';
import Vuex from 'vuex'
import VueMq from 'vue-mq'
import VueSweetalert2 from 'vue-sweetalert2';


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';


export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  if (process.isClient) {
    const VueScrollmagic = require('vue-scrollmagic').default;
    Vue.use(VueScrollmagic)
    var VueScrollTo = require('vue-scrollto');

    Vue.use(VueScrollTo)

  }
  Vue.use(VueSweetalert2);




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

  // VUEX
  appOptions.store = new Vuex.Store({
    state: {
      navOpen: false,
      testimonials: {
        ripleys: {
          name: 'Jules de Blecourt - Head of Business Development Ripley\'s',
          text: "They understand what it means to run campaigns in todays world. Their creativity and ability to execute is amazing.",
          company: "Ripley's Believe it Or Not",
          img: 'https://i.imgur.com/vfdqpSy.png',
          backgroundColor: "black",
          primaryColor: "white",
          secondaryColor: "#F4F4F1",
          iconColor: "#F33766"
        },
        canon: {
          name: 'Rob Thomas - Marketing Director Canon Europe',
          text: "A progressive style of cinematography and project marketing.",
          company: "Canon",
          img: "https://i.imgur.com/dPNv7nY.png",
          backgroundColor: "lightsteelblue",
          primaryColor: "black",
          secondaryColor: "black"
        }
      },
      infoBlockLarge: {
        homeProjectSection: {
          title: "Our pride is in our projects",
          subTitle: "All of the people involved in Ollsum have been perfecting their skills for years to be able to identify solutions and execute with high speed and precision.",
          text: "Wether you come to us for technical delivery, a marketing video or a full- blown rebranding, we always work side-by-side with you and will always be obsessed with creating stunning pieces of work that will cause jaws to drop.",
          imgOne: "https://i.imgur.com/SHnSWQe.jpg",
          imgTwo: "https://thumbs.gfycat.com/BlackandwhiteAdmiredCoral-size_restricted.gif",
          imgThree: "https://i.imgur.com/3ClzCE0.png",
          imgFour: "https://i.imgur.com/0GCCR2h.gif",
          imgOneText: "Music video shoot by Sam Smith",
          imgTwoText: "Epic Mural by Munir de Vries",
          imgThreeText: "Crypto Currency Trading Algorithm",
          imgFourText: "5 awesome tech prototypes for IKEA",
          backgroundColor: "infoblock__large.backgroundColor",
          color: "infoblock__large.color"
        },
      },
      icons: {
        homeIcons: {
          sectionTitle: "Our Skillset",
          titleOne: "Campaigns",
          imgOne: "https://i.imgur.com/oJwCGCF.png",
          textOne: "By combining your brand's attributes & your user's profiles, we create an actionable, multi-platform strategy where we activate your users.",
          titleTwo: "Web/Platform",
          imgTwo: "https://i.imgur.com/CWL4Ku2.png",
          textTwo: "Wether you're looking for a stunning company website or a full-blown, scalable MVP for your startup: we combine the latest technologies with intuitive design to wow your users.",
          titleThree: "Content",
          imgThree: "https://i.imgur.com/QFETLr1.png",
          textThree: "Shareable & engaging content optimized for your user's demographic & psycographic on the platforms they love most.",
          titleFour: "Film",
          imgFour: "https://i.imgur.com/QbIUWph.png",
          textFour: "Showcasing your brand, product or vision through captivating videos.",
        }
      },
    },
    getters: {
      navStatus: state => {
        return state.navOpen
      },
    },
    mutations: {
      setNavStatus(state) {
        state.navOpen = !state.navOpen
      }
    },
    actions: {
      updateNavStatus(context) {
        context.commit('setNavStatus')
      }
    }
  })

}



