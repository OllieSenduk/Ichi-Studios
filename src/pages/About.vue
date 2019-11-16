<template>
  <Layout>
    <appPageStripes></appPageStripes>
    <section class="about" :class="{ remove_page: navStatus }">
      <appPageHeader title="About Us"></appPageHeader>
      <div :class="{hidden: isActive}">
        <appTextBlock
          :title="aboutTitle"
          :subTitle="aboutSubTitle"
          :description="aboutDescription"
          :background="aboutBackground"
          :aboutColor="color"
        ></appTextBlock>
        <div class="guide-down">
          <i class="fa fa-arrow-down"></i>
        </div>

        <appTextBlock
          :title="howTitle"
          :subTitle="howSubTitle"
          :description="howDescription"
          :background="howBackground"
          :color="aboutColor"
        ></appTextBlock>
      </div>
      <div class="text-block padding-block within-section" :class="{hidden: isActive}">
        <div class="text-block__title-wrapper page-wrapper within-section-large">
          <hr class="text-block__rule" />
          <h2>Core Team</h2>
        </div>
      </div>
      <appTeam @togglePage="togglePage"></appTeam>
      <appFooter :class="{hidden: isActive}" class="footer--about"></appFooter>
    </section>
  </Layout>
</template>

<script>
import Stripes from "~/components/shared/Stripes";
import Steps from "~/components/about/Steps";
import PageHeader from "~/components/shared/PageHeader";
import TextBlock from "~/components/shared/TextBlock";
import Team from "~/components/about/Team";
import Values from "~/components/about/Values";
import Footer from "~/components/shared/FooterMain";
import { mapState, mapGetters, mapMutations } from "vuex";
var VueScrollTo = require("vue-scrollto");

export default {
  components: {
    appPageStripes: Stripes,
    appSteps: Steps,
    appPageHeader: PageHeader,
    appTextBlock: TextBlock,
    appTeam: Team,
    appFooter: Footer,
    appValues: Values
  },
  metaInfo: {
    title: "About us"
  },
  data() {
    return {
      isActive: false,
      aboutTitle: "Who are we?",
      aboutSubTitle: "Creatives with a passion for code",
      aboutDescription:
        "We are a global group of senior developers & designers from all over the world with a passion for crafting beautifully designed websites & applications. As we want to make sure to deliver the full package, we invest a lot of time to stay up-to-date with all the latest know-how in design, SEO, data-handling & digital innovations. Our love for code doesn't stop at the agency, as we also actively try to give back to the community by teaching at renowned coding bootcamps (combined we have taught 600+ students) and partaking in hackathons",
      aboutBackground: "white",
      aboutColor: "black",
      howTitle: "How we execute?",
      howSubTitle: "Design. Create. Reflect. Adjust.",
      howDescription:
        "We draw upon logic, imagination, intuition and systematic reasoning to find solutions and serve your customers. By working in agile sprints, we make sure that we never get ahead of ourselves and keep on testing our assumptions, both on the code side, but also on your customer's needs and wishes.",
      howBackground: "black",
      aboutColor: "white"
    };
  },
  methods: {
    togglePage(value) {
      this.isActive = value;
    }
  },
  computed: mapState({
    ...mapState(["navOpen"]),
    ...mapGetters(["navStatus"])
  })
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

.footer--about {
  @include mq($from: laptop) {
    margin-top: 90vh;
  }

  @include mq($from: mobile) {
    margin-top: 900px;
  }

  @include mq($from: largeMobile) {
    margin-top: 900px;
  }

  @include mq($from: tablet) {
    margin-top: 120vh;
  }

  @include mq($from: wide) {
    margin-top: 90vh;
  }
}
</style>
