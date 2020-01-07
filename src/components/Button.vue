<template>
  <a
    id="continue-hero"
    data-w-id="6866990c-9e10-825e-284a-22c4160c98e4"
    href="#"
    @click="clicked"
    class="hero-button cc-main w-inline-block"
  >
    <div>
      {{title}}
      <span class="cta-button_sub-text" v-if="subtitle">{{subtitle}}</span>
    </div>
    <div data-w-id="762d5b6f-0761-e312-ee75-d1d01e68edcd" class="inner-button"></div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Get in touch"
    },
    subtitle: {
      type: String,
      required: false
    },
    scrollToElement: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked')

      if (this.scrollToElement) {
        this.$scrollTo(this.scrollToElement, 1000, {offset: -100})
        // document.querySelector().scrollIntoView({ block: "end", behavior: "smooth" })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-button {
  margin-top: 24px;
  margin-right: 16px;
  padding-top: 1px;
  padding-right: 24px;
  padding-left: 24px;
  background-color: #4353ff;
  color: #fff !important;
  font-size: 17px;
  line-height: 59px;
  font-weight: 500;
  text-decoration: none;
}
.hero-button:hover {
  background-color: #3545ee;
}
.hero-button.cc-main {
  position: relative;
}
.cta-button_sub-text {
  opacity: 0.8;
  font-weight: 400;
}
.inner-button {
  position: absolute;
  left: 0;
  top: 0;
  right: auto;
  bottom: auto;
  width: 100%;
  height: 100%;
}
</style>
