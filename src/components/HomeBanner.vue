<template>
  <section class="banner" v-else>
    <!-- <div class="container"> -->
    <div class="hero_container">
      <div
        id="w-node-22c4160c98df-eaea5c31"
        data-w-id="6866990c-9e10-825e-284a-22c4160c98df"
        class="hero_copy"
      >
        <h1 id="header" class="hero-heading">Create the Future</h1>
        <p
          id="subheader"
          class="paragraph-l cc-subhead"
        >We help brands find digital solutions by desiging & building scalable prototypes.</p>
        <a
          id="continue-hero"
          data-w-id="6866990c-9e10-825e-284a-22c4160c98e4"
          href="#"
          class="hero-button cc-main w-inline-block"
        >
          <div>
            Get in touch
            <span class="cta-button_sub-text">— but really!</span>
          </div>
          <div data-w-id="762d5b6f-0761-e312-ee75-d1d01e68edcd" class="inner-button"></div>
        </a>
      </div>
      <div id="w-node-22c4160c98e8-eaea5c31" class="hero_screenshot"></div>

      <div id="w-node-1e7871d5feeb-eaea5c31" class="hero_logos">
        <img src="https://i.imgur.com/89tZdKj.png" alt class="logo lawspot" />
        <img src="https://i.imgur.com/3XaAZuW.png" alt class="logo Zaina" />
        <img src="https://i.imgur.com/usLBmhC.jpg" alt class="logo IKEA" />
        <img src="https://i.imgur.com/X02YRNW.png" alt class="logo Le_Wagon" />
        <img src="https://i.imgur.com/y6vzoAX.png" alt class="logo Jobdex" />
        <img src="https://i.imgur.com/cOPzNdc.jpg" alt class="logo DepotLab" />
        <img src="https://i.imgur.com/Fs4mHSj.png" alt class="logo Clubhaus" />
        <img
          src="https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d42802a5e4c2e4e91fd9bb2_intuit-black.svg"
          alt
          class="logo cc-intuit"
        />
      </div>
    </div>
  </section>
</template>

<script>
import lottie from "lottie-web";

export default {
  mounted() {
    lottie.loadAnimation({
      container: document.querySelector(".hero_screenshot"),
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: "https://api.jsonbin.io/b/5e0870bef9369177b2744cff"
    });
    lottie.setLocationHref();
  }
};
</script>

<style lang="scss" scoped>
</style>