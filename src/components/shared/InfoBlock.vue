<template>
  <section class="info-block block section">
    <div class="info-block__wrapper within-section">
      <div class="first-element">
        <div class="info-block__images">
          <img src="https://i.imgur.com/07Pc9JM.jpg" alt="design" />
          <img src="https://i.imgur.com/rdWlkBq.jpg" alt="coding" />
        </div>
      </div>
      <div class="info-block__text">
        <div class="text-title within-section">
          <h2>Who are Ollsum?</h2>
        </div>
        <div class="info-block__sub-title sub-title-text text-grey within-section">
          We are a collective of hand-picked professionals from all over the world with a wide array of skills ranging from
          tech to design and from video to marketing.
        </div>
        <div class="info-block__body within-section">
          <p>
            We combine our skills with creative thinking and a result-driven mentality to
            look at every case individually and pick the best approach to realize your companies' goals & ambitions.
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
  }
};
</script>

<style lang='scss' scoped>
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
        height: 350px;

        &:first-child {
          margin-right: $element-margin-bottom;
        }
      }
    }

    @include mq($from: wide) {
      display: flex;
      // flex-direction: column;

      img {
        width: 45%;
        height: 350px;
      }
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: $small-title;
  }

  &__cta {
    @include mq($until: wide) {
      margin-top: $element-margin-bottom;
    }
  }
}
</style>