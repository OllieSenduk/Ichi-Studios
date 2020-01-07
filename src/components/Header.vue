<template>
  <header class="header pt2 pb2">
    <b-nav tabs justified class="content-wrapper fixed">
      <template v-for="link in links">
        <appNavItem :title="link.name" :url="link.url" :key="link.url"></appNavItem>
      </template>
    </b-nav>
  </header>
</template>



<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavItem from "@/components/navigation/NavItem";

export default {
  components: {
    appNavItem: NavItem
  },
  data() {
    return {
      links: [
        {name: "Home", url: ''},
        {name: "About", url: 'about'},
        {name: "Cases", url: 'cases'},
        {name: "Blog", url: 'blog'}
      ]
    };
  }
};
</script>

<style lang="scss">
  .nav {
    z-index: 10;
  }
  .nav-tabs .nav-link.active {
    border: none !important;
  }

  .nav-tabs .nav-link:hover {
    border: none !important;
  }

</style>
