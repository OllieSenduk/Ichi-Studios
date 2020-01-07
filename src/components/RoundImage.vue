<template>
  <div class="wpb_column vc_column_container vc_col-sm-4">
    <div class="vc_column-inner vc_custom_1504616676048">
      <div class="wpb_wrapper">
        <div class="wpb_single_image wpb_content_element vc_align_center single-team-picture">
          <figure class="wpb_wrapper vc_figure">
            <div class="vc_single_image-wrapper vc_box_border_grey">
              <img
                width="300"
                height="300"
                :src="imgUrl"
                :data-lazy-src="imgUrl"
                class="attachment-medium size-medium wp-post-image lazyloaded"
                alt
                data-lazy-sizes="(max-width: 300px) 100vw, 300px"
                :srcset="imgUrl"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@media all {
  .vc_column-inner::after {
    clear: both;
  }
  .vc_column_container {
    width: 100%;
  }
  .vc_col-sm-4 {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 768px) {
    .vc_col-sm-4 {
      float: left;
    }
    .vc_col-sm-4 {
      width: 33.33333333%;
    }
  }
  .vc_row.vc_row-flex > .vc_column_container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
  }
  #content .wpb_text_column :last-child,
  .wpb_text_column :last-child {
    margin-bottom: 0;
  }
  .wpb_content_element {
    margin-bottom: 35px;
  }
  .vc_row.vc_row-flex > .vc_column_container {
    display: flex;
  }
  .vc_row.vc_row-flex > .vc_column_container > .vc_column-inner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
  }
  .vc_row.vc_row-flex > .vc_column_container > .vc_column-inner {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    z-index: 1;
  }
  @media (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .vc_row.vc_row-flex > .vc_column_container > .vc_column-inner > * {
      min-height: 1em;
    }
  }
  .vc_column-inner::after,
  .vc_column-inner::before {
    content: " ";
    display: table;
  }
  .vc_column_container {
    padding-left: 0;
    padding-right: 0;
  }
  .vc_column_container > .vc_column-inner {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
  .wpb_single_image img {
    height: auto;
    max-width: 100%;
    vertical-align: top;
  }
  .wpb_single_image .vc_single_image-wrapper {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
  }
  .wpb_single_image.vc_align_center {
    text-align: center;
  }
  .wpb_single_image .vc_figure {
    display: inline-block;
    vertical-align: top;
    margin: 0;
    max-width: 100%;
  }
}
@media all {
  *,
  figure {
    margin: 0;
  }
  * {
    padding: 0;
  }
  figure {
    display: block;
  }
  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  img[class*="attachment-"] {
    max-width: 100%;
    height: auto;
  }
  .wpb_single_image .vc_single_image-wrapper {
    line-height: 0;
  }
  .wpb_single_image .vc_figure {
    max-width: 100%;
  }
}
/*! CSS Used from: https://www.spotzer.com/wp-content/cache/busting/1/wp-content-themes-the7dtchild-dt-the7-child-style-5.5.0.1.css ; media=all */
@media all {
  .single-team-picture img {
    -webkit-box-shadow: 0px 11px 50px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 11px 50px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 11px 50px 0px rgba(0, 0, 0, 0.2);
    max-width: 290px;
    border: 5px solid #fff;
  }
  @media screen and (max-width: 800px) {
    .single-team-picture img {
      max-width: 200px;
    }
  }
  @media screen and (max-width: 750px) {
    .team-tabcontent .team-member-content .vc_col-sm-4 {
      order: 1;
    }
    .team-tabcontent .team-member-content .vc_col-sm-4 .wpb_single_image {
      margin-bottom: 30px;
    }
    .team-tabcontent .team-member-content .vc_col-sm-4 .wpb_single_image img {
      max-width: 200px;
    }
  }
}
</style>