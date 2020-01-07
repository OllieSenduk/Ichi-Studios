<template>
  <footer class="footer">
    <nav class="footer__nav shuffle shuffled">
      <section class="footer__col footer__col--intro">
        <a class="footer__logo" href="/" data-footer-link="1">
          <h6 style="color: white">Ichi Studios</h6>
        </a>

        <p class="footer__slogan">
          For Love.
          <strong>Be Bold.</strong>
        </p>
      </section>

      <section class="footer__col background--active">
        <div class="footer__col-wrap">
          <h4 class="footer__col-title">Explore</h4>

          <div class="footer__nav-list">
            <a href="/" class="footer__link" data-footer-link="1">Home</a>
            <a href="/About" class="footer__link" data-footer-link="2">About</a>
            <a href="/Cases" class="footer__link" data-footer-link="3">Cases</a>
            <a href="/Blog" class="footer__link" data-footer-link="4">Blog</a>
          </div>
        </div>
      </section>

      <section class="footer__col">
        <div class="footer__col-wrap">
          <h4 class="footer__col-title">AMS</h4>

          <a class="footer__address" href="https://goo.gl/UJYasL" target="_blank">
            <span class="footer__address-row">Tweede Jan van der Heijdenstraat 8</span>
            <span class="footer__address-row">1073VH</span>
            <span class="footer__address-row">Amsterdam, Netherlands</span>
          </a>
        </div>
      </section>

      <section class="footer__col">
        <div class="footer__col-wrap">
          <h4 class="footer__col-title">BCN</h4>

          <a class="footer__address" href="https://goo.gl/UJYasL" target="_blank">
            <span class="footer__address-row">Carrer de Joaquim Ruyra, 9-11</span>
            <span class="footer__address-row">08025</span>
            <span class="footer__address-row">Barcelona, Spain</span>
          </a>
        </div>
      </section>
      <section class="footer__col footer__col--next">
        <h4 class="footer__col-title footer__hide--small">Contact</h4>
        <a
          href="mailto:oliver@ichistudios.com"
          class="footer__link footer__hide--small"
        >oliver@ichistudios.com</a>
      </section>

      <small class="footer__legal">© 2020 Ichi Studios. All Rights Reserved.</small>
    </nav>
  </footer>
</template>

<script>
export default {
  props: ["fixed"],
  components: {}
};
</script>

