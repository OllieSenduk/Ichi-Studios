<template>
  <div class="container">
    <appBanner />
  </div>
</template>

<script>
  import Banner from '~/components/Banner';

  export default {
    components: {
      appBanner: Banner,
    },
    metaInfo: {
      title: 'Ollsum Agency'
    }
  }
</script>