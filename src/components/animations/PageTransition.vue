<template>
  <div class="animation-wrapper"></div>
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
      container: document.querySelector(".animation-wrapper"),
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: this.$props.link
    });
    lottie.setLocationHref();
  }
};
</script>

<style lang="scss" scoped>
</style>