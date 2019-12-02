// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import App from "~/components/App";
import Vuex from "vuex";
import VueMq from "vue-mq";
import VueSweetAlert2 from "vue-sweetalert2";
import responsive from "vue-responsive";

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// require styles
import "swiper/css/swiper.css";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  if (process.isClient) {
  }
  Vue.use(BootstrapVue)


  Vue.use(responsive);
  Vue.use(VueSweetAlert2);

  appOptions.render = h => h(App);
  Vue.component("layout", DefaultLayout);

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
  });

  // HEADER OPTIONS
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
  });

  // head.script.push({
  //   src: 'https://unpkg.com/swiper/js/swiper.min.js',
  //   body: true
  // });

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://unpkg.com/swiper/css/swiper.min.css'
  // });
  // Swiper.use([Navigation, Keyboard, A11y]);

  // VUEX
  appOptions.store = new Vuex.Store({
    state: {
      projectOpen: false,
      navOpen: false,
      testimonials: {
        ripleys: {
          name: "Jules de Blecourt - Head of Business Development Ripley's",
          text:
            "Result-driven go-getters. They helped us with some of our online campaigns and their ability to execute was amazing!",
          company: "Ripley's Believe it Or Not",
          img: "https://i.imgur.com/vfdqpSy.png",
          backgroundColor: "black",
          primaryColor: "white",
          secondaryColor: "#F4F4F1",
          iconColor: "#F33766"
        },
        lewagon: {
          name: "Ellyn Bouscasse - Manager Le Wagon Barcelona",
          text:
            "Experts when it comes to anything code or design related, we're very happy to have them!",
          company: "Le Wagon",
          img: "https://i.imgur.com/AIczI1C.png",
          backgroundColor: "#89A7A7",
          primaryColor: "white",
          secondaryColor: "#F4F4F1",
          iconColor: "#F33766"
        },
        google: {
          name: "Joscha Koepke - Global Product Lead Google",
          text:
            "Oliver was amazing. Always completely dedicated and had a great way of making complex situations simple. I loved his personal style and would recommend him to everybody!.",
          company: "Google",
          img: "https://i.imgur.com/dHbVhGg.png",
          backgroundColor: "lightsteelblue",
          primaryColor: "black",
          secondaryColor: "black"
        }
      },
      infoBlockLarge: {
        homeProjectSection: {
          title: "Our pride is in our work!",
          subTitle:
            "To truly make an impact, we need to dig deep in not just your user’s demographic, but also their psychographic. This way we can decide on a road to success.",
          text:
            "Together we define what a win looks like and how we’ll structure the steps to get there. We split the journey up into iterations where we can test, reflect, improve and adjust. Through our systematic feedback loop we make sure that everything runs smoothly and that there are no sudden surprises.",
          imgOne: "https://i.imgur.com/QuZXwKH.gif",
          imgTwo:
            "https://thumbs.gfycat.com/BlackandwhiteAdmiredCoral-size_restricted.gif",
          imgThree: "https://i.imgur.com/3ClzCE0.png",
          imgFour: "https://i.imgur.com/0GCCR2h.gif",
          imgOneText: "",
          imgTwoText: "Epic Mural by Munir de Vries",
          imgThreeText: "Crypto Currency Trading Algorithm",
          imgFourText: "5 awesome tech prototypes for IKEA",
          backgroundColor: "infoblock__large.backgroundColor",
          color: "infoblock__large.color"
        }
      },
      icons: {
        homeIcons: {
          sectionTitle: "Our Skillset",
          titleOne: "Digital Platforms",
          imgOne: "https://i.imgur.com/oJwCGCF.png",
          textOne:
            "We help you from ideation to design & development to built a full-blown & scalable prototype and get to market fast.",
          titleTwo: "Company Websites",
          imgTwo: "https://i.imgur.com/CWL4Ku2.png",
          textTwo:
            "Create a beautiful website that shows your unique selling points & wows potential clients & users",
          titleThree: "Startup Sprints",
          imgThree: "https://i.imgur.com/u6oloqI.png",
          textThree:
            "We facilitate the Google design sprint with your team to help you learn how your customers will respond to new product ideas before investing large amounts of money.",
          titleFour: "Collaborate?",
          imgFour: "https://i.imgur.com/dZ3FR2r.png",
          textFour:
            "Let's get in touch to discuss your ideas and see if we're a fit!"
        }
      },
      projects: [
        {
          pageNum: 1,
          identifier: "ikea",
          title: "IKEA",
          information: {
            client: "IKEA",
            categories: [
              "technical delivery",
              "corporate",
              "project management"
            ]
          },
          subTitle: "Capture the wonderful everyday",
          problem:
            "How can IKEA utilize their internal talent better to respond to the technical challenges ahead?",
          summary:
            "Creating 5 proof of concept applications that capture IKEA's values & goals.",
          solution:
            "We helped supervise the creation of 5 new technical MVP's from design phase to code. This served as a way to both get the IKEA staff up to speed on how to develop these type of projects, as well as have them built out potential new products IKEA could start implementing either for internal use, or to integrate within the existing customer-facing IKEA app. At the end of the sprints, the finished projects were presented to the management teams.Amongst the projects was a customer-facing application that could tell you if the current IKEA products in your shopping basket would fit inside the back of your car and a project management solution that could be used internally.",
          homeImg: {
            imgLeft: "https://i.imgur.com/Ap049M0.png",
            imgRight: "https://i.imgur.com/jea1Puk.png"
          },
          hasVideo: false,
          video: "",
          images: {
            imgHeader: "https://i.imgur.com/oRTWW3W.jpg",
            imgOne: "https://i.imgur.com/QuZXwKH.gif",
            imgTwo: "https://i.imgur.com/O6XItd1.png"
          },
          url: "/ikea",
          homeText: "The Wonderful Everyday",
          background: `radial-gradient(#2B3760, #0B1023)`,
          visit: false,
          hidden: false
        },
        {
          pageNum: 1,
          identifier: "lawspot",
          title: "LAWSPOT",
          information: {
            client: "Lawspot",
            categories: ["technical delivery", "startup", "seo"]
          },
          subTitle: "Find the right lawyer for your legal problems",
          problem:
            "As Lawspot was growing, they were looking for help to add features to their application and improve SEO.",
          summary:
            "Help the everyday person find the legal support they deserve!",
          solution:
            "After doing an initial code audit, we created a road-map to add new features and improve upon existing ones. By working closely with the CEO of Lawspot, as well as their SEO specialist, we were able to quickly asses the existing pain points and built the solutions needed.",
          homeImg: {
            imgLeft: "https://i.imgur.com/aIsAVTR.jpg",
            imgRight: "https://i.imgur.com/zGKi8MQ.png"
          },
          hasVideo: false,
          video: "",
          images: {
            imgHeader: "https://i.imgur.com/5zPCrJw.png",
            imgOne: "https://i.imgur.com/FQOIiZV.jpg",
            imgTwo: "https://i.imgur.com/aa1ODAE.png"
          },
          url: "/ikea",
          homeText: "Find the right legal counsel",
          background: `radial-gradient(#2B3760, #0B1023)`,
          hidden: true,
          visit: true,
          linkProject: "https://www.lawspot.nl/"
        },
        {
          pageNum: 2,
          identifier: "jobdex",
          title: "Job Dex",
          information: {
            client: "Job Dex",
            categories: ["startup", "strategy", "development"]
          },
          subTitle: "Find the right hospitality talent.",
          problem:
            "The hospitality industry needs more qualified flexible workers.",
          summary:
            "The platform for freelancers looking for work in the hospitality industry.",
          solution:
            "Marketplace for freelance hospitality workers which manages the scheduling of employees with the current staff and adds freelancers from the marketplace where needed.",
          homeImg: {
            imgLeft: "https://i.imgur.com/e6jQfAI.png",
            imgRight: "https://i.imgur.com/u9HlAhe.png"
          },
          hasVideo: false,
          images: {
            imgHeader: "https://i.imgur.com/tQHcj8X.png",
            imgOne: "https://i.imgur.com/RasM3Du.png"
          },
          url: "/jobdesk",
          homeText: "Working in the hospitality industry.",
          background: `radial-gradient(#2B3760, #0B1023)`,
          hidden: true,
          visit: false
        },
        {
          pageNum: 3,
          identifier: "crypto-trading-bot",
          title: "Automaat Space",
          information: {
            client: "Home Grown",
            categories: ["algorithm", "data analysis", "tech"]
          },
          subTitle: "Seamless Trading",
          problem:
            "Traditional day-trading suffers from a multitude of problems. For one, Human beings need sleep. Secondly, the human is full of biases when it comes to trading.",
          summary:
            "Automating our trades in the volatile cryptocurrency market.",
          solution:
            "The first step was to create a program that decides on the best trading strategies through data it collects from multiple api's. The next step will be to add self-learning algorithms to increase the likelihood of the algorithms making the right calls. Automaat.space is still in beta, but has proven to be able to be increasingly profitable in multiple market scenario’s. We show a little sneak peak here:.",
          homeImg: {
            imgLeft: "https://i.imgur.com/3lYIFWs.png",
            imgRight: "https://i.imgur.com/enHVYgi.png"
          },
          hasVideo: false,
          images: {
            imgHeader: "https://i.imgur.com/CJ3yaq3.png",
            imgTwo: "https://i.imgur.com/0pIlgPZ.png"
          },
          url: "/crypto-trading-bot",
          homeText: "Seamless Trading.",
          background: `radial-gradient(#2B3760, #0B1023)`,
          hidden: true,
          visit: true,
          linkProject: "http://automaat-space.herokuapp.com/"
        }
        // creativos: {
        //   pageNum: 1,
        //   identifier: "creativos_de_la_noche",
        //   title: "Creativos de la Noche",
        //   imgLeft: "https://i.imgur.com/ieEjiHi.jpg",
        //   imgRight: "https://i.imgur.com/AG1ezvi.jpg",
        //   url: "/creativos-de-la-noche",
        //   text: "Campaign for Creativity",
        //   categories: ["Event", "Production", "Photography", "Film"],
        //   background: `radial-gradient(#4E3022, #161616)`,
        //   hidden: true
        // },
      ]
    },
    getters: {
      navStatus: state => {
        return state.navOpen;
      },
      projectOpenStatus: state => {
        return state.projectOpen;
      },
      projects: state => {
        return state.projects;
      }
    },
    mutations: {
      setNavStatus(state) {
        state.navOpen = !state.navOpen;
      },
      setProjectStatus(state) {
        state.projectOpen = !state.projectOpen;
      }
    },
    actions: {
      updateNavStatus(context) {
        context.commit("setNavStatus");
      },
      updateProjectStatus(context) {
        context.commit("setProjectStatus");
      }
    }
  });
}
