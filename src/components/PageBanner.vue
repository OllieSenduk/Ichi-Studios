<template>
  <section class="banner" v-else>
    <div class="hero_container">
      <div
        id="w-node-22c4160c98df-eaea5c31"
        data-w-id="6866990c-9e10-825e-284a-22c4160c98df"
        class="hero_copy"
      >
        <h1 id="header" class="hero-heading">{{title}}</h1>
        <p id="subheader" class="paragraph-l cc-subhead">{{subtitle}}</p>
        <a
          id="continue-hero"
          data-w-id="6866990c-9e10-825e-284a-22c4160c98e4"
          href="#"
          class="hero-button cc-main w-inline-block"
        >
          <div data-w-id="762d5b6f-0761-e312-ee75-d1d01e68edcd" class="inner-button"></div>
        </a>
      </div>
      <div id="w-node-22c4160c98e8-eaea5c31" class="hero_screenshot"></div>

      <div id="w-node-1e7871d5feeb-eaea5c31" class="hero_logos"></div>
    </div>
  </section>
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    title: {
      type: String,
      default: "Ichi Studios"
    },
    subtitle: {
      type: String,
      default: "Let's build the future"
    },
    imgUrl: {
      type: String,
      default: "https://i.imgur.com/3fMphEH.png"
    }
  },
  mounted() {
    lottie.loadAnimation({
      container: document.querySelector(".hero_screenshot"),
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: this.$props.imgUrl
    });
    lottie.setLocationHref();
  }
};
</script>

<style lang="scss" scoped>
</style>