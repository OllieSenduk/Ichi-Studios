<template>
  <section class="banner">
    <div class="hero_container container">
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
import bannerCopy from "@/constants/copy/bannerCopy";

export default {
  computed: {
    title() {
      return bannerCopy[this.currentPath(this)].title;
    },
    subtitle() {
      return bannerCopy[this.currentPath(this)].subtitle;
    },
    imgUrl() {
      return bannerCopy[this.currentPath(this)].imgUrl;
    }
  },
  mounted() {
    this.illustration = require(`../assets/animations/${this.imgUrl}`)

    lottie.loadAnimation({
      container: document.querySelector(".hero_screenshot"),
      renderer: "canvas",
      loop: true,
      autoplay: true,
      animationData: this.illustration
    });
    lottie.setLocationHref();
  },

};
</script>

<style lang="scss" scoped>
</style>