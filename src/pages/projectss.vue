<template>
  <section class="within-section projects">
    <div class="swiper-container loading">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url(https://i.imgur.com/hVLgLdx.png)">
          <img src="https://i.imgur.com/hVLgLdx.png" class="entity-img" />
          <div class="content">
            <p
              class="title"
              data-swiper-parallax="-30%"
              data-swiper-parallax-scale=".7"
            >Shaun Matthews</p>
          </div>
        </div>
        <div class="swiper-slide" style="background-image:url(https://i.imgur.com/tQHcj8X.png)">
          <img src="https://i.imgur.com/tQHcj8X.png" class="entity-img" />
          <div class="content">
            <p class="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Jobdex</p>
          </div>
        </div>
      </div>

      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      current: 0,
      scrollSlide: 0
    };
  },
  methods: {
    start: function() {}
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
    var mySwiper = new Swiper(sliderSelector, options);

    // Initialize slider
    mySwiper.init();
  }
};
</script>

<style lang='scss' scoped>
%transition_all_03s {
  transition: all 0.3s ease;
}
%backface_visibility_hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.swiper-container {
  width: 100%;
  height: 100vh;
  transition: opacity 0.6s ease;
  &.swiper-container-coverflow {
    padding-top: 10%;
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
  background-position: bottom;
  background-size: cover;
  height: 50vh !important;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);

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
  opacity: 0;
  visibility: hidden;
  @extend %transition_all_03s;
}
.swiper-button-prev {
  transform: translateX(50px);
}
.swiper-button-next {
  transform: translateX(-50px);
}
.swiper-container-horizontal {
  > .swiper-pagination-bullets {
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
    &.swiper-container-coverflow {
      padding-top: 20vh;
    }
  }
}
</style>