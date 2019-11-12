<template>
  <section class="projects" :class="{ remove_page: navStatus }">
    <appProjectPage
      v-for="project in shownProjects"
      :key="project.identifier"
      :identifier="project.identifier"
      :title="project.title"
      :imgLeft="project.homeImg.imgLeft"
      :imgRight="project.homeImg.imgRight"
      :text="project.homeText"
      :url="project.url"
      :categories="project.information.categories"
      :background="project.background"
      :hidden="project.hidden"
      :pageNum="project.pageNum"
    ></appProjectPage>
    <div v-if="projectOpen">
      <appProjectDescription @clicked="closeProject"></appProjectDescription>
    </div>
  </section>
</template>

<script>
import ProjectPage from "~/components/projects/ProjectPage";
import projectDescription from "~/components/projects/ProjectDescription";

import { mapState, mapGetters, mapMutations } from "vuex";
import { TweenMax } from "gsap";
import { TimelineMax } from "gsap";

export default {
  data() {
    return {
      numberOfPages: this.$children,
      started: false,
      scrollSlide: 0,
      current: 0,
      pageNum: 0,
      actualProject: "",
      shownProjects: [],
      counter: 0
    };
  },
  computed: mapState({
    projects: state => state.projects,
    ...mapState(["navOpen", "projectOpen"]),
    ...mapGetters(["navStatus", "projectOpenStatus"])
  }),
  components: {
    appProjectPage: ProjectPage,
    appProjectDescription: projectDescription
  },
  methods: {
    updateSlide() {
      const pages = this.$children;
      const currentPage = this.$children[this.current];
      const nextPage = this.$children[this.pageNum];
      var context = this;

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

      const tl = new TimelineMax({
        autoRemoveChildren: true,
        onStart: function() {
          slides.forEach(slide => {
            slide.style.pointerEvents = "none";
          });
        },
        onComplete: function() {
          slides.forEach(slide => {
            slide.style.pointerEvents = "all";
          });
        }
      });
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
        .fromTo(nextText, 0.3, { opacity: 0, y: 0 }, { opacity: 1, y: 0 });

      this.current = this.pageNum;

      tl.set(nextLeft, { clearProps: "all" }).set(nextRight, {
        clearProps: "all"
      });
      this.shownProjects.forEach(p => {
        console.log(`${p.title} & ${p.identifier}`);
      });
      let classes = document.querySelectorAll(".project__hero__image-left");
      classes.forEach(c => {
        c.classList.remove("z-indexUp");
      });
      nextLeft.classList.add("z-indexUp");
    },
    updateSlideNum(e) {
      if (this.pageNum === this.shownProjects.length - 1 && e.deltaY > 0) {
        this.pageNum = 0;
        console.log("end of the que");
      } else if (this.pageNum === 0 && e.deltaY < 0) {
        this.pageNum = this.shownProjects.length - 1;
        console.log("Starting point going back up to the last of the");
      } else if (e.deltaY > 0) {
        this.pageNum += 1;
        console.log("Regular up");
      } else if (e.deltaY < 0) {
        this.pageNum -= 1;
        console.log("regular down");
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
  created() {
    const identifier = this.$router.currentRoute.hash;
    let selectedProjectIndex;
    const context = this;

    if (identifier !== "") {
      selectedProjectIndex = this.projects.findIndex(project => {
        return project.identifier == identifier.substr(1);
      });

      if (selectedProjectIndex !== undefined) {
        context.projects.forEach((project, index) => {
          if (selectedProjectIndex == index) {
            project.hidden = false;
          } else {
            project.hidden = true;
          }
        });
        var arr = context.projects;
        var new_start = selectedProjectIndex;
        var itemCount = arr.length;
        var first_part = arr.slice(new_start, itemCount);
        var second_part = arr.slice(0, new_start);
        context.shownProjects = first_part.concat(second_part);
      }
    } else {
      context.shownProjects = context.projects;
    }
    if (process.browser) {
      window.addEventListener(
        "wheel",
        this.throttle(this.updateSlideNum, 1500)
      );
      window.addEventListener(
        "touchmove",
        preventBehavior,
        this.throttle(this.updateSlideNum, 1500)
      );
    }
  },
  mounted() {},
  destroyed() {
    if (process.browser) {
      window.removeEventListener(
        "wheel",
        this.throttle(this.updateSlideNum, 1500)
      );
      window.removeEventListener(
        "touch",
        this.throttle(this.updateSlideNum, 1500)
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.z-indexDown {
  z-index: 1;
}
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
