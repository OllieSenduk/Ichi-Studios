<template>
  <div class="workflow__project-step" :class="$mq">
    <div class="workflow__project-step__header">
      <g-image :src="img" width="50" alt="discovery"></g-image>
      <h4 class="workflow__project-step__title">{{ title }}</h4>
    </div>
    <div class="workflow__project-step__text" :class="$mq">
      <p class="text-grey">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "body", "img"]
};
</script>

<style lang='scss' scoped>
.workflow {
  background: $background-grey;

  &__project-step {
    &__header {
      display: flex;
      font-size: 2rem;

      img {
        margin-right: 20px;
        width: 20vw;
      }
    }

    &__text {
      @include mq($from: mobile, $until: tablet) {
        margin-bottom: 40px;
      }
    }
  }
}
</style>