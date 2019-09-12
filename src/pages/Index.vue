<template>
  <div class="container">
    <appBanner />
  </div>
</template>

<script>
  import Banner from '~/components/home/Banner';

  export default {
    components: {
      appBanner: Banner,
    },
    metaInfo: {
      title: 'Ollsum Agency'
    }
  }
</script>