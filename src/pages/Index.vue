<template>
  <Layout>
    <!-- <section v-if="animationOn">
      <appPageTransition :link="transitionAnimationLink"></appPageTransition>
    </section>-->
    <div>
      <appHomeBanner></appHomeBanner>
      <appQuote></appQuote>

      <appProcess></appProcess>
    </div>
  </Layout>
</template>

<script>
import PageTransition from "@/components/animations/PageTransition";
import HomeBanner from "@/components/HomeBanner";
import Quote from "@/components/Quote";

import Contact from "@/components/Contact";
import Process from "@/components/Process";

export default {
  components: {
    appPageTransition: PageTransition,
    appHomeBanner: HomeBanner,
    appProcess: Process,
    appQuote: Quote,
    appContact: Contact
  },
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      animationOn: true,
      transitionAnimationLink:
        "https://assets8.lottiefiles.com/datafiles/JNtJcb5adubeQfD/data.json"
    };
  },
  created() {
    this.pageLoad(this, this.animationOn);
  }
};
</script>

<style lang="scss" scoped>
</style>
