<template>
  <section class="projects" :class="{ remove_page: navStatus }">
    <appProjectPage
      v-for="project in getArray"
      :key="project.identifier"
      :title="project.title"
      :imgLeft="project.imgLeft"
      :imgRight="project.imgRight"
      :text="project.text"
      :categories="project.categories"
      :background="project.background"
      :hidden="project.hidden"
      :pageNum="project.pageNum"
    ></appProjectPage>
    <!-- <div class="projects__slider">
                <div class="page-1">

                    <svg
                        class="slide active"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="6" cy="6" r="6" fill="white" />
                    </svg>
                </div>
            <div class="page-2">
                <svg
                    class="slide "
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
            <div class="page-3">
                <svg
                    class="slide"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
            <div class="page-3">
                <svg
                    class="slide"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
                      <div class="page-3">
                <svg
                    class="slide"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
    </div>-->
  </section>
</template>

<script>
import ProjectPage from "~/components/projects/ProjectPage";
import { mapState, mapGetters, mapMutations } from "vuex";
import { TweenMax } from "gsap";
import { TimelineMax } from "gsap";

export default {
  computed: {
    getArray() {
      this.projects.slide(1);
      // console.log(this.projects.slice(1, this.projects.length));
      // return this.projects.slice(1, this.projects.length);
    },
    ...mapState(["navOpen"]),
    ...mapGetters(["navStatus"])
  },
  components: {
    appProjectPage: ProjectPage
  },
  methods: {
    updateSlide() {
      //  console.log(this.pageNum)

      const pages = this.$children;
      // Current & Next Page
      const currentPage = this.$children[this.current];
      // const nextPage = this.$children[this.pageNum + 1];
      const nextPage = this.$children[this.pageNum];
      //    if (this.pageNum === this.$children.length-1) {
      //         nextPage = this.$children[0];
      //     } else {
      //         nextPage = this.$children[this.pageNum + 1];
      //     }
      var context = this;
      // Page Elements
      // console.log(currentPage)
      // console.log(nextPage)

      const pagesContainer = document.querySelector(".projects");
      const currentPageContainer = currentPage.$el.querySelector(".project");
      const nextPageContainer = nextPage.$el.querySelector(".project");
      const currentLeft = currentPage.$el.querySelector(
        ".project__hero__image-left"
      );
      const currentRight = currentPage.$el.querySelector(
        ".project__hero__image-right"
      );
      const currentText = currentPage.$el.querySelector(".project__details");

      const nextLeft = nextPage.$el.querySelector(".project__hero__image-left");
      const nextRight = nextPage.$el.querySelector(
        ".project__hero__image-right"
      );

      const nextText = nextPage.$el.querySelector(".project__details");
      // console.log(currentLeft)

      const tl = new TimelineMax({});
      tl.fromTo(currentLeft, 0.3, { y: "-10%" }, { y: "-100%" });
      tl.fromTo(currentRight, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2")
        .to(pagesContainer, 0.3, {
          backgroundImage: context.projects[context.pageNum].background
        })
        .fromTo(currentPageContainer, 0.3, { opacity: 1 }, { opacity: 0 })
        .fromTo(
          nextPageContainer,
          0.3,
          { opacity: 0, pointerEvents: "none" },
          { opacity: 1, pointerEvents: "all" },
          "-=0.6"
        );
      tl.fromTo(nextLeft, 0.3, { y: "-100%" }, { y: "-10%" }, "-=0.6")
        .fromTo(nextRight, 0.3, { y: "-100%" }, { y: "10%" }, "-=0.8")
        .fromTo(nextText, 0.3, { opacity: 0, y: 0 }, { opacity: 1, y: 0 })
        .set(nextLeft, { clearProps: "all" })
        .set(nextRight, { clearProps: "all" });

      this.current = this.pageNum;
    },
    updateSlideNum(e) {
      if (e.deltaY > 0) {
        this.pageNum += 1;
      } else {
        this.pageNum -= 1;
      }
      if (this.pageNum === this.projects.length) {
        this.pageNum = 0;
      }
      if (this.pageNum < 0) {
        this.pageNum = 2;
      }
      this.updateSlide();
    },
    throttle(func, limit) {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    }
  },
  mounted() {
    window.addEventListener("wheel", this.throttle(this.updateSlideNum, 1500));
    window.addEventListener(
      "touchmove",
      this.throttle(this.updateSlideNum, 1500)
    );
  },
  destroyed() {
    window.removeEventListener(
      "wheel",
      this.throttle(this.updateSlideNum, 1500)
    );
    window.removeEventListener(
      "touch",
      this.throttle(this.updateSlideNum, 1500)
    );
  },
  data() {
    return {
      tl: new TimelineMax({}),
      started: false,
      scrollSlide: 0,
      current: 0,
      pageNum: 0,
      projects: [
        {
          pageNum: 0,
          identifier: "ikea",
          title: "IKEA",
          imgLeft: "https://i.imgur.com/aIsAVTR.jpg",
          imgRight: "https://i.imgur.com/zGKi8MQ.png",
          url: "/ikea",
          text: "The Wonderful Everyday",
          categories: ["Tech", "Development", "Project Management"],
          background: `radial-gradient(#2B3760, #0B1023)`,
          hidden: false
        },
        {
          pageNum: 1,
          identifier: "creativos_de_la_noche",
          title: "Creativos de la Noche",
          imgLeft: "https://i.imgur.com/ieEjiHi.jpg",
          imgRight: "https://i.imgur.com/AG1ezvi.jpg",
          url: "/creativos-de-la-noche",
          text: "Campaign for Creativity",
          categories: ["Event", "Production", "Photography", "Film"],
          background: `radial-gradient(#4E3022, #161616)`,
          hidden: true
        },
        {
          pageNum: 2,
          identifier: "Super Cool",
          title: "Super cool",
          imgLeft: "https://i.imgur.com/ieEjiHi.jpg",
          imgRight: "https://i.imgur.com/AG1ezvi.jpg",
          url: "/creativos-de-la-noche",
          text: "Amazing",
          categories: ["Event", "Production", "Photography", "Film"],
          background: `radial-gradient(#4E4342, #161616)`,
          hidden: true
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.projects {
  overflow-x: hidden;
  background: radial-gradient(rgb(177, 139, 179), rgba(11, 16, 35, 1));

  &__slider {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(50%);

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
    }
  }
}
</style>


