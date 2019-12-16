<template>
  <section>
    <div class="home-container" :class="{ remove_page: navStatus }">
      <appStripes></appStripes>

      <div class="block home__banner">
        <div class="home-container__shape-1">
          <i class="fa fa-plus"></i>
        </div>

        <div class="home-header__intro-text">
          <h1 class="revealText home-header__title">
            <span>
              <img src="https://i.imgur.com/vI4dJR9.png" alt="mascote" style="width: 60px;" />
            </span>
          </h1>
          <div class="revealText home-header__text">
            <span>We combine well-written code, clean design & an entrepreneurial mindset to deliver digital beauty.</span>
          </div>
          <div class="home-container__shape-2">
            <img src="https://i.imgur.com/9he5plI.png" alt="shapes" />
          </div>
        </div>
        <div class="home-container__mascote">
          <img src="https://i.imgur.com/F41Ca3i.png" alt="mascote" />
        </div>
        <div class="home-container__background">
          <img src="https://i.imgur.com/IhtDB7k.png" alt="background" />
        </div>
      </div>
      <appSumList />

      <!-- <appInfoBlock></appInfoBlock> -->
      <!-- <div class="section"> -->
      <!-- <appTestimonial
            :name=" testimonialRipleys.name"
            :text=" testimonialRipleys.text"
            :company=" testimonialRipleys.company"
            :img=" testimonialRipleys.img"
            :backgroundColor=" testimonialRipleys.backgroundColor"
            :primaryColor=" testimonialRipleys.primaryColor"
            :secondaryColor=" testimonialRipleys.secondaryColor"
            :iconColor=" testimonialRipleys.iconColor"
      ></appTestimonial>-->
      <!-- </div> -->
      <appIconBlock
        :sectionTitle="homeIcons.sectionTitle"
        :titleOne="homeIcons.titleOne"
        :imgOne="homeIcons.imgOne"
        :textOne="homeIcons.textOne"
        :titleTwo="homeIcons.titleTwo"
        :imgTwo="homeIcons.imgTwo"
        :textTwo="homeIcons.textTwo"
        :titleThree="homeIcons.titleThree"
        :imgThree="homeIcons.imgThree"
        :textThree="homeIcons.textThree"
        :titleFour="homeIcons.titleFour"
        :imgFour="homeIcons.imgFour"
        :textFour="homeIcons.textFour"
      ></appIconBlock>
      <!-- <div class="section block">
        <appButton text="See Our Work" color="black" link="/projects" />
      </div>-->
      <appParallaxBlock></appParallaxBlock>

      <!-- <appVideo></appVideo> -->
      <!-- <appinfoBlockLarge
        :title="homeProjectSection.title"
        :subTitle="homeProjectSection.subTitle"
        :text="homeProjectSection.text"
        :imgOne="homeProjectSection.imgOne"
        :imgTwo="homeProjectSection.imgTwo"
        :imgThree="homeProjectSection.imgThree"
        :imgFour="homeProjectSection.imgFour"
        :imgOneText="homeProjectSection.imgOneText"
        :imgTwoText="homeProjectSection.imgTwoText"
        :imgThreeText="homeProjectSection.imgThreeText"
        :imgFourText="homeProjectSection.imgFourText"
        :backgroundColor="homeProjectSection.backgroundColor"
        :color="homeProjectSection.color"
      ></appinfoBlockLarge>-->
      <appTestimonial
        :name="testimonialGoogle.name"
        :text="testimonialGoogle.text"
        :company="testimonialGoogle.company"
        :img="testimonialGoogle.img"
        :backgroundColor="testimonialGoogle.backgroundColor"
        :primaryColor="testimonialGoogle.primaryColor"
        :secondaryColor="testimonialGoogle.secondaryColor"
        :iconColor="testimonialGoogle.iconColor"
      ></appTestimonial>
      <appTestimonial
        :name="testimonialRipleys.name"
        :text="testimonialRipleys.text"
        :company="testimonialRipleys.company"
        :img="testimonialRipleys.img"
        :backgroundColor="testimonialRipleys.backgroundColor"
        :primaryColor="testimonialRipleys.primaryColor"
        :secondaryColor="testimonialRipleys.secondaryColor"
        :iconColor="testimonialRipleys.iconColor"
      ></appTestimonial>
      <appTestimonial
        :name="testimonialLeWagon.name"
        :text="testimonialLeWagon.text"
        :company="testimonialLeWagon.company"
        :img="testimonialLeWagon.img"
        :backgroundColor="testimonialLeWagon.backgroundColor"
        :primaryColor="testimonialLeWagon.primaryColor"
        :secondaryColor="testimonialLeWagon.secondaryColor"
        :iconColor="testimonialLeWagon.iconColor"
      ></appTestimonial>
      <appFooter></appFooter>
    </div>
  </section>
