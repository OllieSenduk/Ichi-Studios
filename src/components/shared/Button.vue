<template>
    <div class="btn">
        <a href="#" class="cta">
            <span>{{text}}</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </a>
    </div>
</template>

<script>
    import { TimelineMax } from 'gsap'
    import  { mapMutations } from 'vuex'

    export default {
        props: {
            text: String
        },
        data () {
            return {
            }
        },
        methods: {
            btnClicked() {

            }
        },
        mounted () {
        }

    }
</script>

<style lang='scss' scoped>

.cta {
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all .2s ease;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: rgba(#FFAB9D,.5);
    width: 56px;
    height: 56px;
    transition: all .3s ease;
  }
  span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: .25em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #FFAB9D;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all .3s ease;
  }
  &:hover {
    &:before {
      width: 100%;
      background: rgba(#FFAB9D,1);
    }
  }
    svg {
      transform: translateX(0);
    }
  &:active {
    transform: scale(.96);
    }
}

    // .btn-primary {
    //     display: block; 
    //     padding: 24px 48px;
    //     font-family: $main-font;
    //     font-size: 1.2rem;
    //     letter-spacing: 6px;
    //     color: black;
    //     border: 2px solid black;
    //     text-transform: uppercase;
    //     outline: none;
    //     overflow: hidden;
    //     background: none;
    //     z-index: 1;
    //     cursor: crosshair;
    //     transition: 0.6s ease-out;
    //     font-family: $main-font;
    //     // position: absolute;
    //     // top: 50%;
    //     // left: 50%;
    //     // transform: translate(-50%, -50%)

    //      &:hover {
    //         color: $black;
    //         cursor: crosshair;
    //     }

    //     &:before {
    //         content: "";
    //         position: absolute;
    //         background: $black;
    //         bottom: 0;
    //         left: 0;
    //         right: 0;
    //         top: 100%;
    //         z-index: -1;
    //         transition: top 0.6s ease-out;
    //     }

    //     &:hover:before {
    //         top: 0;
    //     }
    // }

</style>