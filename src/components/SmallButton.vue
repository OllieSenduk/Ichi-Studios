<template>
  <div class="small-button">
    Read case study
    <span class="arrow"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div,
span {
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: initial;
  margin: 0;
  padding: 0;
  color: $color-primary;
}

.small-button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 5px;
  cursor: pointer;
  margin-top: 15px;
}
</style>