</template>

<script>
import { TweenMax } from "gsap";
import About from "~/components/home/HomeAbout";
import InfoBlock from "~/components/shared/InfoBlock";
import Testimonial from "~/components/shared/Testimonial";
import InfoBlockLarge from "~/components/shared/InfoBlockLarge";
import IconBlock from "~/components/shared/IconBlock";
import Values from "~/components/about/Values";
import Stripes from "~/components/shared/Stripes";
import ParallaxBlock from "~/components/shared/ParallaxBlock";
import SumList from "~/components/shared/SumList";
import Button from "~/components/shared/Button";
import Footer from "~/components/shared/FooterMain";
import Video from "~/components/home/HomeVideo";

import META_TAGS from "~/data/meta-tags.js";

import { mapState, mapGetters, mapMutations } from "vuex";

var VueScrollTo = require("vue-scrollto");

export default {
  components: {
    appAbout: About,
    appFooter: Footer,
    appInfoBlock: InfoBlock,
    appVideo: Video,
    appTestimonial: Testimonial,
    appinfoBlockLarge: InfoBlockLarge,
    appIconBlock: IconBlock,
    appValues: Values,
    appStripes: Stripes,
    appSumList: SumList,
    appButton: Button,
    appParallaxBlock: ParallaxBlock
  },
  metaInfo: {
    title: META_TAGS.home.title,
    meta: [
      {
        key: "description",
        name: "description",
        content: META_TAGS.home.description
      }
    ]
  },
  data() {
    return {
      homePageClosed: true,
      animationTime: 1,
      delayTime: 1,
      title: META_TAGS.home.title

      // navigationOpen: false,
      // tlMax1: new TimelineMax({paused: true})
    };
  },
  methods: {},
  created() {},
  mounted() {
    if (this.$route.hash === "#contact/") {
      VueScrollTo.scrollTo("#contact", 500);
    }
    const context = this;
    TweenMax.from(".home-container", this.animationTime * 1.2, {
      delay: 0.3,
      opacity: 0,
      ease: Power2.easeInOut
    });

    TweenMax.from(".home-container__shape-1", this.animationTime * 1.2, {
      delay: context.delayTime * 0.3,
      opacity: 0,
      x: 100,
      rotation: 90,
      ease: Expo.easeInOut
    });

    TweenMax.from(".home-container__mascote", this.animationTime * 1.6, {
      delay: context.delayTime * 0.4,
      x: 500,
      rotation: 90,
      ease: Expo.easeInOut
    });
  },
  computed: mapState({
    homeProjectSection: state => state.infoBlockLarge.homeProjectSection,
    testimonialRipleys: state => state.testimonials.ripleys,
    testimonialGoogle: state => state.testimonials.google,
    testimonialLeWagon: state => state.testimonials.lewagon,
    homeIcons: state => state.icons.homeIcons,
    ...mapState(["navOpen", "projectOpen"]),
    ...mapGetters(["navStatus", "projectOpenStatus"])
  })
};
</script>

<style lang='scss' scoped>
.home-video {
  transition: all 0.7s ease-out;
  // background-color: black;
  height: 200vh;

  &.fade-to-black {
    background-color: black;
  }
}

.home-values {
  &__images {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 50% 50%;

    // img {
    //   width: 80%;
    //   margin-bottom: $within-element-margin-bottom;

    //   &:nth-child(1) {
    //     grid-column: 1;
    //     grid-row: 1/2;
    //   }

    //   &:nth-child(2) {
    //     grid-column: 2;
    //     grid-row: 2/2;
    //   }

    //   &:nth-child(3) {
    //     grid-column: 1;
    //     grid-row: 3/3;
    //   }
    // }
  }
}
.home-container--animated {
  opacity: 1;
}

.hidden {
  display: none;
}

