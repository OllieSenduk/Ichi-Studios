<template>
  <div class="layout">
    <div class="content-wrapper">
      <Header />
      <transition>
        <div class="application-wrapper" mode="out-in">
          <slot />
        </div>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: {
    Footer,
    Header
  }
};
</script>


<style lang="scss">
body,
html {
  height: 100%;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
