<template>
  <div class>
    <div class="color-white"></div>
    <div class="video color-change-black" id="slide0">
      <div class="slideInUp">
        <h1>Hello world</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeAnimationRunning: true
    };
  },
  methods: {
    startColorChange() {
      const page1 = document.querySelector(".color-white");
      const page2 = document.querySelector(".color-change-black");
      const context = this;

      const scene = this.$scrollmagic
        .scene({
          triggerElement: page2,
          offset: -95
          //   duration: 1
        })
        .setClassToggle("#slide0", "is-active");
      this.$scrollmagic.addScene(scene);
      this.$scrollmagic.attachTo(this.$refs.scrollBox);
    }
  },
  mounted() {
    const context = this;
    // window.setTimeout(() => {
    //   context.homeAnimationRunning = false;
    // }, 5000);
    this.startColorChange();
  }
};
</script>

<style lang='scss' scoped>
.color-white {
  height: 100vh;
  width: 100vw;
}

.color-change-black {
  height: 100vh;
  width: 100vw;
  color: white;
}

.slideInUp {
  opacity: 0;
  transition: all 0.7s ease-out;
  background-color: black;
  height: 100vh;

  //   transition: all 0.7s ease-out;
  //   -webkit-transform: translate3d(0, 50px, 0);
  //   transform: translate3d(0, 50px, 0);
}

.is-active {
  opacity: 1;

  .slideInUp {
    opacity: 1;
    transition: all 0.7s ease-out;
    //   transition: all 0.7s ease-out;
    //   -webkit-transform: translate3d(0, 50px, 0);
    //   transform: translate3d(0, 50px, 0);
  }
}

.is-active {
  visibility: visible;
  opacity: 1;
  //   -webkit-transform: translate3d(0, 0, 0);
  //   transform: translate3d(0, 0, 0);
}
</style>