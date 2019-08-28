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
 body {
   margin: 0px;
   background: black;
 }
</style>