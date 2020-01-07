<template>
  <section class="text-block container">
    <div class="text-block__wrapper">
      <div class="text-block__title">
        <h6>{{title}}</h6>
        <hr />
      </div>
      <div class="text-block-body">
        <p>{{body}}</p>
      </div>
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
    body: {
      type: String,
      required: true
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