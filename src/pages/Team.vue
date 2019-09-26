<template>
  <Layout>
    <div class="team__wrapper">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <div class="large-header" id="top">
        <h1 class="text-white text-center fadeText">PROJECTS</h1>
      </div>

      <div
        :class="['outer-container', isSelected ? 'container-selected':'', isReady ? 'container-ready':'']"
        id="app"
      >
        <div class="team-container">
          <div class="header"></div>
          <div class="project-list" :class="$mq">
            <div
              class="project"
              v-for="(project,index) in projects"
              @click="selectproject(index,$event)"
              :class="$mq"
              v-bind:key="project"
            >
              <img class="project-img" :src="project.photo" :ref="project.id" :class="$mq" />
              <div class="project-details">
                <h2 class="project-title">{{project.name}}</h2>
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
                  <h2 class="project-title">{{selectedprojectData.name}}</h2>
                  <p class="project-desc">{{selectedprojectData.title}}</p>
                  <div class="social"></div>
                </div>
                <div class="team-detail-bio-content" v-html="selectedprojectData.bio"></div>

                <a
                  :href="selectedprojectData.social.projectLink"
                  target="_blank"
                  v-if="selectedprojectData.social.projectLink"
                >Visit Project</a>
              </div>
            </div>
          </div>
        </div>
        <div class="home-bottom" :class="{hidden: this.isSelected}">
          <appFooter :fixed="false"></appFooter>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Footer from "~/components/shared/Footer";

var VueScrollTo = require("vue-scrollto");
export default {
  components: {
    appFooter: Footer
  },
  data() {
    return {
      projects: [
        {
          id: "#selectorOne",
          name: "Automaat SPACE",
          photo: "https://i.imgur.com/3ClzCE0.png",
          categories: ["Tech /", "Trading /", "Crypto Currency"],
          bio:
            "<p>Human emotion is one of the main issues when dealing with trading. Thus here at Ollsum we partnered with Unless Agency to built a fully automated trading bot which learns from it's past trades and decides on the best trading strategies through data it collects from multiple api's. Automaat.space is still in beta, but has proven to be able to be increasingly profitable in multiple market scenario’s. We show a little sneak peak here:</p>",
          social: {
            projectLink: "https://automaat-space.herokuapp.com/",
            linkedin: "#"
          }
        },
        {
          id: "#selectorTwo",
          name: "Diabetic Fund",
          photo: "https://i.imgur.com/zuVlp30.gif",
          categories: ["Animation /", "Design"],
          bio:
            "<p>People are unaware of the progress made in Diabetic research and are therefor less willing to donate. By showing the results of the research throughout history, we stimulate them to invest to further the progress in curing diabetes.</p>",
          social: {
            projectLink: "https://munirdevries.com/Gemeente-Utrecht",
            linkedin: "#"
          }
        },
        {
          id: "#selectorThree",
          name: "Farm & Co",
          photo: "https://i.imgur.com/ocYMyRc.png",
          categories: ["Tech /", "Startup /", "Logistics"],
          bio:
            "<p>On the one hand, Australian local farmers do not have a way to connect with consumers directly and on the other, consumers would like to support their local famers. To tackle this George has designed and build a marketplace where consumers can order directly from the farmers and have it delivered to their doorstep.</p>",
          social: {
            projectLink: "https://www.farmandco.com.au/shop",
            linkedin: "#"
          }
        },
        {
          id: "#selectorTwo",
          name: "Portraits by Roeltje",
          photo: "https://i.imgur.com/MSnpzT4.jpg",
          categories: ["Photography /", "Portraits"],
          bio:
            "<p> A series of portraits by Amsterdam based photographer roeltje van de Sande Bakhuyzen </p>",
          social: {
            projectLink: "https://roeltje-photography.com/",
            linkedin: "#"
          }
        },
        {
          id: "#selectorThree",
          name: "Gras Voer",
          photo: "https://i.imgur.com/nGQlMRf.png",
          categories: ["Startup /", "Strategy"],
          bio:
            "<p>Award winning project by Wouter Moonen aimed to encourage young adults to pick up sustainable habits. </p>",
          social: {
            twitter: "https://twitter.com/knyttneve",
            linkedin: "#"
          }
        },
        {
          id: "#selectorFour",
          name: "Mural by Munir",
          photo:
            "https://thumbs.gfycat.com/BlackandwhiteAdmiredCoral-size_restricted.gif",
          categories: ["Graffiti /", "Art"],
          bio:
            "<p>A truly epic mural was made by Munir de Vries in his hometown of Utrecht for the Municipality there. The aim was to create more social cohesian between the residents there through art.</p>",
          social: {
            projectLink: "https://munirdevries.com/Gemeente-Utrecht",
            linkedin: "#"
          }
        },
        {
          id: "#selectorThree",
          name: "Bedrock Podcast",
          photo: "https://i.imgur.com/6ScqTqE.png",
          categories: ["Podcast /", "Content"],
          bio:
            "<p>Rosa Bertram is the host of a new podcast by <a href='https://www.bedrock.nl' target='https://www.bedrock.nl'>Bedrock</a> called Bedrock Talks, where she tries to uncover the underlying principles of living a happy life.</p>",
          social: {
            projectLink:
              "https://www.bedrock.nl/podcast-bedrock-talks-aflevering-1/?utm_medium=FacebookEchobox&utm_source=Facebook&fbclid=IwAR3YQi724oPsqQClVY285CNbFtTbPEWfewOeCmcXs0y-p7bogjL4m1iP-co#Echobox=1556697760",
            linkedin: "#"
          }
        },
        {
          id: "#selectorThree",
          name: "Ticket Master Award",
          photo: "https://i.imgur.com/ckYJ1ol.png",
          categories: ["Design /", "Artwork"],
          bio:
            "<p><a href='https://www.ticketmaster.com/' target='https://www.ticketmaster.com/'>TicketMaster</a> had it's award designed by Munir de Vries. Famous Dutch hip hop artist Ronnie Flex was the lucky one to receive it.</p>",
          social: {
            twitter: "https://twitter.com/knyttneve",
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
        console.log(el.target.className);

        if (el.target.className.split(" ")[0] == "project") {
          this.selectedproject = el.target;
        } else {
          el.target.parentElement.className.includes("project-details")
            ? (this.selectedproject = el.target.parentElement.parentElement)
            : (this.selectedproject = el.target.parentElement);
        }

        console.log(this.selectedproject);

        this.selectedproject.classList.add("project-selected");
        this.selectedproject.setAttribute(
          "style",
          `width:${this.selectedproject.offsetWidth}px;`
        );

        this.selectedprojectData = this.projects[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedproject.offsetWidth}px;height:100vh;left:${this.selectedproject.offsetLeft}px;top:${this.selectedproject.offsetTop}px;position:fixed`;
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
  displayList: function() {
    console.log("hello world");
  },
  mounted() {
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

<style lang='scss' scoped>
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
  max-width: 1400px;
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

  &.laptop {
    width: 90%;
    margin-bottom: 10vh;
  }

  &.wide {
    width: 90%;
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
    font-size: 0.8em;
    letter-spacing: 2px;
    font-style: italic;
  }

  &-more {
    color: $pink;
    text-transform: uppercase;
    font-size: 0.8em;
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
  &.laptop {
    margin-top: -60px;
  }
  &.wide {
    margin-top: -60px;
  }
}

.project:nth-child(odd) {
  &.laptop {
    height: 65%;
  }
  &.wide {
    height: 65%;
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