<template>
  <div class="large-header" id="top">
    <div class="close-page text-center" @click="returnToHome">
      <i class="fa fa-times close-page" aria-hidden="true"></i>
    </div>
    <h1 class="text-white text-center fadeText">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    returnToHome() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<style lang='scss' scoped>
.close-page {
  color: white;
}
.large-header {
  background-color: black;
  padding-top: 6vh;
  padding-bottom: 6vh;
  position: relative;

  h1 {
    text-transform: uppercase;
  }
}
</style>