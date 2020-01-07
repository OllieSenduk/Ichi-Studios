<template>
  <section class="banner">
    <!-- <div class="container"> -->
    <div class="hero_container container">
      <div
        id="w-node-22c4160c98df-eaea5c31"
        data-w-id="6866990c-9e10-825e-284a-22c4160c98df"
        class="hero_copy"
      >
        <h1 id="header" class="hero-heading">Create the Future</h1>
        <p
          id="subheader"
          class="paragraph-l cc-subhead"
        >We help brands find digital solutions by desiging, building & testing scalable prototypes.</p>
        <appButton title="Get in Touch" subtitle=" - but really!" scrollToElement='.contact'></appButton>
      </div>
      <div id="w-node-22c4160c98e8-eaea5c31" class="hero_screenshot"></div>
      <div id="w-node-1e7871d5feeb-eaea5c31" class="hero_logos">
        <img
          v-for="logo in logos"
          :key="logo.title"
          :src="logo.imgUrl"
          :alt="imgAltFromTitle('logo', logo.title)"
          class="logo"
        />
      </div>
    </div>
  </section>
</template>

<script>
import lottie from "lottie-web";
import Button from "@/components/Button";

import projectLogos from "@/constants/projects";

export default {
  components: {
    appButton: Button
  },
  mounted() {
    lottie.loadAnimation({
      container: document.querySelector(".hero_screenshot"),
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: "https://api.jsonbin.io/b/5e0870bef9369177b2744cff"
    });
    lottie.setLocationHref();
  },
  computed: {
    logos() {
      return projectLogos.filter(logo => !logo.openSource);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
