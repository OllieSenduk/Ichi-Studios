<template>
  <div class="animation-wrapper">
    <!-- <lottie-player
      :src="link"
      background="transparent"
      :speed="speed"
      style="width: 800px; height: 800px;"
      loop
      autoplay
    ></lottie-player> -->
  </div>
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    link: {
      type: String,
      default:
        "https://assets8.lottiefiles.com/datafiles/JNtJcb5adubeQfD/data.json"
    },
    speed: {
      type: String,
      default: "1"
    }
  }, 
  mounted() {
    lottie.loadAnimation({
      container: document.querySelector(".animation-wrapper"), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json',
    });
    lottie.setLocationHref()
  }
};
</script>

<style lang="scss" scoped>
</style>