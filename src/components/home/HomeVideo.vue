<template>
  <!-- <clientOnly> -->

  <section class="video" @click="showVideo">
    <div class="parallax">
      <div class="video__body" @click="showVideo">
        <img src="https://i.imgur.com/tSo2pzd.png" alt="play" @click="openVideo" />
        <div class="video__text">Check out what we're all about!</div>
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
      videoComponentOpen: false
    };
  },
  methods: {
    showVideo() {
      console.log("Hi");
      // Use sweetalert2
      this.$swal({
        title: "Ollsum The Trailer",
        width: "400px",
        height: "400px",
        customClass: "swal__video-container",
        padding: "3em",
        background: "black",
        showCloseButton: true,

        backdrop: `
    rgba(0,0,123,0.4)
    url("http://giphygifs.s3.amazonaws.com/media/K9b2WiPZi0ZjO/giphy.gif")
    10% 96%
  `,
        html:
          '<iframe width="300px" height="300px" src="//www.youtube.com/embed/KVTJKm3qsnw?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=1" frameborder="0"  allow="autoplay" allowfullscreen></iframe>'
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