<template>
  <section
    class="text-block padding-block within-section-large"
    :style="{background: background, color: color}"
  >
    <div class="text-block__title-wrapper page-wrapper within-section">
      <hr class="text-block__rule" />
      <h2>{{title}}</h2>
    </div>
    <div
      class="text-block__body__wrapper within-section"
      :class="{'page-wrapper': laptopScreen, 'padding-block': laptopScreen}"
    >
      <div class="text-block__body__subtitle within-section">{{subTitle}}</div>
      <div class="text-block__body__description within-section">
        <p>{{description}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "subTitle", "description", "background", "color"],
  computed: {
    laptopScreen() {
      const screens = ["wide", "external"];
      return screens.includes(this.$mq);
    }
  }
};
</script>

<style lang='scss' scoped>
.text-block {
  @include mq($from: laptop) {
    display: flex;
  }

  &__body__subtitle {
    font-size: $large-title;
  }
}
</style>