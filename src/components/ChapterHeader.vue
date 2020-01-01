<template>
  <div>
    <div class="agency-section-title text-center">
      <h3 class="sub-title">{{subtitle}}</h3>
      <h4 class="main-title">
        {{titleFirstWords}}
        <em>{{titleLastWord}}</em>
      </h4>
      <span
        class="watermark-title"
        data-scrollax="properties: { translateY: '-250px' }"
        style="transform: translateZ(0px) translateY(58.1798px);"
      >{{watermark}}</span>
    </div>
  </div>
</template>

<script>
import chapterHeaders from "@/constants/copy/chapterHeaders";

export default {
  methods: {
    title() {
      return chapterHeaders[this.currentPath(this)].title;
    }
  },
  computed: {
    titleFirstWords() {
      return this.title().substr(0, this.title().lastIndexOf(" "));
    },
    titleLastWord() {
      return this.title()
        .split(" ")
        .slice(-1)[0];
    },
    subtitle() {
      return chapterHeaders[this.currentPath(this)].subtitle.toUpperCase();
    },
    watermark() {
      return chapterHeaders[this.currentPath(this)].watermark;
    }
  }
};
</script>

<style lang="scss" scoped>

@include mq($until: largeMobile) {
  .watermark-title {
    display: none;
  }
}
</style>