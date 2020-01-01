<template>
  <section class="xs-section-padding working-progress-area" data-scrollax-parent="true">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <appChapterHeader></appChapterHeader>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 mx-auto single-working-progress">
          <appProcessContent
            :title="content.stepOne.title"
            :content="content.stepOne.content"
            :imgUrl="content.stepOne.imgUrl"
            :imgContainer="content.stepOne.imgContainer"
          ></appProcessContent>
        </div>
        <!-- .single-working-progress END -->
        <div class="col-lg-12 mx-auto single-working-progress">
          <appProcessContent
            :title="content.stepTwo.title"
            :content="content.stepTwo.content"
            :imgUrl="content.stepTwo.imgUrl"
            :imgContainer="content.stepTwo.imgContainer"
          ></appProcessContent>
        </div>
        <!-- .single-working-progress END -->
        <div class="col-lg-12 mx-auto single-working-progress">
          <appProcessContent
            :title="content.stepThree.title"
            :content="content.stepThree.content"
            :imgUrl="content.stepThree.imgUrl"
            :imgContainer="content.stepThree.imgContainer"
          ></appProcessContent>

          <!-- .working-progress-images END -->
        </div>
        <!-- .single-working-progress END -->
      </div>
      <!-- .row END -->
    </div>
    <!-- .container END -->
    <div class="doodle-parallax">
      <img
        src="assets/images/doodle/5.png"
        data-scrollax="properties: { translateY: '-200%' }"
        class="single-doodle one"
        alt
        draggable="false"
        style="transform: translateZ(0px) translateY(46.5439%);"
      />
      <img
        src="assets/images/doodle/6.png"
        data-scrollax="properties: { translateY: '-150%' }"
        class="single-doodle two"
        alt
        draggable="false"
        style="transform: translateZ(0px) translateY(34.9079%);"
      />
    </div>
  </section>
</template>

<script>
import ProcessContent from "@/components/ProcessContent";
import ChapterHeader from "@/components/ChapterHeader";

// COPY
import processStepContent from "@/constants/copy/processStepContent";
import bannerCopy from "@/constants/copy/bannerCopy";
import chapterHeaders from "@/constants/copy/chapterHeaders";

export default {
  components: {
    appProcessContent: ProcessContent,
    appChapterHeader: ChapterHeader
  },
  methods: {
    currentPath() {
      return this.$root._route.path.substr(1);
    }
  },
  computed: {
    content() {
      return processStepContent;
    }
  },
  created() {}
};
</script>

<style lang="scss">
/*! CSS Used from: https://dazzling-goodall-bb1549.netlify.com/assets/css/style.css */

[data-scrollax-parent="true"] > .container > .row + .row {
  z-index: 2;
  position: relative;
}
h2,
h3,
h4 {
  font-family: "Work Sans", sans-serif;
  letter-spacing: -0.25px;
}
h2,
.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #000000;
}
h4 {
  font-size: 1.375rem;
  font-weight: 600;
}
h4 {
  color: #000000;
}
h3 {
  color: #000000;
  font-size: 1.75rem;
  font-weight: 700;
}

