<template>
  <section class="section-project-info">
    <div class="container">
      <div class="row">
        <aside class="col-lg-4">
          <div class="project__info">
            <ul class="project__info-list">
              <li class="project__info-list-item">
                <p class="project__info-list-label">Client</p>
                <p class="project__info-list-title">{{client}}</p>
              </li>
              <li class="project__info-list-item">
                <p class="project__info-list-label">Categories</p>

                  <div
                    v-for="(category, index) in categories"
                    :key="index"
                    class="project__info-list-sub-item"
                  >
                    <h6 class="project__info-list-title">{{category}}</h6>
                  </div>

              </li>
              <li class="project__info-list-item">
                <p class="project__info-list-label">Duration</p>
                <h6 class="project__info-list-title">{{duration}}</h6>
              </li>
            </ul>
          </div>
        </aside>

        <div class="col-lg-8">
          <h2 class="project__info-title">{{title}}</h2>
          <p class="project__info-description lead">{{introduction}}</p>
        </div>
      </div>
    </div>
    <hr />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    client: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    introduction: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  display: block;
}

h2 {
  font-family: DM Sans, sans-serif;
  margin-top: 0;
  margin-bottom: 10px;
  color: #131313;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.05em;
  font-size: 3rem;
}

@media only screen and (max-width: 991px) {
  h2 {
    font-size: 2.5rem;
  }
}
.lead {
  font-size: 1.25rem;
  line-height: 1.666666;
}
[class^="ui-"] {
  font-family: ui-icons !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ui-twitter:before {
  content: "\f099";
}
.ui-linkedin:before {
  content: "\f0e1";
}
.ui-behance:before {
  content: "\f1b4";
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

.project {
  &__info-title {
    font-size: 2.125rem;
    margin-bottom: 20px;
  }

  &__info-title {
    font-size: 2.125rem;
    margin-bottom: 20px;
  }

  &__info-list {
    list-style: none;
  }

  &__info-list-item {
    margin-bottom: 24px;
  }

  &__info-list-label {
    margin-bottom: 8px;
    text-transform: uppercase;
    font-size: 0.8125rem;
    display: block;
  }

  &__info-list-title {
    color: #131313;
    font-weight: 500;
    letter-spacing: -0.05em;
  }
}
</style>
