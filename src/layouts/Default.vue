<template>
  <div class="layout">
    <Navigation/>
    <router-view/> 
  </div>
</template>

<script>
  import Navigation from '~/components/shared/Navigation';
  export default {
    components: {
      Navigation,
    },
  };
</script>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style>

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
    overflow-x:hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    margin: 0px;
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