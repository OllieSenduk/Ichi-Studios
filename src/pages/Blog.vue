<template>
  <Layout>
    <h1 class="my-4 mb-5">Blog</h1>

    <g-link>

      <div
        class="media my-5"
        v-for="item in $page.posts.edges"
        :key="item.node.id"
      >
        <g-image immediate :src="item.node.image" class="mr-3" alt="image" />
        <div class="media-body">
          <h5 class="mt-0">Coming soon!</h5>
          <p class="text-dark">This is coming, real soon. It will be incredibly soon. So soon. Soon. Stay tuned! This is coming, real soon. It will be incredibly soon. So soon. Soon. Stay tuned!</p>
        </div>
      </div>

    </g-link>
  </Layout>
</template>

<page-query>
query Blog {
	posts: allBlogPost(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        excerpt
        image
      }
    }
  }
}
</page-query>
<script>

export default {
  metaInfo: {
    title: "Blog"
  },
  data() {
    return {
      animationOn: true,
      transitionAnimationLink:
        "https://assets7.lottiefiles.com/datafiles/ogIQ10UnwnKiBZS/data.json"
    };
  }
}
</script>

<style lang="scss" scoped>
.media {
  img {
    width: 120px;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}
</style>
