<template>
  <div class="card-simple">
    <div class="card-simple__image-wrapper" :class="containerClass">
      <img
        :src="imgUrl"
        :alt="imgAltFromTitle('case', title)"
        class="card-simple__image"
        v-if="!json"
      />
    </div>
    <div class="card-simple__content text-center">
      <h3 class="text-center">{{title}}</h3>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
import bannerCopy from "@/constants/copy/bannerCopy";
import lottie from "lottie-web";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    json: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    this.illustration = require(`../assets/animations/${this.$props.imgUrl}`)

    lottie.loadAnimation({
      container: document.querySelector("." + this.containerClass),
      renderer: "canvas",
      loop: true,
      autoplay: true,
      animationData: this.illustration
    });
    lottie.setLocationHref();
  },
  computed: {
    backgroundImg() {
      return `background-image: url(${this.$props.imgUrl})`;
    },
    containerClass() {
      return this.$props.title.replace(/ /g, "");
    }
  }
};
</script>

<style lang="scss" scoped>
.card-simple {
  overflow: hidden;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  padding: 30px 25px;
  border-radius: 4px;
  background: white;
  display: block;
  align-items: center;
  grid-template-columns: 80px 1fr;
  gap: 30px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
  }

  &__image-wrapper {
    height: 82px;
    display: flex;
    align-items: center;
  }

  &__image {
    display: block;
    width: 75px;
    margin: 0px auto 15px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    margin: 0px auto 15px;
  }

  p {
    line-height: $line-height-text;
    opacity: 0.7;
    margin-bottom: 0;
    margin-top: 8px;
  }
}
</style>