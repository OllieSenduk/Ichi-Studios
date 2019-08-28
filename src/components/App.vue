<template>                                                                                                                                             
  <div id="app">
    <component v-bind:is="layouts[layout]"/>
  </div>
</template>

<script>
  import DefaultLayout from '~/layouts/Default';
  export default {
    props: {
      layout: {
        type: String,
        default: 'default',
      },
    },
    data () {
      return {
        layouts: {
          default: DefaultLayout,
        },
      };
    },
  };
</script>