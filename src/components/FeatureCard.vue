<template>
  <div id="build-section" class="three_container cc-1">
    <div id="w-node-de3ce3c61b20-eaea5c31" class="three_left">
      <div class="div-block-7 text-center">
        <h2 class="three_heading">Inou Ridder</h2>
        <h3 class="three_subhead color-primary text-center">Head of Technology</h3>
      </div>
      <div id class="cc-1">
        <div class="three_image">
          <img src="https://i.imgur.com/QgGXFy0.jpg" alt="Ichi Team member" />
        </div>
      </div>
    </div>
    <div
      data-w-id="888542b6-b91b-a702-9af5-3f349cf92394"
      class="quote_wrap"
      style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"
    >
      <img src="https://svgshare.com/i/H9K.svg" alt class="quote_logo" />
      <p class="quote">
        <span class="quote-offset">“</span> Oliver was amazing. Always completely dedicated and had a great way of making complex situations simple. I loved his personal style and would recommend him to everybody! ”
      </p>
      <div class="quotee_wrap">
        <div class="quotee_img cc-1"></div>
        <p class="quotee_text">
          Lotte Schmidt
          <br />Super boss lady
        </p>
      </div>
    </div>
    <div id="w-node-7425db3a8dcc-eaea5c31" class="features cc-1">
      <div class="feature">
        <h3 class="feature_title">The Hacker</h3>
        <p
          class="feature_desc"
        >Inou build his first computer at the age of 12 and after a quick break...</p>
      </div>
      <div class="feature">
        <h3 class="feature_title">Something Inspiring</h3>
        <p class="feature_desc">Omg zo gewelding</p>
      </div>
      <div class="feature">
        <h3 class="feature_title">Something funny</h3>
        <p class="feature_desc">Supah</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.features,
.three_container {
  grid-auto-columns: 1fr;
}
.three_container {
  grid-template-areas: ".";
}
video {
  display: inline-block;
  vertical-align: baseline;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
img {
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
.w-embed:after,
.w-embed:before {
  content: " ";
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}

.w-embed:after,
.w-embed:before {
  display: table;
}
#w-node-de3ce3c61b29-eaea5c31 {
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
  -ms-grid-column: span 1;
  grid-column-start: span 1;
  -ms-grid-column-span: 1;
  grid-column-end: span 1;
}
p {
  max-width: 650px;
  margin-bottom: 10px;
}
.quote {
  font-size: 16px;
}
.quotee_wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
}
.quote {
  margin-top: 32px;
  margin-bottom: 32px;
}
.feature_title,
.quotee_text,
.three_heading {
  color: #000;
  font-weight: 500;
}
.quotee_text {
  margin-bottom: 0;
  font-size: 14px;
}
.quotee_wrap {
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.quotee_img {
  display: block;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 50%;
  background-image: url(https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d4601b6ccba409a6b283373_color-1.jpg);
  background-position: 50% 50%;
  background-size: cover;
}
.quotee_img.cc-1 {
  background-image: url(https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d469b8f3a861d1415883255_erin.jpg);
}
.three_container {
  display: -ms-grid;
  display: grid;
  width: 100%;
  max-width: 1280px;
  padding: 64px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  grid-column-gap: 64px;
  grid-row-gap: 32px;
  -ms-grid-columns: 350px 64px 1fr;
  grid-template-columns: 350px 1fr;
  -ms-grid-rows: auto 32px 1fr;
  grid-template-rows: auto 1fr;
  background-color: rgba(0, 0, 0, 0.05);
}
.features {
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
.three_container.cc-1 {
  background-color: white;
  background-size: cover;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.three_left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}
.three_left {
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.three_heading {
  margin-top: -16px;
  margin-left: -3px;
}
.features {
  display: -ms-grid;
  display: grid;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.div-block-7 {
  margin-bottom: 32px;
}
.quote_logo {
  width: 130px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.quote_wrap {
  padding: 32px;
  background-color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.feature_title {
  display: block;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 15px;
  line-height: 1.5;
  text-decoration: none;
}
.feature_desc {
  margin-bottom: 0;
  font-size: 14px;
}
.three_visual {
  position: relative;
}
.three_subhead {
  line-height: 1.5;
  font-weight: 500;
}
.three_subhead {
  max-width: 95%;
  margin-top: 0;
  font-size: 16px;
}
.quote-offset {
  margin-left: -5px;
}
.feature_desc--link {
  color: #000;
}
.feature_desc--link:hover {
  color: #4353ff;
}
@media (max-width: 991px) {
  .three_container {
    -ms-grid-columns: minmax(200px, 0.5fr) 1fr;
    grid-template-columns: minmax(200px, 0.5fr) 1fr;
  }
  .features {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
  .three_heading {
    // font-size: 60px;
  }
  .features {
    padding: 32px;
    -webkit-align-content: start;
    -ms-flex-line-pack: start;
    align-content: start;
    background-color: hsla(0, 0%, 100%, 0.3);
  }
  .features.cc-1 {
    background-color: rgba(223, 192, 172, 0.3);
  }
  .quote_wrap {
    background-color: white;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  .three_subhead {
    font-size: 18px;
  }
}

.three_image {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 767px) {
  .three_container {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
  .quote {
    max-width: 500px;
  }
  .quote_wrap {
    padding: 24px;
  }
}
@media (max-width: 479px) {
  .three_container {
    padding: 32px;
  }
  // .three_heading {
  //   margin-top: -8px;
  //   font-size: 50px;
  // }
}
#w-node-de3ce3c61b20-eaea5c31 {
  -ms-grid-row: span 2;
  grid-row-start: span 2;
  -ms-grid-row-span: 2;
  grid-row-end: span 2;
  -ms-grid-column: span 1;
  grid-column-start: span 1;
  -ms-grid-column-span: 1;
  grid-column-end: span 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 992px) {
  #w-node-de3ce3c61b20-eaea5c31 {
    justify-content: flex-start;
  }
}
@media screen and (max-width: 767px) {
  #w-node-7425db3a8dcc-eaea5c31,
  #w-node-de3ce3c61b20-eaea5c31 {
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 1;
    grid-column-start: span 1;
    -ms-grid-column-span: 1;
    grid-column-end: span 1;
  }
  #w-node-de3ce3c61b29-eaea5c31 {
    -ms-grid-column: span 1;
    grid-column-start: span 1;
    -ms-grid-column-span: 1;
    grid-column-end: span 1;
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
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
</style>