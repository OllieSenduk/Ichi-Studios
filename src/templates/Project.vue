<template>
  <section v-if="project" class="project-details page-wrapper" :class="{ remove_page: navStatus }">
    <div class="project-details__wrapper">
      <div class="close-page close-page--text" @click="returnToProjects">
        <b v-responsive="['hidden-all','md', 'lg', 'xl']">BACK</b>
        <i class="fa fa-times" aria-hidden="true" v-responsive="['hidden-all','xs','sm']"></i>
      </div>
      <div class="project-details__container">
        <div class="project-details__header within-section">
          <div class="project-details__title">
            <h1 class="text-title">{{ project.title }}</h1>
            <h2 class="text-smooth-yellow">{{ project.subTitle }}</h2>
          </div>
          <div class="project-details__image-container">
            <img :src="project.images.imgHeader" alt="project image" />
          </div>
        </div>
        <div class="project-details__summary">
          <div class="project-details__subtitle within-section block">
            <h3>{{ project.summary }}</h3>
          </div>
          <div class="project-detail__body">
            <div class="project-details__block block">
              <div class="project-detail__block__question text-smooth-yellow within-section">
                <p>Problem</p>
              </div>
              <div class="project-detail__block__answer within-section">
                <p>{{ project.problem }}</p>
              </div>
            </div>

            <div class="project-details__summary-container within-section">
              <div class="project-details__summary-wrapper within-section">
                <div class="project-details__summary-wrapper__title text-smooth-yellow">
                  <p>Categories</p>
                </div>
                <ul v-for="category in project.information.categories">
                  <li>
                    <p>{{ capitalizeSentence(category) }}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="project-details__image within-section" v-if="project.images.imgOne">
              <img :src="project.images.imgOne" alt="project image" />
            </div>

            <div class="project-details__block block">
              <div class="project-detail__block__question text-smooth-yellow within-section">
                <p>Solution</p>
              </div>
              <div class="project-details__block__answer within-section-large">
                <p>{{ project.solution }}</p>
              </div>
              <div class="project-details__visit within-section-large" v-if="project.visit">
                <a :href="project.linkProject" target="_blank">
                  <p class="text-smooth-yellow">Visit the project!</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="project-details__video within-section" v-if="project.hasVideo">
          <div class="project-details__video-wrapper">
            <div class="embed-container">
              <iframe
                src="https://www.youtube.com/embed/NImc6aEGpY4"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="project-details__images" v-if="project.images.imgTwo">
          <div class="project-details__image">
            <img :src="project.images.imgTwo" class="skewed-img-left" alt="project image" />
          </div>
        </div>
      </div>
    </div>
    <appFooter></appFooter>
  </section>
</template>

<script>
import Footer from "~/components/shared/FooterMain";
import Button from "~/components/shared/Button";
import META_TAGS from "~/data/meta-tags.js";

import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  metaInfo: {
    title: META_TAGS.projects.title,
    meta: [
      {
        key: "description",
        name: "description",
        content: META_TAGS.projects.description
      }
    ]
  },
  data() {
    return {
      identifier: ""
    };
  },
  components: {
    appFooter: Footer,
    appButton: Button
  },
  metaInfo: {},
  methods: {
    returnToProjects() {
      const returnToProject = this.project.identifier;
      this.$router.push({ path: `/projects#${returnToProject}` });
    },
    capitalizeSentence(sentence) {
      var newSentence = sentence
        .split(" ")
        .map(word => {
          return (
            word.charAt(0).toUpperCase() + word.substring(1, sentence.length)
          );
        })
        .join(" ");

      return newSentence;

      return newSentence.join(" ");
    }
  },
  computed: {
    ...mapState(["navOpen", "projectOpen", "projects"]),
    ...mapGetters(["navStatus", "projectOpenStatus"]),
    project: function() {
      return this.projects.find(p => {
        return p.identifier === this.$route.params.identifier;
      });
    }
  },
  mounted() {
    document.addEventListener("beforeunload", this.goToProject, false);
  },
  beforeDestroy() {
    document.removeEventListener("beforeunload", this.goToProject);
  }
};
</script>

<style lang="scss" scoped>
.project-details {
  color: white;
  background: radial-gradient(rgb(177, 139, 179), rgba(11, 16, 35, 1));

  &__container {
  }

  &__title {
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    text-transform: uppercase;
    color: white;

    h2 {
      font-weight: $thin-text;
    }
  }

  &__subtitle {
    font-size: 2rem;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 2px;
    color: white;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__block {
    @include mq($from: laptop) {
      width: 60vw;
    }
  }
  &__image-container {
    margin-top: 40px;
    text-align: center;
    // width: 100vw;
    // height: 60vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      @include mq($from: laptop) {
        margin-bottom: 30px;
        width: 80%;
      }

      @include mq($from: wide) {
        width: 60%;
      }
    }
  }

  &__image {
    width: 100%;
    text-align: center;
    @include mq($from: laptop) {
    }

    img {
      width: 80%;

      @include mq($from: laptop) {
        width: 40%;
      }
    }
  }

  // &__images {
  //   align-items: center;
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  //   @include mq($from: tablet) {
  //   }

  //   img {
  //     width: 100%;

  //     @include mq($from: tablet) {
  //       width: 50%;
  //     }
  //   }
  // }

  &__summary-container {
    overflow: auto;
  }

  &__summary-wrapper {
    background: black;
    padding: 20px 20px 20px 20px;
    float: right;
    width: 80vw;

    @include mq($from: wide) {
      width: 50%;
    }

    ul {
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }

  &__video {
    display: flex;
    justify-content: center;
  }

  &__video-wrapper {
    @include mq($from: tablet) {
      width: 80%;
    }

    @include mq($from: wide) {
      width: 60%;
    }
  }
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
