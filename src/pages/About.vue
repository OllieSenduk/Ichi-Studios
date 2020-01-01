<template>
  <Layout>
    <!-- <section v-if="animationOn">
      <appPageTransition :link="transitionAnimationLink"></appPageTransition>
    </section>-->
    <appPageBanner></appPageBanner>
  </Layout>
</template>

<script>
import PageTransition from "@/components/animations/PageTransition";
import PageBanner from "@/components/PageBanner";

export default {
  components: {
    appPageTransition: PageTransition,
    appPageBanner: PageBanner
  },
  metaInfo: {
    title: "About"
  },
  data() {
    return {
      animationOn: true,
      transitionAnimationLink:
        "https://api.jsonbin.io/b/5e09239902ce5777b8b45b6b"
    };
  },
  computed: {},
  created() {
    this.pageLoad(this, this.animationOn);
  }
};
</script>

<style lang="scss" scoped>
</style>
