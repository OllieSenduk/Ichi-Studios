<template>
  <div class="page-stripes">
    <div class="page-stripes__one page-stripes__stripe"></div>
    <div class="page-stripes__two page-stripes__stripe"></div>
    <div class="page-stripes__three page-stripes__stripe"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const context = this;
    TweenMax.from(".page-stripes__one", this.animationTime * 1.2, {
      height: 0,
      delay: context.delayTime * 2.2,
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-stripes__one", this.animationTime * 1.2, {
      height: 0,
      delay: context.delayTime * 2.4,
      ease: Power2.easeInOut
    });

    TweenMax.from(".page-stripes__two", this.animationTime * 1.8, {
      height: 0,
      delay: context.delayTime * 2.8,
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-stripes__one", this.animationTime * 1.2, {
      height: "100%",
      delay: context.delayTime * 2.8,
      ease: Power2.easeInOut
    });
  }
};
</script>

<style lang='scss' scoped>
.page-stripes {
  &__stripe {
    z-index: -1;
  }
  &__one {
    position: fixed;
    width: 1px;
    height: 60%;
    background: rgba(0, 0, 0, 0.2);
    left: 25%;
  }

  &__two {
    position: fixed;
    width: 1px;
    height: 90%;
    background: rgba(0, 0, 0, 0.2);
    left: 50%;
    top: -50%;
  }

  &__three {
    position: fixed;
    width: 1px;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    left: 75%;
  }
}
</style>