<style lang='scss' scoped>
/*! CSS Used from: https://www.weareenvoy.com/dist/css/master-b72a938e7a.css */
*,
:after,
:before {
  box-sizing: inherit;
}
footer,
nav,
section {
  display: block;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:active,
a:hover {
  outline-width: 0;
}
strong {
  font-weight: inherit;
  font-weight: bolder;
}
small {
  font-size: 80%;
}
svg:not(:root) {
  overflow: hidden;
}
h4 {
  margin: 0;
  color: #1c1d1e;
  font-weight: 400;
}
p {
  font-size: 15px;
  line-height: 1.666;
}
a {
  text-decoration: none;
}
.shuffle {
  transition: all 0.5s ease-in-out;
  opacity: 0;
}
.shuffled {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.footer {
  background-color: #000;
  color: #9b9b9b;
  font-size: 12px;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding: 50px 0;
  width: 100%;
  z-index: 1;
  margin-top: 120px;
}
@media screen and (min-width: 1024px) {
  .footer {
    padding-bottom: 120px;
    padding-top: 90px;
  }
}
.footer__address {
  color: inherit;
  font-size: 1em;
  line-height: 25px;
  margin: 0;
  transition: color 0.75s ease;
}
.footer__address:hover {
  color: #fff;
}
.footer__address-row {
  display: block;
}
.footer__btn {
  color: #343945;
  float: left;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  line-height: 35px;
  margin-top: 20px;
  position: relative;
  text-align: center;
}
@media screen and (min-width: 1024px) {
  .footer__btn {
    float: right;
    margin-right: 12px;
    margin-top: -2px;
    white-space: nowrap;
  }
}
.footer__btn:after {
  background-color: #000;
  bottom: -5px;
  content: "";
  height: 160%;
  left: 0;
  position: absolute;
  -webkit-transform: scaleX(1.25) scaleY(0);
  transform: scaleX(1.25) scaleY(0);
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  transition: -webkit-transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
  width: 100%;
}
.footer__btn:hover .footer__btn-line {
  -webkit-transform: scaleX(1.4);
  transform: scaleX(1.4);
}
.footer__btn:hover .footer__btn-line-inner {
  -webkit-transform: scaleY(48);
  transform: scaleY(48);
}
.footer__btn:hover > span {
  color: #000;
}
.footer__btn > span {
  color: #fff;
  cursor: pointer;
  pointer-events: none;
  position: relative;
  transition: color 0.6s ease;
  z-index: 5;
}
.footer__btn-line {
  bottom: -5px;
  cursor: pointer;
  height: 1px;
  left: 0;
  pointer-events: none;
  position: absolute;
  transition: -webkit-transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1),
    -webkit-transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100%;
}
.footer__btn-line-inner {
  background-color: #fff;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
  transition: -webkit-transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
  width: 100%;
}
.footer__col {
  float: left;
  line-height: 25px;
  width: 50%;
}
.footer__col--intro {
  border-bottom: 1px solid #272727;
  clear: both;
  margin-bottom: 7px;
  padding-bottom: 5px;
  min-width: 100%;
}
.footer__col--mobile {
  clear: left;
}
.footer__col--next {
  clear: both;
  margin-right: 0;
  margin-top: 32px;
  min-width: 100%;
}
.footer__col-title {
  color: #fff;
  margin-bottom: 4px;
  margin-top: 35px;
}
.footer__col-title ~ .footer__col-title {
  margin-top: 22px;
}
@media screen and (min-width: 1024px) {
  .footer__col-title {
    margin-top: -2px;
  }
}
@media screen and (min-width: 480px) {
  .footer__col {
    width: 33.333%;
  }
}
@media screen and (min-width: 1024px) {
  .footer__col {
    margin-right: 2.5641%;
    width: 14.52991%;
  }
  .footer__col--intro {
    clear: none;
    border-bottom: 0;
    margin-bottom: 0;
    min-width: auto;
    padding-bottom: 60px;
  }
  .footer__col--next {
    clear: right;
    margin-top: -5px;
    margin-right: 0;
    min-width: auto;
  }
}
@media (min-width: 1024px) and (max-width: 1300px) {
  .footer__col:first-child {
    margin-right: 7.9%;
  }
  .footer__col:nth-child(2) {
    margin-right: 5%;
    width: 9.5%;
  }
  .footer__col:nth-child(3) {
    margin-right: 7%;
  }
  .footer__col:nth-child(5) {
    margin-right: 5%;
    width: 9.5%;
  }
  .footer__col:nth-child(6) {
    margin-right: 3%;
    width: 9.5%;
  }
}
.footer__legal {
  border-top: 1px solid #272727;
  clear: both;
  color: #9b9b9b;
  display: block;
  float: left;
  font-size: 12px;
  line-height: 25px;
  margin-top: 45px;
  padding-top: 43px;
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .footer__legal {
    border-top: 0;
    margin-top: 0;
    padding-top: 35px;
  }
}
.footer__link {
  color: #9b9b9b;
  display: block;
  font-size: 12px;
  transition: color 0.75s ease;
}
.footer__link:hover {
  color: #fff;
}
.footer__logo {
  display: block;
  margin-top: 5px;
  margin-bottom: 7px;
}
@media screen and (min-width: 1024px) {
  .footer__logo {
    margin-bottom: 16px;
  }
}
.footer__logo svg {
  height: 27px;
  width: 90px;
}
.footer__logo-letter {
  fill: #fefefe;
}
.footer__nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 1170px;
  width: 90%;
}
.footer__nav:after {
  clear: both;
  content: "";
  display: block;
}
.footer__slogan {
  color: #9b9b9b;
  font-size: 12px;
  line-height: 25px;
  margin: 0 0 35px;
  width: 140px;
}
.footer__slogan strong {
  color: #fff;
  font-weight: 400;
}
@media screen and (min-width: 1024px) {
  .footer__hide--large {
    display: none;
  }
}
.footer__hide--small {
  display: none;
}
@media screen and (min-width: 1024px) {
  .footer__hide--small {
    display: block;
  }
}
</style>