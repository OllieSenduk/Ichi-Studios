<template>
  <div class="team__wrapper">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div
      :class="[
        'outer-container',
        isSelected ? 'container-selected' : '',
        isReady ? 'container-ready' : ''
      ]"
      id="app"
    >
      <div class="team-container within-section">
        <div class="project-list" :class="$mq">
          <div
            class="project"
            v-for="(project, index) in projects"
            @click="selectproject(index, $event)"
            :class="$mq"
          >
            <img class="project-img" :src="project.photo" :ref="project.id" :class="$mq" />
            <div class="project-details">
              <h2 class="project-title">{{ project.name }}</h2>
              <span v-for="category in project.categories" class="project-desc">{{ category }}</span>
              <p class="project-more">Read more!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="team-detail">
        <div class="team-detail-inner" v-if="isOk">
          <div class="team-detail-left">
            <div class="team-detail-photo">
              <img :src="selectedprojectData.photo" alt />
            </div>
          </div>
          <div class="team-detail-right">
            <div class="team-detail-bio">
              <div class="team-detail-header">
                <h2 class="project-title">{{ selectedprojectData.name }}</h2>
                <p class="project-desc">{{ selectedprojectData.title }}</p>
                <div class="social"></div>
              </div>
              <div class="team-detail-bio-content" v-html="selectedprojectData.bio"></div>

              <a
                :href="selectedprojectData.social.projectLink"
                target="_blank"
                v-if="selectedprojectData.social.projectLink"
              >Visit Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var VueScrollTo = require("vue-scrollto");

