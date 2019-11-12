<template>
  <div class="large-header" id="top">
    <h1 class="text-white text-center fadeText">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang='scss' scoped>
.large-header {
  background-color: black;
  padding-top: 10vh;
  padding-bottom: 10vh;

  h1 {
    text-transform: uppercase;
  }
}
</style>