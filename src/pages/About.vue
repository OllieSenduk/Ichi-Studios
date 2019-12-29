<template>
  <Layout>
    <section v-if="animationOn">
      <appPageTransition :link="transitionAnimationLink"></appPageTransition>
    </section>
    <appPageBanner v-else :title="bannerTitle" :subtitle="bannerSubtitle" :imgUrl="bannerImgUrl"></appPageBanner>
  </Layout>
</template>

<script>
import PageTransition from "@/components/animations/PageTransition";
import PageBanner from "@/components/PageBanner";
import bannerCopy from "@/constants/copy/bannerCopy";

export default {
  components: {
    appPageTransition: PageTransition,
    appPageBanner: PageBanner
  },
  metaInfo: {
    title: "About us"
  },
  data() {
    return {
      animationOn: true,
      transitionAnimationLink:
      "https://api.jsonbin.io/b/5e09239902ce5777b8b45b6b"
    };
  },
  computed: {
    bannerTitle() {
      return bannerCopy.about.title;
    },
    bannerSubtitle() {
      return bannerCopy.about.subTitle;
    },
    bannerImgUrl() {
      return bannerCopy.about.imgUrl;
    }
  },
  created() {
    this.pageLoad(this, this.animationOn);
  }
};
</script>

<style lang="scss" scoped>
</style>
