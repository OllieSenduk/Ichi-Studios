<template>
  <Layout>
    <appPageStripes></appPageStripes>
    <section class="about">
      <div class="element__wrapper">
        <div class="about__header">
          <div class="about__header__title">
            <h1>Who are we?</h1>
          </div>
          <div class="about__header__subtext">
            <p>
              We could fill this page up with a bunch of buzzwords, but truthfully, we're just
              a bunch of skilled & outlandish youngsters that love their craft.
              <!-- Today we
              help companies reach their users by building awesome campaigns and technical solutions.-->
            </p>
          </div>
          <div class="about__header__images">
            <img src="https://i.imgur.com/rdWlkBq.jpg" alt="founder" />
            <img src="https://i.imgur.com/U7G6Hsn.jpg?1" alt="founder" />
          </div>
        </div>
      </div>

      <div class="workflow">
        <div class="element__wrapper">
          <appSteps v-for="step in steps" :title="step.title" :body="step.body" :img="step.img"></appSteps>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Stripes from "~/components/shared/Stripes";
import Steps from "~/components/about/Steps";

export default {
  components: {
    appPageStripes: Stripes,
    appSteps: Steps
  },
  metaInfo: {
    title: "About us"
  },
  data() {
    return {
      steps: [
        {
          title: "Professionally Passionate",
          body:
            "Ollsum consists of creatives, but we understand business. We strive to craft works of art that result in true fans, conversions and engagement.",
          img: require("~/assets/images/icons/discovery.svg")
        },
        {
          title: "Design Thinking",
          body:
            "We draw upon logic, imagination, intuition and systematic reasoning to find solutions, always with your user in mind.",
          img: require("~/assets/images/icons/design_thinking.svg")
        },
        {
          title: "Getting things done",
          body:
            "Being entrepeneurs ourselves, we understand the importance of efficiency, quality control and speed.Together with you we define what a win looks like and how we’ll structure the steps to get there. We split the journey up into iterations where we can test, reflect, improve and adjust.",
          img: require("~/assets/images/icons/getting_things_done.svg")
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.about {
  font-family: $main-font;

  &__header {
    &__title {
      margin-bottom: 6vh;
    }

    &__images {
      img {
        width: 100%;
        margin: 20px 0px 20px 0px;
      }
    }
  }
}
</style>
