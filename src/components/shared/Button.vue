<template>
  <div class="btn-relaxed">
    <g-link :to="link" class="cta">
      <span>{{text}}</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </g-link>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import { mapMutations } from "vuex";

export default {
  props: {
    text: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: "rgba(#FFAB9D,.5);"
    },
    color: {
      type: String,
      default: "black"
    },
    link: {
      type: String,
      default: "/"
    }
  },
  data() {
    return {};
  },
  methods: {
    btnClicked() {}
  },
  computed: {
    btnStyle() {
      return {
        // "background-color": this.backgroundColor
      };
    }
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
.cta {
  position: relative;
  margin: auto;
  padding: 19px;
  transition: all 0.2s ease;
  color: black;
  text-decoration: none;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: rgba(#ffab9d, 0.5);
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  span {
    position: relative;
    font-size: $small-text;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    vertical-align: middle;

    @include mq($from: mobile, $until: tablet) {
      font-size: $small-text;
    }
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #ffab9d;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      width: 100%;
      background: rgba(#ffab9d, 1);
    }
  }
  svg {
    transform: translateX(0);
  }
  &:active {
    transform: scale(0.96);
  }
}
</style>