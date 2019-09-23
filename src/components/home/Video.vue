<template id='video' class="video__container" :class="$mq">
  <div class="VideoBg" :class="$mq">
    <video loop autoplay muted ref="video" data-keepplaying :poster="backgroundImage">
      <source
        src="@/assets/videos/about-19.optimized..faststart.mp4"
        type="video/mp4"
        alt="background-video"
      />
    </video>

    <div class="VideoBg__content">
      <appButtonPrimary text="Watch our trailer!" btnColor="pink" v-on:click.native="openVideo"></appButtonPrimary>
    </div>
    <clientOnly>
      <vue-plyr ref="plyr" v-show="videoComponentOpen">
        <div class="plyr__video-embed">
          <iframe
            src="https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media"
            allowfullscreen
            allow="autoplay"
          ></iframe>
        </div>
      </vue-plyr>
    </clientOnly>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String
    },
    backgroundImage: {
      type: String
    }
  },
  data() {
    return {
      videoRatio: null,
      videoComponentOpen: false
    };
  },

  mounted() {
    this.setContainerHeight();

    if (this.videoCanPlay()) {
      this.$refs.video.oncanplay = () => {
        if (!this.$refs.video) return;

        this.videoRatio =
          this.$refs.video.videoWidth / this.$refs.video.videoHeight;
        this.setVideoSize();
        this.$refs.video.style.visibility = "visible";
      };
    }
    window.addEventListener("resize", this.resize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },

  methods: {
    handleVideoPlayer: function() {
      this.player.on("exitfullscreen", () => {
        this.player.pause();
        this.videoComponentOpen = false;
      });
    },
    resize: function() {
      // this.setContainerHeight()

      if (this.videoCanPlay()) {
        this.setContainerHeight();

        this.setVideoSize();
      }
    },
    videoCanPlay: function() {
      return !!this.$refs.video.canPlayType;
    },
    setContainerHeight: function() {
      this.$el.style.height = `${window.innerHeight}px`;
    },
    setVideoSize: function() {
      var width,
        height,
        containerRatio = this.$el.offsetWidth / this.$el.offsetHeight;

      if (containerRatio > this.videoRatio) {
        width = this.$el.offsetWidth;
      } else {
        height = this.$el.offsetHeight;
      }
      this.$refs.video.style.width = width ? `${width}px` : "auto";
      this.$refs.video.style.height = height ? `${height}px` : "auto";
    },
    getMediaType: function(src) {
      return "video/" + src.split(".").pop();
    },
    openVideo: function() {
      this.videoComponentOpen = true;
      if ((this.videoComponentOpen = true)) {
        this.$refs.plyr.player.fullscreen.enter();
        this.$refs.plyr.player.play();
      }
      this.handleVideoPlayer();
    }
  },
  computed: {
    player() {
      return this.$refs.plyr.player;
    }
  }
};
</script>

<style lang="scss" scoped>
.video__container {
  height: 140vh;
}

.VideoBg {
  background-image: url(https://cdn.goodlayers.com/infinite/homepages/landing/wp-content/uploads/sites/17/2019/03/landing-3-bg.jpg);
  position: relative;
  // background-size: cover;
  background-position: center;
  overflow: hidden;

  &.mobile {
    height: 100vh;
  }

  &.laptop {
    height: 100vh;
  }
}

.VideoBg__content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // padding: 20vh 0px 20vh 0px;
  // background-color: rgba(52, 72, 92, 0.7);
}

img {
  width: 200px;
  margin-top: 120px;
}
x .VideoBg video {
  position: absolute;
  top: 50%;
  left: 50%;
  visibility: hidden;
  transform: translate(-50%, -50%);
}

.VideoBg__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

