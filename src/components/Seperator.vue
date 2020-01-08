<template>
  <div class="hr-sect text-center">{{upperCasedTitle}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Next Section",
      required: true
    }
  },
  computed: {
    upperCasedTitle() {
      return this.$props.title.toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  margin: 8px 0px;
  font-size: 22px;
  font-weight: 900;
  color: black;
}

@include mq($until: tablet) {
  .hr-sect {
    font-size: 20px;
  }
}
.hr-sect::before,
.hr-sect::after {
  content: "";
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 16px;
}
</style>