export default {
  components: {},
  data() {
    return {
      projects: [
        {
          id: "#selectorOne",
          name: "Oliver Senduk",
          photo: "https://i.imgur.com/r2NdPI9.jpg",
          categories: ["Chief Executive Officer"],
          bio:
            "<p> Oliver is a software engineer with a focus on creating strategies & roadmaps to launch & grow new ideas and products. Besides programming he is also a mentor for the participants in the world's biggest Blockchain & AI hackathon <i>Oddesy </i>.</p>",
          social: {
            linkedin: "#"
          }
        },
        {
          id: "#selectorThree",
          name: "Inou Ridder",
          photo: "https://i.imgur.com/VLnOtCR.jpg",
          categories: ["Chief Technical Operations"],
          bio:
            "<p>Inou lives and breaths software and has led many digital projects to great success. Besides being a wizard with code, he also has amazing skills in communicating, which he has demontrated by being the lead teacher at the <i>Le Wagon</i> coding school for entrepeneurs, where he has given lectures to 300+ people all over the world.</p>",
          social: {
            linkedin: "#"
          }
        },
        {
          id: "#selectorThree",
          name: "Leon Houwelingen",
          photo: "https://i.imgur.com/4mNSsxW.jpg",
          categories: ["Chief Sales Officer"],
          bio:
            "<p>Leon has amassed a solid leadership record in the business and charity arenas. He has steered several companies through challenging phases to deliver results that position them for sustainable business growth.</p>",
          social: {
            linkedin: "#"
          }
        }
      ],
      selectedprojectIndex: null,
      isSelected: false,
      selectedproject: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedprojectData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectproject(index, el) {
      if (!this.isOk) {
        this.selectedprojectIndex = index;
        this.isSelected = true;

        if (el.target.className.split(" ")[0] == "project") {
          this.selectedproject = el.target;
        } else {
          el.target.parentElement.className.includes("project-details")
            ? (this.selectedproject = el.target.parentElement.parentElement)
            : (this.selectedproject = el.target.parentElement);
        }
        this.$emit("togglePage", true);

        this.selectedproject.classList.add("project-selected");
        this.selectedproject.setAttribute(
          "style",
          `width:${this.selectedproject.offsetWidth}px;`
        );

        this.selectedprojectData = this.projects[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedproject.offsetWidth}px;height:100vh;left:${this.selectedproject.offsetLeft}px;position:fixed`;
          this.selectedproject.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
        window.setTimeout(() => {
          VueScrollTo.scrollTo("#top", 500);
        }, 700);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.$emit("togglePage", false);
        this.selectedproject.classList.add("project-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedproject.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedproject.classList.remove(
          "project-back",
          "project-selected"
        );
        this.isOk = false;
      }, 400);
      window.setTimeout(() => {
        VueScrollTo.scrollTo(this.selectedproject, 500);
      }, 400);
    }
  },
  displayList: function() {},
  mounted() {
    console.log(VueScrollTo);
    var self = this;
    const passedElement = this.$route.hash;

    if (passedElement !== "") {
      self.openProject(passedElement);
      // console.log(self.$refs[element][0].click())
      // console.log(self.$refs.element.$el.click())
      // self.scrollFix(this.$route.hash)
    } else {
      VueScrollTo.scrollTo("#top", 700);
      // self.scrollFix('#top')
    }
    //     setTimeout(() => self.scrollFix('#' + self.$route.hash), 1)
    // }
    // console.log(this.$route.hash)
    // setTimeout(() => self.scrollFix(self.$route.hash), 1)
  }
};
</script>

<style lang="scss" scoped>
.large-header {
  background-color: black;
  min-height: 20vh;
}
.outer-container {
  width: 100%;
  display: grid;
  align-items: center;
  height: 100vh;
  transform: translate(0px, 0px);
}
.header {
  width: 100%;
  text-align: center;
  margin-bottom: 45px;
  overflow: hidden;
  transition: 0.45s ease 0.05s;
  max-height: 70px;
  &-title {
    width: 100%;
    font-size: 3.3em;
    color: black;
    margin-bottom: 15px;
  }
}

.header-title {
  color: white;
}

.team-container {
  padding: 0 30px;
  box-sizing: border-box;
  max-width: 85vw;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  height: auto;
}

.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  //   > div:nth-of-type(1) {
  //   background-color: #ead8c2;
  // }

  // > div:nth-of-type(2) {
  //   background-color: #4f8365;
  // }

  // > div:nth-of-type(3) {
  //   background-color: #eca414;
  // }

  // > div:nth-of-type(4) {
  //   background-color: #ead8c2;
  // }

  // > div:nth-of-type(5) {
  //   background-color: #4f8365;
  // }
  // > div:nth-of-type(6) {
  //   background-color: #eca414;;
  // }
  // > div:nth-of-type(7) {
  //   background-color: #3a568c;
  // }
  // > div:nth-of-type(8) {
  //   background-color: #ead8c2;
  // }

  // > div:not(:first-of-type) {
  //   color: white;
  // }
}

.project {
  z-index: 500;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &.external {
    width: 90%;
    margin-bottom: 10vh;
  }

  &.laptop {
    width: 70%;
    margin-bottom: 10vh;
  }

  &.wide {
    width: 70%;
    margin-bottom: 10vh;
  }
  &.tablet {
    width: calc(100% - 20px);
  }
  &.mobile {
    width: 100%;
    margin-bottom: 2em;
  }
  cursor: pointer;
  overflow: hidden;
  transition: 0.45s;
  position: relative;

  &-details {
    padding: 0 20px;
    box-sizing: border-box;
    transition: 0.3s;
    // background: $azur;
    color: white;

    &.laptop {
      width: 90%;
    }
  }

  &-img {
    width: 100%;
    &.laptop {
      width: 100%;
      height: 60vh;
    }
    &.wide {
      width: 100%;
      height: 60vh;
    }
    &.external {
      width: 100%;
      height: 60vh;
    }
  }
  &-title {
    color: black;
    font-size: 2em;
    margin-bottom: 20px;
  }
  &-desc {
    margin-top: 20px;
    color: $text-grey;
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 2px;
    font-style: italic;
  }

  &-more {
    color: $pink;
    text-transform: uppercase;
    font-size: 1.2em;
    letter-spacing: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    &:hover {
      .project {
        opacity: 1;
      }
    }
    &.laptop {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    &.wide {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    &.external {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25), 0 30px 30px rgba(0, 0, 0, 0.22);
  }
  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: black;
    content: "";
    height: 0px;
    transition: 0.45s;
  }
  &:after {
    content: "\e5c4";
    font-family: "Material Icons";
    font-size: 36px;
    color: white;
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
    display: flex;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    text-align: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    left: 0;
    flex-direction: column;
  }
}

.container-selected {
  .header {
    max-height: 0px;
  }
  .project {
    opacity: 0 !important;
    pointer-events: none;
  }
  .project-list .project-selected {
    opacity: 1 !important;

    &:before {
      height: 100%;
    }
    .project-details {
      margin-top: -40px;
      opacity: 0;
    }
  }
}
.team-detail {
  position: absolute;
  width: calc(100% - 100px);
  right: 80px;
  top: 0;
  height: 100%;
  color: black;
  transition: 0.15s;
  opacity: 0;
  visibility: hidden;
  box-sizing: border-box;
  &-bio {
    margin-left: 20px;
    &-content {
      p {
        margin-bottom: 15px;
        line-height: 25px;
        font-size: 1.05em;
      }
    }
  }
  &-header {
    margin-bottom: 30px;
  }
  &-inner {
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  &-left {
    position: relative;
    width: 650px;
    min-height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    &:before {
      width: 100%;
      height: 100%;
      content: "";
      background: rgba(#282828, 0.8);
      position: absolute;
      right: 0;
      top: 0;
    }
    &:after {
      width: 100%;
      height: 100%;
      content: "";
      background: linear-gradient(
        to right,
        rgba(40, 40, 40, 0) 9%,
        rgba(40, 40, 40, 0) 10%,
        rgba(40, 40, 40, 0) 38%,
        rgba(40, 40, 40, 1) 92%,
        rgba(40, 40, 40, 1) 100%
      );

      position: absolute;
      right: 0;
      top: 0;
    }
  }
  &-photo {
    position: relative;
    text-align: center;
    z-index: 100;
    width: 100%;
    font-size: 0px;
    img {
      max-width: 100%;
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.3);
    }
  }
  &-right {
    box-sizing: border-box;
    width: calc(100% - 650px);
    min-height: 100%;
    display: flex;
    align-items: center;
    padding-right: 10%;
    position: relative;
    right: 0;
    flex-wrap: wrap;
    .project-title {
      font-size: 2.2em;
    }
  }
}

.project {
  &.tablet {
    margin-bottom: 50px;
  }
}

.project:nth-child(even) {
  &.laptop {
    img {
      width: 100%;
      height: 100vh;
    }
  }
}

.project:nth-child(odd) {
  // &.laptop {
  //   margin-top: 60px;
  // }
  // &.wide {
  //   margin-top: 60px;
  // }
  // &.external {
  //   margin-top: 60px;
  // }
}

.project:nth-child(odd) {
  &.laptop {
    height: 90%;
  }
  &.wide {
    height: 90%;
  }
  &.external {
    height: 90%;
  }
}

.container-ready {
  .team-detail {
    transition: 0.45s ease 0.3s;
    opacity: 1;
    right: 0;
    visibility: visible;
    img {
      width: 75%;
    }
  }
  .team-container {
    height: 0px;
    overflow: hidden;
  }
  .project-selected {
    left: 0px !important;
    top: 0px !important;
    z-index: 99;
    // height: 100vh !important;
    width: 100px !important;
    pointer-events: auto;
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
}

.project-back {
  &:before {
    height: 0px !important;
  }
  .project-details {
    margin-top: -15px !important;
    transition-delay: 0.35s;
    opacity: 1 !important;
  }
}

.team-detail-left {
  background-image: url("https://i.imgur.com/vI4dJR9.png");
}

.social {
  margin-top: 15px;
  a {
    color: #fbf9bd;
    font-size: 20px;
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
}
@media (max-width: 1200px) {
  .team-detail-left {
    width: 400px;
    padding: 0 40px;
    box-sizing: border-box;
  }
  .team-detail-right {
    padding-right: 0;
    width: calc(100% - 440px);
  }
  .project .project-title {
    font-size: 1.7em;
  }
  .project-details {
    padding: 0 10px;
  }
}

@media (max-width: 970px) {
  .team-detail-left {
    width: 100%;
    padding: 50px 50px 30px 50px;
    &:after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(33, 33, 33, 1) 83%,
        rgba(40, 40, 40, 1) 100%
      );
    }
  }
  .team-detail-right {
    padding: 0 50px;
    width: 100%;
  }
  .team-detail-header {
    text-align: center;
  }
  .container-ready .project-selected {
    width: 50px !important;
  }
  .team-detail {
    width: calc(100% - 50px);
  }
  .project {
    width: calc(50% - 20px);
  }
}
@media (max-width: 480px) {
  .project {
    width: 100%;
    margin-bottom: 50px;
  }
  .header {
    margin-top: 50px;
  }
}
</style>
