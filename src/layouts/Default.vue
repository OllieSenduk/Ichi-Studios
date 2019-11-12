<template>
  <div class="layout">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- <div class="layout__content"> -->
    <Navigation />
    <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
import Navigation from "~/components/shared/Navigation";
import Footer from "~/components/shared/Footer";

export default {
  components: {
    Navigation,
    Footer
  },
  mounted() {}
};
</script>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  overflow-x: hidden;
  font-size: 10px;
  margin: 0px;
  font-family: $main-font;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  margin: 0px;
}

.layout {
  // position: relative;
  // min-height: 100vh;

  // &__content {
  //   padding-bottom: 8rem;
  // }
}

.remove_page {
  display: none;
}

.hidden {
  display: none !important;
}

.hidden-opacity {
  opacity: 0;
}
</style>