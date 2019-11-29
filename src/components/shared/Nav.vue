<template>
  <div class="navigation">
    <div class="menu-icon" @click="handleNav">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>

    <div class="nav">
      <div class="nav__content">
        <ul class="nav__list">
          <li class="nav__list-item">Home</li>
          <li class="nav__list-item">About</li>
          <li class="nav__list-item">Projects</li>
          <li class="nav__list-item">Contact</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    handleNav() {
      let body = document.querySelector("body");
      let menu = document.querySelector(".menu-icon");
      let menuItems = document.querySelectorAll(".nav__list-item");

      //   this.$store.dispatch("updateNavStatus");
      //   if (this.navOpen === false) {
      //     this.navOpen = true;
      //   }

      if (body.classList.contains("nav-active"))
        body.classList.remove("nav-active");
      else body.classList.add("nav-active");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
$background--color: #1e2023;
$icon--color: #1e2023;
$font--color: #ffffff;
$font--color--active: $pink;
$font--primary: "Fira Sans", sans-serif;
$transition--length: 0.8;

body {
  background-color: $background--color;
  font-family: $font--primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

//default state
.menu-icon {
  $size: 60px;
  height: $size;
  width: $size;
  position: fixed;
  z-index: 801;
  right: 60px;
  top: 30px;
  cursor: pointer;
  &__line {
    height: 4px;
    width: $size;
    display: block;
    background-color: $pink;
    margin-bottom: 10px;
    transition: transform 0.2s ease, background-color 0.5s ease;
  }
  &__line-left {
    width: $size / 2;
  }
  &__line-right {
    width: $size / 2;
    float: right;
  }
}

.nav {
  $width: 100vw;
  $height: 100vh;
  $font--size--calc: calc(2vw + 10px);
  $transition--easing: cubic-bezier(0.77, 0, 0.175, 1);
  position: fixed;
  z-index: 800;
  &:before,
  &:after {
    content: "";
    position: fixed;
    width: $width;
    height: $height;
    background: rgba($pink, 0.9);
    z-index: -1;
    transition: transform $transition--easing $transition--length + s;
    transform: translateX(0%) translateY(-100%);
  }
  &:after {
    background: black;
    transition-delay: 0s;
  }
  &:before {
    transition-delay: 0.1s;
  }
  &__content {
    position: fixed;
    top: 50%;
    transform: translate(0%, -50%);
    width: 100%;
    text-align: center;
    font-size: $font--size--calc;
    font-weight: 200;
    cursor: pointer;
  }
  &__list {
    display: flex;
    justify-content: space-around;
  }
  &__list-item {
    position: relative;
    display: inline-block;
    transition-delay: $transition--length + s;
    opacity: 0;
    transform: translate(0%, 100%);
    transition: opacity 0.2s ease, transform 0.3s ease;
    margin-right: 25px;
    color: white;
    &:before {
      content: "";
      position: absolute;
      background: $font--color--active;
      width: 20px;
      height: 1px;
      top: 100%;
      transform: translate(0%, 0%);
      transition: all 0.3s ease;
      z-index: -1;
    }
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
}

//active state
body.nav-active {
  $menu--items--count: 4;
  .menu-icon {
    &__line {
      background-color: $pink;
      transform: translateX(0px) rotate(-45deg);
    }
    &__line-left {
      transform: translateX(1px) rotate(45deg);
    }
    &__line-right {
      transform: translateX(-2px) rotate(45deg);
    }
  }
  .nav {
    visibility: visible;
    &:before,
    &:after {
      transform: translateX(0%) translateY(0%);
    }
    &:after {
      transition-delay: 0.1s;
    }
    &:before {
      transition-delay: 0s;
    }
    &__list-item {
      opacity: 1;
      transform: translateX(0%);
      transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
      @for $i from 0 through $menu--items--count {
        &:nth-child(#{$i}) {
          transition-delay: $transition--length * $i / 8 + 0.5 + s;
        }
      }
    }
  }
}
</style>