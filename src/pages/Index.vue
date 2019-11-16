<template>
  <section class="home-header" :class="{ remove_page: navStatus }">
    <div class="page-stripes">
      <div class="page-stripes__one"></div>
      <div class="page-stripes__two"></div>
      <div class="page-stripes__three"></div>
    </div>
    <div class="home-header__container">
      <div class="home-header__overlay" :class="{hidden: !homePageClosed}">
        <p class="home-header__screen">
          OLLS
          <span class="home-header__screen--pink">U</span>M
        </p>
        <div class="home-header-intro">
          <div class="btn home-header__btn" @click="fadeOutAbove">EXPLORE</div>
        </div>
      </div>
      <div class="home-header__overlay-2" :class="{hidden: !homePageClosed}"></div>
      <!-- <div class="home-container" :class="{hidden: homePageClosed}">
        <div class="block section home__banner">
          <div class="home-container__shape-1">
            <i class="fa fa-plus"></i>
          </div>
          <div class="home-header__intro-text">
            <h1 class="home-header__title" :class="{revealText: !homePageClosed}">
              <span>
                <img src="https://i.imgur.com/vI4dJR9.png" alt="mascote" style="width: 60px;" />
                Ollsum
              </span>
            </h1>
            <div class="home-header__text within-section" :class="{revealText: !homePageClosed}">
              <span>We combine well-written code, clean design & an entrepeneurial mindset to deliver digital beauty.</span>
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
        <appInfoBlock></appInfoBlock>
        <div class="section">
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
      <!-- </div>
        <div class="section">
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
      </div>-->
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
        ></appinfoBlockLarge>
        <div class="section">
          <appTestimonial
            :name="testimonialCanon.name"
            :text="testimonialCanon.text"
            :company="testimonialCanon.company"
            :img="testimonialCanon.img"
            :backgroundColor="testimonialCanon.backgroundColor"
            :primaryColor="testimonialCanon.primaryColor"
            :secondaryColor="testimonialCanon.secondaryColor"
            :iconColor="testimonialCanon.iconColor"
          ></appTestimonial>
      </div>-->
      <!-- <div class="home-video">
          <img src="https://i.imgur.com/SHnSWQe.jpg" alt width="500" />
      </div>-->
      <!-- 
          <div class="section">
            <div class="home-values__images">
              <img src="https://i.imgur.com/SHnSWQe.jpg" alt="our_values" />
              <img src="https://i.imgur.com/07Pc9JM.jpg" alt="our_values" />
              <img src="https://i.imgur.com/rdWlkBq.jpg" alt="our_values" />
            </div>
      </div>-->
      <!-- 
        <div class="block">
          <ClientOnly>
            <appAbout :animationTime="animationTime" :delayTime="delayTime"></appAbout>
          </ClientOnly>
      </div>-->
      <!-- <div class="home-bottom">
          <appFooter></appFooter>
      </div>-->
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

import Footer from "~/components/shared/Footer";
import Video from "~/components/home/HomeVideo";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    appAbout: About,
    appFooter: Footer,
    appInfoBlock: InfoBlock,
    appVideo: Video,
    appTestimonial: Testimonial,
    appinfoBlockLarge: InfoBlockLarge,
    appIconBlock: IconBlock,
    appValues: Values
  },
  data() {
    return {
      homePageClosed: true,
      animationTime: 1,
      delayTime: 1,
      colors: [
        { left: "black", middle: "grey", right: "white" },
        { left: "#45a247", middle: "#4c879b", right: "#4c879b" },
        { left: "white", middle: "white", right: "white" },
        { left: "#37ccfd", middle: "#b32fff", right: "#b32fff" }
      ]
      // navigationOpen: false,
      // tlMax1: new TimelineMax({paused: true})
    };
  },
  methods: {
    fadeOutAbove: function() {
      const context = this;
      TweenMax.to(".home-header__btn", this.animationTime * 0.7, {
        y: -100,
        opacity: 0
      });

      TweenMax.to(".home-header__screen", this.animationTime * 1.2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: context.delayTime
      });

      TweenMax.from(".home-header__overlay", this.animationTime * 1.2, {
        ease: Power2.easeInOut
      });

      TweenMax.to(".home-header__overlay", this.animationTime * 1.2, {
        delay: context.delayTime,
        top: "-110%",
        ease: Expo.easeInOut
      });

      TweenMax.to(".home-header__overlay-2", this.animationTime * 1.2, {
        delay: context.delayTime * 1.2,
        top: "-110%",
        ease: Expo.easeInOut,
        onComplete: context.completedIntro
      });

      TweenMax.from(".home-container", this.animationTime * 1.2, {
        delay: 1.4,
        opacity: 0,
        ease: Power2.easeInOut
      });

      TweenMax.to(".home-container", this.animationTime * 1.2, {
        opacity: 1,
        y: -300,
        delay: context.delayTime * 1.6,
        ease: Power2.easeInOut
      });

      TweenMax.from(".home-container__shape-1", this.animationTime * 1.2, {
        delay: context.delayTime * 2.2,
        opacity: 0,
        x: 100,
        rotation: 90,
        ease: Expo.easeInOut
      });

      TweenMax.from(".home-container__mascote", this.animationTime * 1.6, {
        delay: context.delayTime * 4.2,
        x: 500,
        rotation: 90,
        ease: Expo.easeInOut
      });

      //  this.tlMax1.reversed(!this.tlMax1.reversed());
    },
    completedIntro() {
      this.$router.push({ path: "/home" });
    },
    fadeToBlack() {
      const trigger = document.querySelector(".home-video");
      const scene = this.$scrollmagic
        .scene({
          triggerElement: trigger,
          offset: -200
          //   duration: 1
        })
        .setClassToggle(".home-container", "fade-to-black");
      this.$scrollmagic.addScene(scene);
      this.$scrollmagic.attachTo(this.$refs.scrollBox);
    }
  },
  mounted() {
    this.fadeToBlack();

    // this.tlMax1.to(".navigation__page-wrapper", 0.3, {
    //     top: "0%",
    //     ease: Expo.easeInOut,
    // })

    // this.tlMax1.staggerFrom(".navigation__item", 0.4, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);
    // this.tlMax1.reverse();
  },
  computed: mapState({
    homeProjectSection: state => state.infoBlockLarge.homeProjectSection,
    testimonialRipleys: state => state.testimonials.ripleys,
    testimonialCanon: state => state.testimonials.canon,
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

.home__banner {
}

//

.hidden {
  display: none;
}

.home-container {
  width: 100%;
  margin: 0 auto;
  // z-index: -1;
  position: absolute;
  top: 40%;
  transform: translate(0, -50%);
  overflow-x: hidden;
  transition: all 0.7s ease-out;

  @include mq($from: tablet, $until: laptop) {
    top: 30%;
  }

  @include mq($from: laptop) {
    top: 50%;
  }
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
</style>