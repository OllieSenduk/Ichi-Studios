<template>
  <section
    class="image-block d-flex flex-column flex-md-row xs-section-padding"
    :class="{'flex-md-row-reverse': alignLeft }"
  >
    <div class="col-xs-12 col-md-6">
      <div class="case__img-content">
        <img :src="imgUrl" alt />
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <h6 class="color-primary" :class="{'text-right': alignLeft }">{{title}}</h6>
      <p :class="{'text-right': alignLeft }">{{content}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
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
.text-block {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }

  @include mq($from: tablet) {
    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 80%;
    }
  }

  hr {
    width: 30%;
    float: left;
  }
}
</style>