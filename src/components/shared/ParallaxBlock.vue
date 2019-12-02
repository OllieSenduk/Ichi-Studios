<template>
  <section class="section" id="widecard">
    <div class="container">
      <div class="row in-view">
        <div class="col-12 col-xl-10 offset-xl-1">
          <div class="reveal reveal--left reveal--darken reveal--primary">
            <figure
              class="reveal__background lazyload--el lazyload"
              style="background-image: url(https://images.pexels.com/photos/220421/pexels-photo-220421.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500); opacity: 0.175;"
            ></figure>
            <h3 class="within-section">
              DESIGN
              <span>&#183;</span>
              CREATE
              <span>&#183;</span>
              REFLECT
              <span>&#183;</span>
              ADJUST
            </h3>
            <div class="reveal__copy indent">
              <h4
                class="within-section"
              >We partner with companies that inspire us to build solutions for the future.</h4>
              <p>By combining our technical skills with creative thinking and a result-driven mentality to make strive to not just deliver optimal code and intuitive design, but also keep your business goals in mind. What sets us apart is that we're all passionate about technology & innovation, but all have an entrepeneurial background. This results in us striving to craft works of art that result in true fans, conversions and engagement.</p>
              <!-- <div class="row">
                <appButton text="Check Our Projects" />
              </div>-->
            </div>
          </div>
        </div>
      </div>
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
h4 {
  font-size: 2rem;
}
@media all {
  figure {
    display: block;
  }
  figure {
    margin: 1em 40px;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
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
  .col-md-6,
  .col-xl-10 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    .col-md-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (min-width: 1200px) {
    .col-xl-10 {
      -ms-flex: 0 0 83.33333%;
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .offset-xl-1 {
      margin-left: 8.33333%;
    }
  }
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  figure {
    margin: 0;
  }
  .indent {
    margin-left: 48px;
  }
  .dashed {
    display: inline-block;
    position: relative;
    padding-left: 48px;
    line-height: 24px;
    z-index: 1;
  }
  .dashed:before,
  .dashed:after {
    content: "";
    display: block;
    position: absolute;
    top: 11px;
    left: 0;
    width: 24px;
    height: 2px;
    background-color: #222;
    pointer-events: none;
    z-index: -1;
  }
  .dashed:before {
    -webkit-transition: -webkit-transform 0.4s ease-out;
    transition: -webkit-transform 0.4s ease-out;
    transition: transform 0.4s ease-out;
    transition: transform 0.4s ease-out, -webkit-transform 0.4s ease-out;
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    will-change: transform;
  }
  .dashed:after {
    -webkit-transition: background-color 0.2s 0.3s ease-in,
      width 0.3s 0.2s ease-out, height 0.2s 0s ease-in,
      -webkit-transform 0.4s 0.2s ease-out;
    transition: background-color 0.2s 0.3s ease-in, width 0.3s 0.2s ease-out,
      height 0.2s 0s ease-in, -webkit-transform 0.4s 0.2s ease-out;
    transition: transform 0.4s 0.2s ease-out, background-color 0.2s 0.3s ease-in,
      width 0.3s 0.2s ease-out, height 0.2s 0s ease-in;
    transition: transform 0.4s 0.2s ease-out, background-color 0.2s 0.3s ease-in,
      width 0.3s 0.2s ease-out, height 0.2s 0s ease-in,
      -webkit-transform 0.4s 0.2s ease-out;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    will-change: transform, width, height, background;
  }
  .dashed.in-view__child--in:before {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  .dashed.in-view__child--in:after {
    -webkit-transform: none;
    transform: none;
  }
  a.dashed {
    cursor: default;
  }
  a.dashed:not(.dashed--vertical):hover:after {
    width: 90%;
    width: calc(100% - 24px);
    height: 16px;
    background-color: rgba(34, 34, 34, 0.1);
    -webkit-transition: background-color 0.2s 0.1s ease-out,
      width 0.4s 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      height 0.2s 0.1s cubic-bezier(0.22, 0.61, 0.36, 1),
      -webkit-transform 0.4s 0.2s ease-out;
    transition: background-color 0.2s 0.1s ease-out,
      width 0.4s 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      height 0.2s 0.1s cubic-bezier(0.22, 0.61, 0.36, 1),
      -webkit-transform 0.4s 0.2s ease-out;
    transition: transform 0.4s 0.2s ease-out,
      background-color 0.2s 0.1s ease-out,
      width 0.4s 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      height 0.2s 0.1s cubic-bezier(0.22, 0.61, 0.36, 1);
    transition: transform 0.4s 0.2s ease-out,
      background-color 0.2s 0.1s ease-out,
      width 0.4s 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      height 0.2s 0.1s cubic-bezier(0.22, 0.61, 0.36, 1),
      -webkit-transform 0.4s 0.2s ease-out;
  }
  a.dashed {
    cursor: pointer;
  }
  .dashed--reverse {
    padding-right: 48px;
    padding-left: 0;
  }
  .dashed--reverse:before,
  .dashed--reverse:after {
    left: auto;
    right: 0;
  }
  .reveal {
    position: relative;
    padding: 36px 10%;
    overflow: hidden;
    z-index: 1;
  }
  .reveal:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #eff0f1;
    z-index: -1;
  }
  @media (min-width: 1200px) {
    .reveal {
      padding: 36px 48px 48px;
    }
    .reveal--left {
      padding-left: 0;
      overflow: visible;
    }
    .reveal--left:before {
      width: 2000px;
      width: 100vw;
    }
    .reveal--left .reveal__background {
      width: 2000px;
      width: 100vw;
    }
  }
  .reveal--darken {
    color: #fff;
  }
  .reveal--darken:before {
    background-color: #222;
  }
  .reveal--darken a,
  .reveal--darken p,
  .reveal--darken .sub-head,
  .reveal--darken a.sub-head {
    color: white;
  }
  .reveal--darken .dashed:before,
  .reveal--darken .dashed:after {
    background-color: #fff;
  }
  .reveal--darken a.dashed:not(.dashed--vertical):hover:after {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .reveal__background {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
  }
  .reveal__background.lazyload--el.lazyloaded {
    opacity: 0.8;
  }
  .reveal__copy {
    margin-bottom: 32px;
  }
  .reveal__copy p {
    width: 492px;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    .in-view__child--fadein {
      opacity: 1;
      -webkit-transform: translateY(24px) skewX(-5deg);
      transform: translateY(24px) skewX(-5deg);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transition: opacity 0.2s, -webkit-transform 0.8s;
      transition: opacity 0.2s, -webkit-transform 0.8s;
      transition: opacity 0.2s, transform 0.8s;
      transition: opacity 0.2s, transform 0.8s, -webkit-transform 0.8s;
      will-change: opacity, transform;
    }
    .in-view__child--fadein.in-view__child--in {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  // .lazyload--el{opacity:1;-webkit-transition:opacity 0.4s ease-out;transition:opacity 0.4s ease-out;will-change:opacity;}
  // .lazyload--el.lazyloaded{opacity:1;}
  h3,
  h6 {
    clear: both;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    margin: 36px 0 12px;
  }
  h3 {
    font-size: 34px;
    line-height: 48px;
  }
  h6 {
    font-size: 16px;
    line-height: 24px;
  }
  p {
    margin: 0 0 24px;
    padding: 0;
  }
  a {
    color: #1ccad8;
    text-decoration: none;
    -webkit-transition: color 0.4s 0.1s ease-out;
    transition: color 0.4s 0.1s ease-out;
  }
  a:hover,
  a:focus {
    color: #ff00bf;
    outline: 0;
  }
  .sub-head {
    font-family: "Karla", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .sub-head,
  a.sub-head {
    color: #222;
  }
  *:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: rgba(34, 34, 34, 0.5);
  }
  :-ms-input-placeholder {
    color: rgba(34, 34, 34, 0.5);
  }
  ::-ms-input-placeholder {
    color: rgba(34, 34, 34, 0.5);
  }
  ::placeholder {
    color: rgba(34, 34, 34, 0.5);
  }
}
/*! CSS Used fontfaces */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  src: local("Poppins Bold"), local("Poppins-Bold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2)
      format("woff2");
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
    U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  src: local("Poppins Bold"), local("Poppins-Bold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  src: local("Poppins Bold"), local("Poppins-Bold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Karla";
  font-style: italic;
  font-weight: 700;
  src: local("Karla Bold Italic"), local("Karla-BoldItalic"),
    url(https://fonts.gstatic.com/s/karla/v8/qkBQXvYC6trAT7RQFmW79LdvnS7BONmyFQ.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Karla";
  font-style: italic;
  font-weight: 700;
  src: local("Karla Bold Italic"), local("Karla-BoldItalic"),
    url(https://fonts.gstatic.com/s/karla/v8/qkBQXvYC6trAT7RQFmW79LlvnS7BONk.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  src: local("Karla"), local("Karla-Regular"),
    url(https://fonts.gstatic.com/s/karla/v8/qkBbXvYC6trAT7RbLtyU5rZPoAU.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  src: local("Karla"), local("Karla-Regular"),
    url(https://fonts.gstatic.com/s/karla/v8/qkBbXvYC6trAT7RVLtyU5rZP.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  src: local("Karla Bold"), local("Karla-Bold"),
    url(https://fonts.gstatic.com/s/karla/v8/qkBWXvYC6trAT7zuC8m3xLtlmgzDCNg.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  src: local("Karla Bold"), local("Karla-Bold"),
    url(https://fonts.gstatic.com/s/karla/v8/qkBWXvYC6trAT7zuC8m5xLtlmgzD.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>