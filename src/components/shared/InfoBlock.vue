<template>
  <section class="info-block block section">
    <div class="info-block__wrapper within-section-large">
      <div class="first-element">
        <div class="info-block__images">
          <img src="https://i.imgur.com/TrXW61P.png" alt="startup" />
          <img
            src="https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="startup"
            v-responsive.sm.xs.md
          />
        </div>
      </div>
      <div class="info-block__text">
        <div class="text-title within-section">
          <h2>
            Where
            <span class="text-red">love</span> for technology & Business come
            together
          </h2>
        </div>
        <div class="info-block__sub-title sub-title-text text-grey within-section">
          We combine our technical skills with creative thinking and a
          result-driven mentality to make sure that we deliver not just optimal
          code, but also keep your business goals in mind.
        </div>
        <div class="info-block__body within-section">
          <p>
            What sets us apart is that we're all passionate about technology &
            innovation, but all have an entrepeneurial background. This results
            in us striving to craft works of art that result in true fans,
            conversions and engagement.
          </p>
        </div>
      </div>
    </div>
    <div class="info-block__cta within-section">
      <appBtn text="More About Us" link="/about/"></appBtn>
    </div>

    <!-- <div class="information__block-with-images">
      <div class="content__container about-intro__container" :class="$mq">
        <div class="about-intro-textbox about-into__item">
          <div class="paragraph__title">
            <h2>
              Two Guys.
              <br />One Vision.
            </h2>
          </div>
          <div class="about-intro__text">
            <p>
              The scene begins with two freelancers out to make bigger and better things.
              Not long after, a movement is born. Ollsum is collective of creators collaborating with brands that inspire them.
            </p>
          </div>
          <appButtonPrimary
            text="Meet the team"
            btnColor="black"
            v-on:click.native="linkToPage('creatives')"
          ></appButtonPrimary>
        </div>
        <div class="about-intro-textbox about-into__item">
          <img src="https://i.imgur.com/U7G6Hsn.jpg" alt="Ollsum Founders" class="about-intro__img" />
        </div>
        <div class="about-intro-textbox about-into__item">
          <img src="https://i.imgur.com/ciMfoTk.jpg" alt="Ollsum Founders" class="about-intro__img" />
        </div>
      </div>
    </div>-->
  </section>
</template>

<script>
import Button from "~/components/shared/Button";

export default {
  components: {
    appBtn: Button
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.info-block {
  &__wrapper {
    @include mq($until: wide) {
      display: flex;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
    @include mq($from: wide) {
      display: flex;
    }
  }

  &__images {
    height: 100%;
    img {
      align-self: center;
      width: 100%;
      height: 60%;
      &:first-child {
        @include mq($until: tablet) {
          margin-bottom: $element-margin-bottom;
        }
      }
    }

    @include mq($from: tablet) {
      display: flex;

      img {
        width: 50%;
        height: 300px;

        &:first-child {
          margin-right: $element-margin-bottom;
        }
      }
    }

    @include mq($from: laptop) {
      display: flex;

      img {
        width: 50%;

        &:first-child {
          margin-right: $element-margin-bottom;
        }
      }
    }

    @include mq($from: wide) {
      display: flex;
      // flex-direction: column;

      img {
        width: 80%;
        height: 400px;
      }
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: $small-title;
  }

  &__cta {
  }
}
</style>
