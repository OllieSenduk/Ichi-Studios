<template>
  <div class="wide-card flex-column flex-md-row" :class="{'flex-md-row-reverse': alignLeft }">
    <appRoundImage :imgUrl="imgUrl"></appRoundImage>
    <div class="wide-card__content">
      <div class="wide-card__title text-center">
        <h5>{{name}}</h5>
        <p class="color-primary">{{role}}</p>
      </div>
      <div class="wide-card__text">
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";

export default {
  components: {
    appRoundImage: RoundImage
  },
  props: {
    name: {
      required: true,
      type: String
    },
    index: {
      required: true,
      type: Number
    },
    imgUrl: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    role: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      alignClasses: ["flex-column-reverse", "flex-md-row"]
    };
  },
  computed: {
    alignLeft() {
      return (this.$props.index + 1) % 2 == 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.wide-card {
  display: flex;
  align-items: center;

  &__content {
    width: 80%;
  }
  @include mq($from: tablet) {
    &__content {
      width: 50%;
    }
  }
}
</style>