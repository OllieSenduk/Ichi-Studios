<template>
  <section class="testimonial section first-element" :style="{background: backgroundColor}">
    <div class="testimonial__container" :style="{color: primaryColor}">
      <div class="testimonial__image">
        <img :src="img" alt="company" />
      </div>
      <div class="block testimonial__text-wrapper">
        <div class="testimonial__blockquote within-section">
          <i class="fa fa-quote-left"></i>
        </div>
        <!-- <div class="testimonial__company header within-section">{{company}}</div> -->
        <div class="testimonial__text sub-title-text within-section">{{text}}</div>
        <div class="testimonial__name" :style="{color: secondaryColor}">
          <p>{{name}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "name",
    "text",
    "company",
    "backgroundColor",
    "primaryColor",
    "secondaryColor",
    "iconColor",
    "img"
  ]
};
</script>

<style lang='scss' scoped>
.testimonial {
  //   height: 60vh;

  &__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    flex-direction: column;
  }

  &__text-wrapper {
    margin-top: 10vh;
    margin-bottom: 10vh;
    text-align: center;

    @include mq($from: tablet, $until: wide) {
      margin-top: 15vh;
      margin-bottom: 8vh;
    }

    @include mq($from: wide) {
      width: 60vw;
    }
  }

  &__company {
    font-weight: bold;
  }

  &__blockquote {
    font-size: 3rem;
    color: $pink;
  }

  //   &__name {
  //     @include mq($from: wide) {
  //       font-size: $small-text;
  //     }
  //   }

  &__image {
    position: absolute;
    top: 5%;
    left: 5%;
    img {
      width: 150px;
      opacity: 0.7;
    }
  }

  &__name {
    p {
      font-style: italic;
    }
  }
}
</style>