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
        <div class="row xs-section-padding">
          <div class="col-lg-12 mx-auto">
            <div class="cases-cards-container">
              <appCard
                v-for="(item, itemUrl) in featuredCases"
                :key="item.title"
                :link="itemUrl"
                :title="item.title"
                :description="item.description"
                :imgUrl="item.imgUrl"
                :imgFit="item.imgFit"
              ></appCard>
            </div>
          </div>
        </div>
        <appSeperator title="Other Projects" class="xs-section-padding"></appSeperator>
        <div class="row xs-section-padding">
          <div class="col-lg-12 mx-auto">
            <div class="other-cases-cards-container">
              <appSimpleCard
                v-for="project in appProjects"
                :key="project.title"
                :imgUrl="project.imgUrl"
                :title="project.title"
                :description="project.shortDescription"
              ></appSimpleCard>
            </div>
          </div>
        </div>
        <appSeperator title="Open Source" class="xs-section-padding"></appSeperator>
        <div class="row">
          <div class="col-lg-12 mx-auto xs-section-padding">
            <div class="other-cases-cards-container">
              <appSimpleCard
                v-for="project in openSource"
                :key="project.title"
                :imgUrl="project.imgUrl"
                :title="project.title"
                :description="project.shortDescription"
              ></appSimpleCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import PageTransition from "@/components/animations/PageTransition";
import PageBanner from "@/components/PageBanner";
import ChapterHeader from "@/components/ChapterHeader";
import Card from "@/components/Card";
import Seperator from "@/components/Seperator";
import SimpleCard from "@/components/SimpleCard";
import SmallButton from "@/components/SmallButton";

import featuredCases from "@/constants/copy/cases";
import projects from "@/constants/projects";

export default {
  components: {
    appPageTransition: PageTransition,
    appPageBanner: PageBanner,
    appChapterHeader: ChapterHeader,
    appCard: Card,
    appSeperator: Seperator,
    appSimpleCard: SimpleCard,
    appSmallButton: SmallButton
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
    featuredCases() {
      return featuredCases;
    },
    appProjects() {
      return projects.filter(project => project.project).slice(0, 6);
    },
    openSource() {
      return projects.filter(project => project.openSource).slice(0, 4);
    }
  }
};
</script>

<style lang="scss" scoped>
.cases-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
}

@include mq($until: tablet) {
  .cases-cards-container {
    grid-template-columns: 1fr;
  }
}
</style>
