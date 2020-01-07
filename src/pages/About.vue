<template>
  <Layout>
    <!-- <section v-if="animationOn">
      <appPageTransition :link="transitionAnimationLink"></appPageTransition>
    </section>-->
    <appPageBanner></appPageBanner>
    <section class="xs-section-padding working-progress-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mx-auto single-working-progress">
            <appChapterHeader></appChapterHeader>
          </div>
        </div>
      </div>
    </section>
    <div class="row xs-section-padding">
      <div class="col-lg-12 mx-auto">
        <div class="other-cases-cards-container">
          <appSimpleCard
            v-for="value in appValues"
            :key="value.title"
            :imgUrl="value.imgUrl"
            :title="value.title"
            :description="value.text"
            :json="value.json"
          ></appSimpleCard>
        </div>
      </div>
    </div>
    <appSeperator title="Leadership Team" class="xs-section-padding"></appSeperator>
    <appWideCard></appWideCard>
    <appFeatureCard class="xs-section-padding"></appFeatureCard>
    <appSeperator title="Some other things about us" class="xs-section-padding"></appSeperator>

    <appArtsyGrid class="xs-section-padding"></appArtsyGrid>
  </Layout>
</template>

<script>
import PageTransition from "@/components/animations/PageTransition";
import PageBanner from "@/components/PageBanner";
import ChapterHeader from "@/components/ChapterHeader";
import Seperator from "@/components/Seperator";
import HumanChart from "@/components/HumanChart";
import Quote from "@/components/Quote";
import ArtsyGrid from "@/components/ArtsyGrid";
import FeatureCard from "@/components/FeatureCard";
import SimpleCard from "@/components/SimpleCard";
import WideCard from "@/components/WideCard";

import values from "@/constants/copy/values";

export default {
  components: {
    appPageTransition: PageTransition,
    appPageBanner: PageBanner,
    appSeperator: Seperator,
    appChapterHeader: ChapterHeader,
    appHumanChart: HumanChart,
    appQuote: Quote,
    appArtsyGrid: ArtsyGrid,
    appFeatureCard: FeatureCard,
    appSimpleCard: SimpleCard,
    appWideCard: WideCard
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
  computed: {
    appValues() {
      return values;
    }
  },

  created() {
    this.pageLoad(this, this.animationOn);
  }
};
</script>

<style lang="scss" scoped>
#chartdiv {
  height: 60vh;
}
</style>
