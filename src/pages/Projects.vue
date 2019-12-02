<template>
  <section class="within-section projects" :class="{ remove_page: navStatus }">
    <appPageHeader title="Projects"></appPageHeader>
    <div class="swiper-cta">Swipe or Select a Project</div>
    <div class="swiper-container loading">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :id="project.identifier"
          :style="{ backgroundImage: `url(${project.images.imgHeader})`}"
          v-for="project in projects"
        >
          <img :src="project.images.imgHeader" class="entity-img" />
          <div class="content">
            <p
              class="title"
              data-swiper-parallax="-30%"
              data-swiper-parallax-scale=".7"
            >{{project.title}}</p>
          </div>
        </div>
      </div>

      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev swiper-button"></div>
      <div class="swiper-button-next swiper-button"></div>
    </div>
  </section>
</template>

<script>
import PageHeader from "~/components/shared/PageHeader";

import Swiper from "swiper";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    appPageHeader: PageHeader
  },
  data() {
    return {
      current: 0,
      scrollSlide: 0
    };
  },
  methods: {
    goToProject(e) {
      console.log(this.projects)
      const identifier = e.target.id;
      this.$router.push({ path: `/projects/${identifier}` });
    },
    checkForInitialSlide() {
      const identifier = this.$router.currentRoute.hash;
      if (identifier) {
        return this.projects.findIndex(
          project => project.identifier === identifier.substr(1)
        );
      }
    }
  },
  mounted() {
    // Params
    var sliderSelector = ".swiper-container",
      options = {
        loop: true,
        speed: 800,
        slidesPerView: 1.5, // or 'auto'
        spaceBetween: 20,
        centeredSlides: true,
        effect: "coverflow", // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
          rotate: 50, // Slide rotate in degrees
          stretch: 0, // Stretch space between slides (in px)
          depth: 50, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: true // Enables slides shadows
        },
        grabCursor: true,
        parallax: true,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // breakpoints: {
        //   600: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        //   }
        // },
        // Events
        on: {
          imagesReady: function() {
            this.el.classList.remove("loading");
          }
        }
      };
    const initialSlideIndex = this.checkForInitialSlide();
    if (initialSlideIndex) {
      options.initialSlide = initialSlideIndex;
    }
    var mySwiper = new Swiper(sliderSelector, options);
    // Initialize slider
    mySwiper.init();
  },
  computed: mapState({
    projects: state => state.projects,
    ...mapState(["navOpen"]),
    ...mapGetters(["navStatus"])
  })
};
</script>

<style lang="scss" scoped>
.swiper-cta {
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);

  @include mq($from: laptop) {
    display: none;
  }
}

%transition_all_03s {
  transition: all 0.3s ease;
}
%backface_visibility_hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.swiper-container {
  width: 100%;
  height: 90vh;
  transition: opacity 0.6s ease;
  &.swiper-container-coverflow {
    padding-top: 15vh;
  }
  &.loading {
    opacity: 0;
    visibility: hidden;
  }
  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
}
.swiper-wrapper {
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  height: 50vh !important;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &::after {
    content: "";
    background-image: inherit;
    background-position: bottom;
    background-size: cover;
    transform: scaleY(-1);
    width: inherit;
    height: 40%;
    position: absolute;
    bottom: -41%;
    opacity: 0.4;
  }
  &::before {
    z-index: 1;
    content: "";
    width: inherit;
    height: 42%;
    position: absolute;
    bottom: -42%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), #fff);
  }
  .slide-inner {
  }
  .entity-img {
    display: none;
  }
  .content {
    position: absolute;
    top: -10%;
    left: -20%;
    width: 50%;
    padding-left: 5%;
    color: black;
    .title {
      font-size: 2.6em;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .caption {
      display: block;
      font-size: 13px;
      line-height: 1.4;
    }
  }
}
[class^="swiper-button-"] {
  width: 44px;
  @extend %transition_all_03s;
}

.swiper-button {
  color: $red;
  width: 100px;
  height: 50%;
}
.swiper-button-prev {
  transform: translateX(50px);
}
.swiper-button-next {
  transform: translateX(-50px);
}
.swiper-container-horizontal {
  > .swiper-pagination-bullets {
    // @include mq($from: laptop) {
    //   padding-top: 20vh;
    // }

    @include mq($from: mobile) {
      bottom: 10%;
    }

    // @include mq($from: tablet) {
    //   bottom: 10vh;
    // }

    // @include mq($from: wide) {
    //   padding-top: 15vh;
    // }
    .swiper-pagination-bullet {
      margin: 0 9px;
      position: relative;
      width: 12px;
      height: 12px;
      background-color: #fff;
      opacity: 0.4;
      @extend %transition_all_03s;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 18px;
        height: 18px;
        transform: translate(-50%, -50%);
        border: 0px solid #fff;
        border-radius: 50%;
        @extend %transition_all_03s;
      }
      &:hover,
      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
      &.swiper-pagination-bullet-active {
        &::before {
          border-width: 1px;
        }
      }
    }
  }
}
// Mediaqueries
@media (max-width: 1180px) {
  .swiper-slide {
    .content {
      .title {
        font-size: 25px;
      }
      .caption {
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 1023px) {
  .swiper-container {
    height: 90vh;
  }
}
</style>
