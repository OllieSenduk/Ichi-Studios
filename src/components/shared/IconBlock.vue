<template>
  <div class="section block icons">
    <div class="icons__container">
      <div class="icons__wrapper">
        <div class="icon__container section" v-for="section in sections" v-bind:key="section">
          <div class="icon__card">
            <div class="icon__image within-section text-center">
              <img :src="section.img" alt="icon" />
            </div>
            <div class="icon__text-block"></div>
            <div class="icon__title header within-section">
              <h2>{{section.title}}</h2>
            </div>
            <div class="icon__text">
              <p>{{section.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "sectionTitle",
    "titleOne",
    "imgOne",
    "textOne",
    "titleTwo",
    "imgTwo",
    "textTwo",
    "titleThree",
    "imgThree",
    "textThree",
    "titleFour",
    "imgFour",
    "textFour"
  ],
  data() {
    return {
      sections: [
        {
          title: this.titleOne,
          img: this.imgOne,
          text: this.textOne
        },
        {
          title: this.titleTwo,
          img: this.imgTwo,
          text: this.textTwo
        },
        {
          title: this.titleThree,
          img: this.imgThree,
          text: this.textThree
        },
        {
          title: this.titleFour,
          img: this.imgFour,
          text: this.textFour
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.icons {
  &__wrapper {
    @include mq($from: laptop) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
}
.icon {
  &__card {
    display: block;
    padding: 50px;
    background: #ffffff;
    -webkit-box-shadow: 0px 15px 40px rgba(26, 30, 43, 0.13);
    box-shadow: 0px 15px 40px rgba(26, 30, 43, 0.13);
    border-radius: 8px;
    height: 100%;
  }

  &__image {
  }
  &__container {
    @include mq($from: laptop) {
      width: 45%;
    }
  }
}
</style>