<template>
  <div class="layout">
    <Navigation/>
    <router-view/> 
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation';
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
 html, body {
   margin: 0px;
 }

 html {
   font-size: 10px;
 }


  .remove_page {
    display: none;
  }
</style>