.home-container {
  width: 100%;
  margin: 0 auto;
  // z-index: -1;

  // @include mq($from: wide) {
  //   padding-bottom: 100rem;
  // }

  &.fade-to-black {
    background-color: black;
    color: white;
  }

  .home-bottom {
    padding-bottom: 200rem;

    @include mq($from: tablet) {
      padding-bottom: 200rem;
    }
    @include mq($from: wide) {
      padding-bottom: 200rem;
    }
  }

  &__shape-1 {
    position: absolute;
    top: 15vh;
    right: 10px;
    padding: 10px 30px;
    opacity: 0.4;
    font-size: 3rem;
  }

  &__shape-2 {
    position: absolute;
    top: 60vh;

    @include mq($from: laptop) {
      top: 68vh;
    }
  }

  &__mascote {
    position: absolute;
    top: 60vh;
    right: 40vw;

    @include mq($from: tablet) {
      top: 35vw;
      right: 20vw;
    }
  }

  &__background {
    img {
      width: 300px;
    }

    @include mq($from: tablet) {
      text-align: center;

      img {
        width: 500px;
      }
    }
  }
}

.home-header {
  cursor: crosshair;

  &__intro-text {
    width: 80%;
    height: 40vh;
    // margin-top: 10vh;
  }
  &__title {
    font-family: $main-font;
    font-size: $large-title;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    top: 10vh;

    @include mq($from: mobile, $until: largeMobile) {
      font-size: $medium-title;
    }

    @include mq($from: laptop, $until: wide) {
      font-size: 5rem;
    }
  }

  &__text {
    margin-top: $within-element-margin-bottom;
    text-align: left;
    font-weight: 400;
    font-size: 2.5rem;
    margin-bottom: $within-element-margin-bottom;
    top: 20vh;

    @include mq($from: mobile, $until: largeMobile) {
      font-size: 2rem;
    }

    @include mq($from: mobile, $until: tablet) {
      width: 80vw;
    }

    @include mq($from: tablet) {
      width: 50vw;
    }

    @include mq($from: laptop) {
      font-size: 4rem;
      top: 25vh;
    }
  }

  &__overlay-2 {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #48a9a6;
  }

  &__overlay {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #101010;
  }

  &__screen {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    font-family: $main-font;
    color: #323232;
    font-size: 15rem;
    font-weight: 800;
    writing-mode: vertical-rl;
    opacity: 0.6;
    height: 100%;

    &--pink {
      color: $pink;
      animation: 1s appear ease-in;
    }

    @include mq($from: wide) {
      writing-mode: horizontal-tb;
      font-size: 30rem;
      top: 70%;
      left: 50%;
      width: 100%;
      height: 0%;
    }
  }

  // CREATE SEPERATE COMPONENT
  &__btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .btn {
    display: block;
    padding: 24px 48px;
    font-family: $main-font;
    font-size: 1.2rem;
    letter-spacing: 6px;
    color: $white;
    border: 2px solid $white;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    background: none;
    z-index: 1;
    cursor: crosshair;
    transition: 0.6s ease-out;

    &--small {
      padding: 15px 23px;
    }

    &:hover {
      color: black;
      cursor: crosshair;
    }

    &:before {
      content: "";
      position: absolute;
      background: $white;
      bottom: 0;
      left: 0;
      right: 0;
      top: 100%;
      z-index: -1;
      transition: top 0.6s ease-out;
    }

    &:hover:before {
      top: 0;
    }
  }

  // ANIMATIONS
  @keyframes appear {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.6;
    }
  }
}

.revealText {
  position: absolute;

  span {
    opacity: 0;
    animation: appear-text 0.0001s linear forwards;
    animation-delay: 1.4s;
  }

  &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 0%;
    height: 100%;
    background: $black;
    animation: revealText 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    animation-delay: 1s;
  }

  &.home-header__text {
    animation-delay: 2s;

    span {
      animation-delay: 2s;
    }

    &:after {
      background: $red;
      animation-delay: 1.4s;
    }
  }
}

@keyframes revealText {
  0% {
    left: 0;
    width: 0%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
}

@keyframes appear-text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/*! CSS Used from: https://www.christopher-ware.com/wp-content/cache/minify/83a3d.css ; media=all */
@media all {
  svg:not(:root) {
    overflow: hidden;
  }
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  ::-webkit-input-placeholder {
    color: #ccc;
  }
  ::-moz-placeholder {
    color: #ccc;
  }
  :-ms-input-placeholder {
    color: #ccc;
  }
  .deco-shape2 {
    position: absolute;
    top: 2320px;
    right: 40px;
    width: 440px;
  }
  @media (max-width: 1600px) {
    .deco-shape2 {
      top: 2480px;
      right: 0px;
    }
  }
  @media (max-width: 1250px) {
    .deco-shape2 {
      top: 3260px;
      right: 100px;
    }
  }
  @media (max-width: 660px) {
    .deco-shape2 {
      top: 2970px;
      right: -320px;
    }
  }
}
</style>