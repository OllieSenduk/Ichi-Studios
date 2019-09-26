<template>
  <div class="parallax">
    <div class="parallax__background-img"></div>
    <div class="parallax__content-wrapper">
      <h1>Hello world</h1>
      <p>hshu hbwdjhewb 2dh1 wqljb</p>
    </div>
  </div>
  <!-- <div class="name">
    <div class="spacer s0"></div>
    <div id="parallax1" class="parallaxParent">
      <div style="background-image: url(https://i.imgur.com/SHnSWQe.jpg);"></div>
    </div>
  </div>-->
</template>

<script>
export default {
  methods: {
    setUpParallax() {
      // init controller
      const parallaxScene = this.$scrollmagic
        .scene({
          triggerElement: ".parallax",
          triggerHook: 0.9,
          duration: "300%"
        })
        .setTween(
          TweenMax.from(".parallax__background-img", 2, {
            y: "-150",
            ease: Power1.easeOut
          })
        )
        .addIndicators();
      console.log(parallaxScene);
      console.log(TweenMax);

      // .addIndicators({ name: "2 (duration: 300)" });
      this.$scrollmagic.addScene(parallaxScene);

      this.$scrollmagic.attachTo(this.$refs.scrollBox);
      // build scenes
      //   new ScrollMagic.Scene({ triggerElement: "#parallax1" })
      //     .setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })
      //     .addIndicators()
      //     .addTo(controller);

      //   new ScrollMagic.Scene({ triggerElement: "#parallax2" })
      //     .setTween("#parallax2 > div", { y: "80%", ease: Linear.easeNone })
      //     .addIndicators()
      //     .addTo(controller);

      //   new ScrollMagic.Scene({ triggerElement: "#parallax3" })
      //     .setTween("#parallax3 > div", { y: "80%", ease: Linear.easeNone })
      //     .addIndicators()
      //     .addTo(controller);
    }
  },
  mounted() {
    this.setUpParallax();
  }
};
</script>

<style lang='scss' scoped>
.parallax {
  padding: 150px 0px;
  color: white;
  background: black;
  text-align: center;
  position: relative;
  overflow: hidden;

  &__background-img {
    background: url("https://i.imgur.com/SHnSWQe.jpg") no-repeat;
    background-size: cover;
    position: absolute;
    height: 190%;
    top: 0;
    z-index: 1;
    opacity: 0.7;
    width: 100%;
    // background-position: 0px 10.0188px;
  }
  &__content-wrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 1140px;
    position: relative;
    z-index: 2;
    height: 100%;
    // vertical-align: middle;
  }
}
// .parallaxParent {
//   height: 100vh;
//   overflow: hidden;
// }
// .parallaxParent > * {
//   height: 200%;
//   position: relative;
//   top: -100%;
// }
</style>