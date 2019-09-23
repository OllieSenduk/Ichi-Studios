<template>
  <section class="home-about">
    <div class="home-about__block one">
      <div class="home-about__skills">
        Brand
        <br />
        <br />Campaigns
      </div>
    </div>
    <div class="home-about__block two">
      <div class="home-about__skills">
        Website & App
        <br />
        <br />Development
      </div>
    </div>
    <div class="home-about__block three">
      <div class="home-about__skills">
        Growth &
        <br />
        <br />Stragegy
      </div>
    </div>
    <div class="home-about__btn">
      <appBtn text="About us"></appBtn>
    </div>
  </section>
</template>

<script>
import { TweenMax } from "gsap";

import Button from "~/components/shared/Button";
import { setTimeout } from "timers";

export default {
  props: ["animationTime", "delayTime"],
  components: {
    appBtn: Button
  },
  data() {
    return {
      homeAnimationRunning: true
    };
  },
  methods: {
    startPageAnimation() {
      const boxes = [".one", ".two", ".three"];
      const trigger = document.querySelector(".home-about");

      const scene = this.$scrollmagic
        .scene({
          triggerElement: trigger,
          offset: -20
        })
        .setClassToggle(".one", "is-active");
      // .addIndicators({ name: "2 (duration: 300)" });
      this.$scrollmagic.addScene(scene);

      const scene2 = this.$scrollmagic
        .scene({
          triggerElement: trigger,
          triggerHook: "onCenter"
        })
        .setClassToggle(".two", "is-active");
      // .addIndicators({ name: "2 (duration: 300)" });
      this.$scrollmagic.addScene(scene2);

      const scene3 = this.$scrollmagic
        .scene({
          triggerElement: trigger,
          triggerHook: 0.2
        })
        .setClassToggle(".three", "is-active");
      // .addIndicators({ name: "2 (duration: 300)" });
      this.$scrollmagic.addScene(scene3);

      this.$scrollmagic.attachTo(this.$refs.scrollBox);

      // const tl = new TimelineMax({});

      // tl.from(".one", 0.2, {
      //   // delay: context.delayTime * 2.2,
      //   opacity: 0,
      //   x: 100,
      //   rotation: 90,
      //   ease: Expo.easeInOut
      // });

      // tl.to(".two", 2, {
      //   opacity: 1,
      //   x: -10
      // });

      // tl.to(".three", 2, {
      //   opacity: 1,
      //   x: 10
      // });

      // const box1 = this.$scrollmagic.scene({
      //   triggerElement: ".home-about",
      //   triggerHook: 1
      //   // duration: 2
      // });

      // const box2 = this.$scrollmagic.scene({
      //   triggerElement: ".two"
      //   // triggerHook: 1.2,
      //   // duration: 2
      // });

      // const box3 = this.$scrollmagic
      //   .scene({
      //     triggerElement: ".three"
      //     // triggerHook: 0.5,
      //     // duration: 2
      //   })

      //   .setTween(tl);
      // this.$scrollmagic.addScene(box1);
      // this.$scrollmagic.addScene(box2);
      // this.$scrollmagic
      //   .addScene(box3)
      //   .addIndicators({ name: "2 (duration: 300)" });

      this.$scrollmagic.attachTo(this.$refs.scrollBox);
    }
  },
  mounted() {
    const context = this;
    // window.setTimeout(() => {
    //   context.homeAnimationRunning = false;
    // }, 5000);
    this.startPageAnimation();
  }
};
</script>

<style lang='scss' scoped>
.home-about {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 10vh 1fr 1fr;

  &__block {
    width: 40vw;
    height: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;

    &.one {
      background: black;
      grid-row: 1/2;
      grid-column: 1/2;
      opacity: 0;
      // transform: translate3d(-50px, 50px, 0);
      transition: all 0.5s ease-out;

      &.is-active {
        opacity: 1;
        // transform: translate3d(0, 0, 0);
      }
    }

    &.two {
      background: $pink;
      grid-row: 2/3;
      grid-column: 2/4;
      opacity: 0;
      // transform: translate3d(50px, 50px, 0);
      transition: all 0.5s ease-out;

      &.is-active {
        opacity: 1;
        // transform: translate3d(0, 0, 0);
      }
    }

    &.three {
      background: $red;
      grid-row: 4/5;
      grid-column: 1/2;
      opacity: 0;
      // transform: translate3d(-50px, 50px, 0);

      &.is-active {
        opacity: 1;
        // transform: translate3d(0, 0, 0);
      }
    }
  }

  &__btn {
    grid-row: 4/5;
    align-self: end;
    width: 50vw;
    margin-bottom: 10vw;
  }

  // .home-header__btn {
  //     // width: 40vw;
  //     // height: 40vw;
  //     // // background: $red;
  //     // grid-row: 5/6;
  //     // grid-column: 2/2;
  //     // display: flex;
  //     // align-items: center;
  //     // background: $dark-yellow;
  //     // justify-content: center;
  //     // box-shadow: 0 15px 19px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  //     // transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  //     // &:hover {
  //     //     box-shadow: 0 18px 30px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  //     // }
  // }

  &__skills {
    font-size: 5vw;
    text-align: center;
    font-weight: 400;
    color: white;

    &.link {
      color: black;
    }
  }

  // ANIMATIONS
}
</style>