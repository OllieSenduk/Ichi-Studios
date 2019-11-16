<template>
  <div class="info-block--large section">
    <div class="info-block--large__wrapper first-element block">
      <div class="info-block--large__text-container within-section">
        <div class="text-title within-section">
          <h2>{{title}}</h2>
        </div>
        <div class="sub-title-text text-grey within-section">{{subTitle}}</div>
        <div class="info-block--large__text within-section">
          <p>{{text}}</p>
        </div>
      </div>
      <div class="info-block--large__image-container within-section text-center">
        <p>{{imgOneText}}</p>
        <img :src="imgOne" alt="ollsum" />
      </div>

      <!-- <div class="info-block--large__images-container">

      </div>-->
      <!-- <div class="info-block--large__images-container text-center">
        <div class="info-block--large__image-container">
          <img :src="imgOne" alt="ollsum" />
          <p>Some Text</p>
      </div>-->
      <!-- <div class="info-block--large__image-container within-section">
          <p>{{imgTwoText}}</p>
          <img :src="imgTwo" alt="ollsum" />
        </div>
        <div class="info-block--large__image-container">
          <p>{{imgThreeText}}</p>
          <img :src="imgThree" alt="ollsum" />
      </div>-->
    </div>
    <!-- <div class="info-block--large__images-container within-section block">
      <div
        class="info-block--large__image-container within-section text-center info-block--large__image-block section"
      >
        <p>{{imgTwoText}}</p>
        <img :src="imgTwo" alt="project" />
      </div>
      <div
        class="info-block--large__image-container within-section text-center info-block--large__image-block section"
      >
        <p>{{imgThreeText}}</p>
        <img :src="imgThree" alt="project" />
      </div>
      <div
        class="info-block--large__image-container within-section text-center info-block--large__image-block section"
      >
        <p>{{imgFourText}}</p>
        <img :src="imgFour" alt="project" />
      </div>
      <div
        class="info-block--large__image-container within-section text-center info-block--large__image-block section"
      >
        <p>{{imgFourText}}</p>
        <img :src="imgFour" alt="project" />
      </div>
    </div>-->
    <div
      class="info-block--large__image-container within-section info-block--large__image-block section block"
    >
      <appBtn text="See our work!" link="/projects"></appBtn>
    </div>
  </div>
</template>

<script>
import BlockButton from "~/components/shared/BlockButton";
import Button from "~/components/shared/Button";

export default {
  props: {
    title: {},
    subTitle: {},
    text: {},
    imgOne: {},
    imgTwo: {},
    helloWorld: {},
    imgThree: {},
    imgFour: {},
    backgroundColor: {
      default: "white"
    },
    color: {
      default: "black"
    },
    imgOneText: {},
    imgTwoText: {},
    imgThreeText: {},
    imgFourText: {}
  },
  components: {
    appBlockButton: BlockButton,
    appBtn: Button
  }
};
</script>

<style lang='scss'>
.info-block--large {
  &__wrapper {
    display: flex;

    @include mq($until: laptop) {
      flex-direction: column;
    }
  }
  &__images-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    text-align: center;

    // display: flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
    @include mq($from: wide) {
      grid-template-columns: 10% 1fr 10% 1fr 10%;
      grid-template-rows: 1fr 10% 1fr 10% 1fr 10% 1fr 1fr;

      // grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

      // display: grid;
      // grid-template-columns: 10% 1fr 1fr 10%;
      // grid-template-rows: 1fr 1fr 1fr;
    }
    @include mq($from: tablet) {
      width: 100%;
      text-align: center;
      grid-template-columns: 35% 45% 35%;
      grid-template-rows: 1fr 1fr;

      &:nth-child(1) {
        text-align: right;
      }
      // display: grid;
      // grid-template-columns: 10% 1fr 1fr 10%;
      // grid-template-rows: 1fr 1fr 1fr;
    }
  }

  &__image-block {
    &:nth-child(1) {
      grid-row: 1/2;
    }
    &:nth-child(2) {
      grid-row: 2/3;
    }
    &:nth-child(3) {
      grid-row: 3/4;
    }
    &:nth-child(4) {
      grid-row: 4/5;
    }

    @include mq($from: tablet, $until: laptop) {
      grid-column: 1/3;
    }

    @include mq($from: laptop, $until: wide) {
      &:nth-child(1) {
        grid-row: 1/2;
      }
      &:nth-child(2) {
        grid-column: 2/2;
      }
      &:nth-child(3) {
        grid-row: 3/4;
        grid-column: 1/2;
      }
      &:nth-child(4) {
        grid-row: 4/5;
        grid-column: 2/2;
        margin-top: 30px;
      }
    }
    @include mq($from: wide) {
      margin-top: 100px;

      img {
        width: 400px !important;
        height: 400px !important;
      }
      &:nth-child(1) {
        grid-row: 1/2;
        grid-column: 1/2;
      }
      &:nth-child(2) {
        grid-column: 2/3;
        grid-row: 1/2;
      }
      &:nth-child(3) {
        grid-row: 2/3;
        grid-column: 1/2;
      }
      &:nth-child(4) {
        grid-row: 2/3;
        grid-column: 2/3;
      }
      &:nth-child(5) {
        grid-row: 3/4;
        grid-column: 1/3;
      }
    }
  }

  &__text-container {
    @include mq($from: laptop) {
      width: 60%;
      margin-right: $within-element-margin-bottom;
    }
  }

  &__image-container {
    img {
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
      width: 300px;
      height: 300px;
      @include mq($from: tablet, $until: wide) {
        width: 400px;
        height: 400px;
      }

      // &:nth-child(1) {
      //   grid-column: 2/3;
      // }

      // &:nth-child(2) {
      //   grid-column: 3/4;
      //   grid-row: 2/3;
      // }

      // &:nth-child(3) {
      //   grid-column: 2/3;
      //   grid-row: 3/4;
      // }
    }
  }
}
</style>