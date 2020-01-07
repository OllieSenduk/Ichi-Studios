<template>
  <div class="wide-card">
    <appRoundImage></appRoundImage>
    <div class="wide-card__text">
      <div class="wide-card__title">
        <h6>title</h6>
      </div>
      <div class="wide-card__text">
        <p>Text</p>
      </div>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";

export default {
  components: {
    appRoundImage: RoundImage
  }
};
</script>

<style lang="scss" scoped>
.wide-card {
  display: flex;
  align-items: center;
}
</style>