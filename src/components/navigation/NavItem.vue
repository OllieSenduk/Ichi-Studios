<template>
  <b-nav-item :active="checkForActive()" :to="title">{{title}}</b-nav-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Surprise!"
    }
  },
  methods: {
    checkForActive() {
      return this.$router.app._route.path.substring(1) == this.$props.title;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  width: 100%;
  height: 100%;
}
</style>