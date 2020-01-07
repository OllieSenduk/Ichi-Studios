<template>
  <section class="xs-section-padding working-progress-area" data-scrollax-parent="true">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <appChapterHeader></appChapterHeader>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 mx-auto single-working-progress">
          <appProcessContent
            :title="content.stepOne.title"
            :content="content.stepOne.content"
            :imgUrl="content.stepOne.imgUrl"
            :imgContainer="content.stepOne.imgContainer"
          ></appProcessContent>
        </div>
        <!-- .single-working-progress END -->
        <div class="col-lg-12 mx-auto single-working-progress">
          <appProcessContent
            :title="content.stepTwo.title"
            :content="content.stepTwo.content"
            :imgUrl="content.stepTwo.imgUrl"
            :imgContainer="content.stepTwo.imgContainer"
          ></appProcessContent>
        </div>
        <!-- .single-working-progress END -->
        <div class="col-lg-12 mx-auto single-working-progress">
          <appProcessContent
            :title="content.stepThree.title"
            :content="content.stepThree.content"
            :imgUrl="content.stepThree.imgUrl"
            :imgContainer="content.stepThree.imgContainer"
          ></appProcessContent>

          <!-- .working-progress-images END -->
        </div>
        <!-- .single-working-progress END -->
      </div>
      <!-- .row END -->
    </div>
    <!-- .container END -->
    <div class="doodle-parallax">
      <img
        src="assets/images/doodle/5.png"
        data-scrollax="properties: { translateY: '-200%' }"
        class="single-doodle one"
        alt
        draggable="false"
        style="transform: translateZ(0px) translateY(46.5439%);"
      />
      <img
        src="assets/images/doodle/6.png"
        data-scrollax="properties: { translateY: '-150%' }"
        class="single-doodle two"
        alt
        draggable="false"
        style="transform: translateZ(0px) translateY(34.9079%);"
      />
    </div>
  </section>
</template>

<script>
import ProcessContent from "@/components/ProcessContent";
import ChapterHeader from "@/components/ChapterHeader";

// COPY
import processStepContent from "@/constants/copy/processStepContent";
import bannerCopy from "@/constants/copy/bannerCopy";
import chapterHeaders from "@/constants/copy/chapterHeaders";

export default {
  components: {
    appProcessContent: ProcessContent,
    appChapterHeader: ChapterHeader
  },
  methods: {
    currentPath() {
      return this.$root._route.path.substr(1);
    }
  },
  computed: {
    content() {
      return processStepContent;
    }
  },
  created() {}
};
</script>

<style lang="scss">
.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #000000;
}

p:last-child {
  margin-bottom: 0px;
}
@media (max-width: 991px) {
  .doodle-parallax {
    display: none;
  }

  .single-working-progress:nth-child(odd) .working-progress-content {
    padding-right: 0;
  }
  .single-working-progress:nth-child(even) .working-progress-images {
    padding-right: 0px;
  }
  .working-progress-content {
    padding-top: 0;
  }
  .working-progress-content .section-title {
    font-size: 1rem;
    margin-bottom: 15px;
  }
  .agency-section-title .main-title {
    font-size: 2rem;
  }
}
@media (max-width: 480px) {
  .agency-section-title.text-center {
    margin-bottom: 40px;
  }

  .agency-section-title .main-title {
    font-size: 1.55rem;
  }
  .single-working-progress:not(:last-child)::before {
    display: none;
  }
  .single-working-progress:not(:last-child) {
    padding-bottom: 50px;
  }
  .single-working-progress:nth-child(even) .working-progress-images {
    padding-right: 0px;
  }
  .working-progress-content {
    margin-bottom: 30px;
  }
}
</style>