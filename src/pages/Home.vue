<template>
  <Layout>
    <section v-if="animationOn">
      <appPageTransition :link="transitionAnimationLink"></appPageTransition>
    </section>
    <section class="banner" v-else>
      <!-- <div class="container"> -->
      <div class="hero_container">
        <div
          id="w-node-22c4160c98df-eaea5c31"
          data-w-id="6866990c-9e10-825e-284a-22c4160c98df"
          class="hero_copy"
        >
          <h1 id="header" class="hero-heading">Create the Future</h1>
          <p
            id="subheader"
            class="paragraph-l cc-subhead"
          >We help brands find digital solutions by desiging & building scalable prototypes.</p>
          <a
            id="continue-hero"
            data-w-id="6866990c-9e10-825e-284a-22c4160c98e4"
            href="#"
            class="hero-button cc-main w-inline-block"
          >
            <div>
              Get in touch
              <span class="cta-button_sub-text">— but really!</span>
            </div>
            <div data-w-id="762d5b6f-0761-e312-ee75-d1d01e68edcd" class="inner-button"></div>
          </a>
        </div>
        <div id="w-node-22c4160c98e8-eaea5c31" class="hero_screenshot">
          <img src="https://i.imgur.com/3fMphEH.png" alt class="hero_image" />
        </div>

        <div id="w-node-1e7871d5feeb-eaea5c31" class="hero_logos">
          <img src="https://i.imgur.com/89tZdKj.png" alt class="logo lawspot" />
          <img src="https://i.imgur.com/3XaAZuW.png" alt class="logo Zaina" />
          <img src="https://i.imgur.com/usLBmhC.jpg" alt class="logo IKEA" />
          <img src="https://i.imgur.com/X02YRNW.png" alt class="logo Le_Wagon" />
          <img src="https://i.imgur.com/y6vzoAX.png" alt class="logo Jobdex" />
          <img src="https://i.imgur.com/cOPzNdc.jpg" alt class="logo DepotLab" />
          <img src="https://i.imgur.com/Fs4mHSj.png" alt class="logo Clubhaus" />
          <img
            src="https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d42802a5e4c2e4e91fd9bb2_intuit-black.svg"
            alt
            class="logo cc-intuit"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import PageTransition from "@/components/animations/PageTransition";

export default {
  components: {
    appPageTransition: PageTransition
  },
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      animationOn: true,
      transitionAnimationLink:
        "https://assets8.lottiefiles.com/datafiles/JNtJcb5adubeQfD/data.json"
    };
  },
  created() {
    this.pageLoad(this, this.animationOn);
  }
};
</script>