p:last-child {
  margin-bottom: 0px;
}
/*! CSS Used from: https://dazzling-goodall-bb1549.netlify.com/assets/css/responsive.css */
@media (max-width: 991px) {

  .doodle-parallax {
    display: none;
  }

  .single-working-progress:nth-child(odd) .working-progress-content {
    padding-right: 0;
  }
  .single-working-progress:nth-child(even) .working-progress-images {
    padding-right: 0px;
  }
  .working-progress-content {
    padding-top: 0;
  }
  .working-progress-content .section-title {
    font-size: 1rem;
    margin-bottom: 15px;
  }
  .agency-section-title .main-title {
    font-size: 2rem;
  }
}
@media (max-width: 480px) {
  .agency-section-title.text-center {
    margin-bottom: 40px;
  }
  
  .agency-section-title .main-title {
    font-size: 1.55rem;
  }
  .single-working-progress:not(:last-child)::before {
    display: none;
  }
  .single-working-progress:not(:last-child) {
    padding-bottom: 50px;
  }
  .single-working-progress:nth-child(even) .working-progress-images {
    padding-right: 0px;
  }
  .working-progress-content {
    margin-bottom: 30px;
  }
}
/*! CSS Used fontfaces */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: local("Roboto Black"), local("Roboto-Black"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfCRc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: local("Roboto Black"), local("Roboto-Black"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfABc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: local("Roboto Black"), local("Roboto-Black"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfCBc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: local("Roboto Black"), local("Roboto-Black"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: local("Roboto Black"), local("Roboto-Black"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfCxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: local("Roboto Black"), local("Roboto-Black"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfChc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: local("Roboto Black"), local("Roboto-Black"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 700;
  src: local("Playfair Display Bold Italic"),
    local("PlayfairDisplay-BoldItalic"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu4DRmFqWF_ljR.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 700;
  src: local("Playfair Display Bold Italic"),
    local("PlayfairDisplay-BoldItalic"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6zRmFqWF_ljR.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 700;
  src: local("Playfair Display Bold Italic"),
    local("PlayfairDisplay-BoldItalic"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6jRmFqWF_ljR.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 700;
  src: local("Playfair Display Bold Italic"),
    local("PlayfairDisplay-BoldItalic"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu5DRmFqWF_g.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 900;
  src: local("Playfair Display Black Italic"),
    local("PlayfairDisplay-BlackItalic"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngAW4u4DRmFqWF_ljR.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 900;
  src: local("Playfair Display Black Italic"),
    local("PlayfairDisplay-BlackItalic"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngAW4u6zRmFqWF_ljR.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 900;
  src: local("Playfair Display Black Italic"),
    local("PlayfairDisplay-BlackItalic"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngAW4u6jRmFqWF_ljR.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: 900;
  src: local("Playfair Display Black Italic"),
    local("PlayfairDisplay-BlackItalic"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngAW4u5DRmFqWF_g.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  src: local("Playfair Display Regular"), local("PlayfairDisplay-Regular"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgEM86xRbPQ.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  src: local("Playfair Display Regular"), local("PlayfairDisplay-Regular"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgEM86xRbPQ.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  src: local("Playfair Display Regular"), local("PlayfairDisplay-Regular"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgEM86xRbPQ.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  src: local("Playfair Display Regular"), local("PlayfairDisplay-Regular"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  src: local("Playfair Display Bold"), local("PlayfairDisplay-Bold"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWoe5j5hNKe1_w.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  src: local("Playfair Display Bold"), local("PlayfairDisplay-Bold"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWEe5j5hNKe1_w.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  src: local("Playfair Display Bold"), local("PlayfairDisplay-Bold"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWAe5j5hNKe1_w.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  src: local("Playfair Display Bold"), local("PlayfairDisplay-Bold"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lW4e5j5hNKc.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 900;
  src: local("Playfair Display Black"), local("PlayfairDisplay-Black"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBb__lWoe5j5hNKe1_w.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 900;
  src: local("Playfair Display Black"), local("PlayfairDisplay-Black"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBb__lWEe5j5hNKe1_w.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 900;
  src: local("Playfair Display Black"), local("PlayfairDisplay-Black"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBb__lWAe5j5hNKe1_w.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 900;
  src: local("Playfair Display Black"), local("PlayfairDisplay-Black"),
    url(https://fonts.gstatic.com/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBb__lW4e5j5hNKc.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Work Sans"), local("WorkSans-Regular"),
    url(https://fonts.gstatic.com/s/worksans/v5/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Work Sans"), local("WorkSans-Regular"),
    url(https://fonts.gstatic.com/s/worksans/v5/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  src: local("Work Sans Medium"), local("WorkSans-Medium"),
    url(https://fonts.gstatic.com/s/worksans/v5/QGYpz_wNahGAdqQ43Rh3j4P8lthNy_r-K7mV.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  src: local("Work Sans Medium"), local("WorkSans-Medium"),
    url(https://fonts.gstatic.com/s/worksans/v5/QGYpz_wNahGAdqQ43Rh3j4P8mNhNy_r-Kw.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  src: local("Work Sans SemiBold"), local("WorkSans-SemiBold"),
    url(https://fonts.gstatic.com/s/worksans/v5/QGYpz_wNahGAdqQ43Rh3o4T8lthNy_r-K7mV.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  src: local("Work Sans SemiBold"), local("WorkSans-SemiBold"),
    url(https://fonts.gstatic.com/s/worksans/v5/QGYpz_wNahGAdqQ43Rh3o4T8mNhNy_r-Kw.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Work Sans Bold"), local("WorkSans-Bold"),
    url(https://fonts.gstatic.com/s/worksans/v5/QGYpz_wNahGAdqQ43Rh3x4X8lthNy_r-K7mV.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Work Sans Bold"), local("WorkSans-Bold"),
    url(https://fonts.gstatic.com/s/worksans/v5/QGYpz_wNahGAdqQ43Rh3x4X8mNhNy_r-Kw.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>