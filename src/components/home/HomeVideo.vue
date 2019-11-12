<template>
  <!-- <clientOnly> -->

  <section class="video" @click="showVideo">
    <div class="parallax">
      <div class="video__body" @click="showVideo">
        <img src="https://i.imgur.com/tSo2pzd.png" alt="play" @click="openVideo" />
        <div class="video__text">Our latest event!</div>
      </div>
    </div>

    <!-- <clientOnly>
      <sweet-modal icon="warning" ref="modal">This is a warning!</sweet-modal>
    </clientOnly>-->
  </section>

  <!-- </clientOnly> -->
</template>

<script>
export default {
  data() {
    return {
      videoComponentOpen: false,
      backgroundGifs: [
        "http://giphygifs.s3.amazonaws.com/media/K9b2WiPZi0ZjO/giphy.gif",
        "https://i.imgur.com/gg8wQrw.gif"
      ]
    };
  },
  methods: {
    showVideo() {
      const context = this;
      if (window.innerWidth > 800) {
        context.createSwal(700, 500);
      } else {
        context.createSwal(400, 200);
      }
    },
    createSwal: function(width, height) {
      this.$swal({
        title: "Our Event",
        width: width + 50,
        height: height + 50,
        customClass: "swal__video-container",
        padding: "3em",
        background: "black",
        showCloseButton: true,

        backdrop: `
      rgba(0,0,123,0.4)
      url("${this.backgroundGif}")
      10% 96%
    `,
        html: `<iframe src="https://player.vimeo.com/video/342845069" width="${width}" height="${height}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
      });
    },
    playVideo: function() {
      // this.$refs.plyr.player.play();
    },
    submit: function() {
      //   console.log("JEE");
    }
  },
  computed: {
    player() {
      return this.$refs.plyr.player;
    },
    backgroundGif() {
      return this.backgroundGifs[
        Math.floor(Math.random() * this.backgroundGifs.length)
      ];
    }
  }
};
</script>

<style lang='scss'>
.video {
  width: 100%;
  height: 90vh;
  cursor: url("https://i.imgur.com/myKBLc1.png"), auto;

  //   background-repeat: no-repeat;
  //   background-position: center center;
  //   background-size: cover;
  //   background-attachment: fixed;

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    height: 100%;
    font-size: $small-title;
    z-index: 1;
  }

  &__text {
    font-size: $small-title;
  }
}

.parallax {
  background: url("https://i.imgur.com/sbFqFBS.gif") no-repeat top center fixed;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  height: 70vh;

  //   @include mq($from: mobile, $until: tablet) {
  //     height: 50vh;
  //   }

  top: 0;
  left: 0;

  min-width: 100%;
  min-height: 100%;
  position: relative;
}

.swal__video-container {
  height: 60vh;
}
</style>