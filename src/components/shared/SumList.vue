<template>
  <section
    class="bg-extra-dark-gray wow fadeIn md-padding-one-half-lr sm-padding-two-lr"
    style="visibility: visible; animation-name: fadeIn;"
  >
    <div class="sum-list_container section block">
      <div class="d-flex flex-column flex-md-row">
        <!-- feature box item-->
        <div
          class="feature-box-1 sm-margin-30px-bottom wow fadeInRight"
          style="visibility: visible; animation-name: fadeInRight;"
        >
          <div class="margin-15px-bottom alt-font">
            <h3 class="char-value letter-spacing-minus-1 text-medium-gray font-weight-300">01.</h3>
            <span
              class="text-large padding-20px-left sm-padding-15px w-100 d-table-cell align-middle text-pink"
            >
              Global Team.
              <br />Local Impact.
            </span>
          </div>
          <p class="width-90 text-grey">
            Ichi Studios operates all around the world. This enables us to
            help shape solutions for both global brands, as well as local startups.
          </p>
          <div
            class="separator-line-horrizontal-medium-light3 bg-deep-pink margin-5px-top float-left"
          ></div>
        </div>
        <!-- end feature box item-->
        <!-- start feature box item-->
        <div
          class="feature-box-1 sm-margin-30px-bottom wow fadeInRight"
          data-wow-delay="0.2s"
          style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
        >
          <div class="margin-15px-bottom alt-font">
            <h3 class="char-value letter-spacing-minus-1 text-medium-gray font-weight-300">02.</h3>
            <span class="text-large padding-20px-left w-100 d-table-cell align-middle text-pink">
              Partnerships to
              <br />drive innovation.
            </span>
          </div>
          <p
            class="width-90 lg-width-100 text-grey"
          >We started Ichi Studios from our passion to partner with inspiring corporates & startups to combine our technological expertise with their industry know-how and create meaningful & innotive solutions.</p>
          <div
            class="separator-line-horrizontal-medium-light3 bg-deep-pink margin-5px-top float-left"
          ></div>
        </div>
        <!-- end feature box item-->
        <!-- start feature box item-->
        <div
          class="feature-box-1 wow fadeInRight"
          data-wow-delay="0.4s"
          style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;"
        >
          <div class="margin-15px-bottom alt-font">
            <h3 class="char-value letter-spacing-minus-1 text-medium-gray font-weight-300">03.</h3>
            <span class="text-large padding-20px-left w-100 d-table-cell align-middle text-pink">
              Agile Processes.
              <br />Data Driven Results.
            </span>
          </div>
          <p class="width-90 lg-width-100 text-grey">
            We are a big believer in having the right processes in place to create a seamless experience & workflow.
            This means short iterations, meaningful feedback loops & a lot of user validations.
            .
          </p>
          <div
            class="separator-line-horrizontal-medium-light3 bg-deep-pink margin-5px-top float-left"
          ></div>
        </div>
        <!-- end feature box item-->
      </div>
    </div>
    <div class="section block">
      <appButton text="More about us!" link="/about" color="white" />
    </div>
  </section>
</template>

<script>
import Button from "~/components/shared/Button";

export default {
  components: {
    appButton: Button
  }
};
</script>

<style lang="scss" scoped>
.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

*,
::after,
::before {
  box-sizing: border-box;
}
section {
  display: block;
}
h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
h3 {
  font-size: 1.75rem;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-12,
.col-md-4 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}
@media (min-width: 768px) {
  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}
.align-middle {
  vertical-align: middle !important;
}
.d-table-cell {
  display: table-cell !important;
}
.float-left {
  float: left !important;
}
.w-100 {
  width: 100% !important;
}
@media print {
  *,
  ::after,
  ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  h3,
  p {
    orphans: 3;
    widows: 3;
  }
  h3 {
    page-break-after: avoid;
  }
  .container {
    min-width: 992px !important;
  }
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  margin: 0 0 25px;
}
* {
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}
*:hover {
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}
::selection {
  color: #000;
  background: #dbdbdb;
}
::-moz-selection {
  color: #000;
  background: #dbdbdb;
}
::-webkit-input-placeholder {
  color: #6f6f6f;
  text-overflow: ellipsis;
}
::-moz-placeholder {
  color: #6f6f6f;
  text-overflow: ellipsis;
  opacity: 1;
}
:-ms-input-placeholder {
  color: #6f6f6f;
  text-overflow: ellipsis;
  opacity: 1;
}
.alt-font {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
h3 {
  margin: 0 0 25px;
  padding: 0;
  letter-spacing: 0;
  font-weight: 400;
}
h3 {
  font-size: 48px;
  line-height: 54px;
}
.text-large {
  font-size: 3rem;
  line-height: 40px;
}
.text-medium-gray {
  color: #939393;
}
.letter-spacing-minus-1 {
  letter-spacing: -1px;
}
.font-weight-300 {
  font-weight: 300;
}
.line-height-22 {
  line-height: 22px;
}
.bg-extra-dark-gray {
  background-color: #1c1c1c;
}
.bg-deep-pink {
  background-color: #ff214f;
}
section {
  padding: 60px 0;
  overflow: hidden;
}
.separator-line-horrizontal-medium-light3 {
  width: 18%;
  height: 1px;
}
.margin-5px-top {
  margin-top: 5px;
}
.margin-15px-bottom {
  margin-bottom: 15px;
}
.padding-20px-left {
  padding-left: 20px;
}
.float-left {
  float: left !important;
}
.width-90 {
  width: 90%;
}
.feature-box-1 {
  min-width: 33%;
  display: table;
}
.feature-box-1 .char-value {
  display: table-cell;
  vertical-align: middle;
}

@media (max-width: 1199px) {
  section {
    padding: 90px 0;
  }
  h3 {
    margin: 0 0 22px;
    padding: 0;
    letter-spacing: 0;
    font-weight: 400;
  }
  h3 {
    font-size: 42px;
    line-height: 48px;
  }
  .lg-width-100 {
    width: 100% !important;
  }
}
@media (max-width: 991px) {
  h3 {
    margin: 0 0 18px;
    padding: 0;
    letter-spacing: 0;
    font-weight: 400;
  }
  h3 {
    font-size: 36px;
    line-height: 41px;
  }
  p {
    margin: 0 0 20px;
  }
  section {
    padding: 75px 0;
  }
  .md-padding-one-half-lr {
    padding-left: 1.5%;
    padding-right: 1.5%;
  }
}
@media (max-width: 767px) {
  h3 {
    margin: 0 0 17px;
    padding: 0;
    letter-spacing: 0;
    font-weight: 400;
  }
  h3 {
    font-size: 28px;
    line-height: 34px;
  }
  .sm-margin-30px-bottom {
    margin-bottom: 30px !important;
  }
  .sm-margin-60px-bottom {
    margin-bottom: 60px !important;
  }
  .sm-padding-two-lr {
    padding-left: 2%;
    padding-right: 2%;
  }
  section {
    padding: 50px 0;
  }
}
@media (min-width: 575px) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeInRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes fadeInRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0);
  }
}
</style>