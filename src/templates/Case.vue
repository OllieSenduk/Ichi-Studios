<template>
  <layout>
    <appCaseInfo
      :title="title"
      :client="client"
      :categories="categories"
      :introduction="introduction"
      :duration="duration"
      class="xs-section-padding"
    ></appCaseInfo>
    <div class="case__main-img-wrapper">
      <img :src="mainImage" alt />
    </div>
    <appTextBlock title="Challenge" :body="challenge" class="xs-section-padding"></appTextBlock>
    <div class="case__steps-wrapper"></div>
    <appTextBlock title="Solution" :body="solution" class="xs-section-padding"></appTextBlock>
    <appImageBlock
      v-for="(image,index) in images"
      :key="index"
      :index="index"
      :title="image.title"
      :content="image.content"
      :imgUrl="image.imgUrl"
    ></appImageBlock>
  </layout>
</template>

<script>
import CaseInfo from "@/components/CaseInfo";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

import cases from "@/constants/copy/cases";

export default {
  components: {
    appCaseInfo: CaseInfo,
    appTextBlock: TextBlock,
    appImageBlock: ImageBlock
  },
  data() {
    return {};
  },
  computed: {
    currentCase() {
      const id = this.$route.params.identifier || "tablevibe";
      return cases[id];
    },
    mainImage() {
      return this.currentCase.imgUrl
    },
    challenge() {
      return this.currentCase.details.challenge;
    },
    solution() {
      return this.currentCase.details.solution;
    },
    client() {
      return this.currentCase.details.client;
    },
    categories() {
      return this.currentCase.details.categories;
    },
    title() {
      return this.currentCase.details.title;
    },
    introduction() {
      return this.currentCase.details.introduction;
    },
    duration() {
      return this.currentCase.details.duration;
    },
    images() {
      console.log(this.currentCase.details.images);
      return this.currentCase.details.images;
    }
  }
};
</script>

<style lang="scss" scoped>
.case {
  &__main-img-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @include mq($from: laptop) {
      img {
        width: 50%;
      }
    }
  }
}
</style>