<style lang="scss" scoped>
.hero_container {
  grid-auto-columns: 1fr;
}
.hero_container {
  grid-template-areas: ".";
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
h1 {
  margin: 0.67em 0;
}
img {
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.w-inline-block {
  max-width: 100%;
  display: inline-block;
}
h1 {
  margin-top: 20px;
}
p {
  margin-top: 0;
}
h1 {
  font-weight: 700;
  margin-bottom: 10px;
}
h1 {
  font-size: 38px;
  line-height: 44px;
}
p {
  max-width: 650px;
  margin-bottom: 10px;
}
.logo {
  width: 90px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.logo.cc-nasa {
  width: 60px;
}
.logo.cc-mtv {
  width: 52px;
}
.logo.cc-dell {
  width: 70px;
}
.logo.cc-cbs {
  width: 80px;
}
.logo.cc-fb,
.logo.cc-g {
  width: 100px;
}
.logo.cc-g {
  margin-bottom: -4px;
}
.logo.cc-twitter {
  width: 36px;
}
.hero_container {
  display: -ms-grid;
  display: grid;
  width: 100%;
  max-width: 1280px;
  padding-top: 24px;
  padding-bottom: 24px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  grid-column-gap: 0;
  grid-row-gap: 32px;
  -ms-grid-columns: auto 0 1fr;
  grid-template-columns: auto 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
.hero-heading {
  margin-top: -12px;
  margin-bottom: 16px;
  color: #000;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 500;
}
.hero_copy {
  max-width: 420px;
}
.paragraph-l {
  font-size: 20px;
}
.paragraph-l.cc-subhead {
  max-width: 370px;
  color: #000;
}
.hero_screenshot {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 420px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.hero_logos {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
}
.hero_logos {
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.image-2 {
  display: block;
  max-width: 95%;
  margin-top: -24px;
  margin-right: -10%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.hero-button {
  margin-top: 24px;
}
.hero-button {
  margin-right: 16px;
  padding-top: 1px;
  padding-right: 24px;
  padding-left: 24px;
  background-color: #4353ff;
  color: #fff;
  font-size: 17px;
  line-height: 59px;
  font-weight: 500;
  text-decoration: none;
}
.hero-button:hover {
  background-color: #3545ee;
}
.hero-button.cc-main {
  position: relative;
}
.cta-button_sub-text {
  opacity: 0.8;
  font-weight: 400;
}
.inner-button {
  position: absolute;
  left: 0;
  top: 0;
  right: auto;
  bottom: auto;
  width: 100%;
  height: 100%;
}
@media (max-width: 991px) {
  .hero_container {
    -ms-grid-columns: 320px 1fr;
    grid-template-columns: 320px 1fr;
  }
  .hero-heading {
    font-size: 50px;
  }
  .paragraph-l {
    font-size: 18px;
  }
  .hero_logos {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    justify-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }
}
@media (max-width: 767px) {
  .logo {
    width: 70px;
  }
  .logo.cc-nasa {
    width: 50px;
  }
  .logo.cc-mtv {
    width: 40px;
  }
  .logo.cc-dell {
    width: 60px;
  }
  .logo.cc-cbs {
    width: 65px;
  }
  .logo.cc-fb {
    width: 70px;
  }
  .logo.cc-intuit {
    width: 60px;
  }
  .logo.cc-g {
    width: 80px;
  }
  .hero_container {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .hero-heading {
    margin-top: 0;
    font-size: 60px;
  }
  .hero_copy {
    padding-bottom: 32px;
  }
  .hero_screenshot {
    min-height: auto;
  }
  .hero_logos {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
  }
  .image-2 {
    margin-top: 0;
    margin-right: 0;
  }
}
@media (max-width: 479px) {
  .logo.cc-nasa {
    width: 38px;
  }
  .logo.cc-mtv {
    width: 32px;
  }
  .logo.cc-dell {
    width: 47px;
  }
  .logo.cc-cbs {
    width: 55px;
  }
  .logo.cc-fb {
    width: 57px;
  }
  .logo.cc-g {
    width: 70px;
  }
  .logo.cc-twitter {
    width: 26px;
  }
  .hero-heading {
    font-size: 40px;
  }
  .hero-button.cc-main {
    font-size: 15px;
    line-height: 53px;
  }
}
#w-node-22c4160c98df-eaea5c31 {
  -ms-grid-row: 1;
  grid-row-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-row-align: center;
  align-self: center;
}
#w-node-22c4160c98e8-eaea5c31 {
  -ms-grid-column-span: 1;
  grid-column-end: 3;
  -ms-grid-column: 2;
  grid-column-start: 2;
  -ms-grid-row-span: 1;
  grid-row-end: 2;
  -ms-grid-row: 1;
  grid-row-start: 1;
}
#w-node-1e7871d5feeb-eaea5c31 {
  -ms-grid-row: 2;
  grid-row-start: 2;
  -ms-grid-row-span: 1;
  grid-row-end: 3;
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 2;
  grid-column-end: 3;
}
@media screen and (max-width: 767px) {
  #w-node-22c4160c98df-eaea5c31 {
    -ms-grid-row: 2;
    grid-row-start: 2;
    -ms-grid-row-span: 1;
    grid-row-end: 3;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-column-span: 2;
    grid-column-end: 3;
    -ms-grid-row-align: center;
    align-self: center;
  }
  #w-node-22c4160c98e8-eaea5c31 {
    -ms-grid-column-span: 2;
    grid-column-end: 3;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
  }
  #w-node-1e7871d5feeb-eaea5c31 {
    -ms-grid-column-span: 3;
    grid-column-end: 3;
    -ms-grid-row: 3;
    grid-row-start: 3;
    -ms-grid-row-span: 1;
    grid-row-end: 4;
  }
}
/*! CSS Used from: Embedded */
::selection {
  background: rgb(67, 83, 255);
  color: white;
}
::-moz-selection {
  background: rgb(67, 83, 255);
  color: white;
}
/*! CSS Used from: Embedded */
@media (min-width: 1200px) {
  .hero-heading {
    font-size: 72px;
  }
  .hero_copy {
    max-width: 450px;
  }
}
</style>
