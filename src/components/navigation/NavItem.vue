<template>
  <b-nav-item :active="checkForActive()" :to="`/${url}`">{{title}}</b-nav-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Surprise!"
    },
    url: {
      type: String,
      default: ''
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
.nav-item {
  a {
    background: white;
    width: 100%;
    height: 100%;
  }
  .router-link-exact-active {
    color: $color-primary !important;
  }
}
</style>
