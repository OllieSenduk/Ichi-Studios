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
    title: "Cases"
  },
  data() {
    return {
      animationOn: true,
      transitionAnimationLink:
        "https://api.jsonbin.io/b/5e088d6c02ce5777b8b4175d",
      animationSpeed: "2.5"
    };
  },
  created() {
    this.pageLoad(this, this.animationOn);
  },
  computed: {
    bannerTitle() {
      return bannerCopy.cases.title;
    },
    bannerSubtitle() {
      return bannerCopy.cases.subtitle;
    },
    bannerImgUrl() {
      return bannerCopy.cases.imgUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
