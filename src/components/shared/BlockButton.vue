<template>
  <section class="block-btn__wrapper">
    <g-link :to="link" class="block-btn-container">
      <div class="block-btn">{{text}}</div>
    </g-link>
  </section>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: "rgba(#FFAB9D,.5);"
    },
    color: {
      type: String,
      default: "black"
    },
    link: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang='scss' scoped>
.block-btn {
  display: block;
  padding: 100px 100px;
  font-family: $main-font;
  font-size: 1.2rem;
  letter-spacing: 6px;
  color: black;
  border: 1px solid grey;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  background: none;
  z-index: 1;
  cursor: crosshair;
  transition: 0.6s ease-out;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  transform: translate(0%, 0%);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  line-height: 5rem;

  &--small {
    padding: 15px 23px;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  &__container {
    min-width: 40vw;
  }

  &:hover {
    color: white;
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    background: black;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.6s ease-out;
  }

  &:hover:before {
    top: 0;
  }
}
</style>