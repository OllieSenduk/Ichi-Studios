<template>
    <div class='intro'>
        <div class="intro__container">
            <div class="piramide-text" v-if="textAnimation">
                <div class="top" >
                    O
                </div>
                <div class="middle" >
                    <span class="">L</span>L
                </div>
                <div class="bottom">
                    S<span class="">U</span>M
                </div>
            </div>
            <div class="logo-animation" v-else>
                <appLogoAnimationIntro></appLogoAnimationIntro>
            </div>
        </div>

    </div>
</template>

<script>
import { setTimeout } from 'timers';
import LogoAnimationIntro from '~/components/sections/intro/LogoIntroAnimation.vue'

    export default {
         components: {
            appLogoAnimationIntro: LogoAnimationIntro,
         },
          data() {
            return {
                textAnimation: true,
            }
        },
        mounted () {
            var self = this

            setTimeout(() => {
                var top = self.$el.querySelector(".top")
                top.style.visibility  = 'visible'
            }, 1)
            setTimeout(() => {
                var top = self.$el.querySelector(".top")
                top.style.visibility = 'hidden'

                var middle = self.$el.querySelector(".middle")
                middle.style.visibility = 'visible'
            }, 300)
            setTimeout(() => {
                var middle = self.$el.querySelector(".middle")
                middle.style.visibility = 'hidden'
                var bottom = self.$el.querySelector(".bottom")
                bottom.style.visibility = 'visible'
            },  600)
            setTimeout(() => {
                var top = self.$el.querySelector(".bottom")
                top.style.visibility = 'hidden'
                self.textAnimation = false
            }, 900)
        }
    }
</script>

<style lang='scss' scoped>

    .intro__container {
        height: 100vh;
        width: 100vw;
        background: black;
    }

    .piramide-text {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 6em;
        color: white;
    }

    .top {
        visibility: hidden;
    }

    .middle {
        visibility: hidden;
    }

    .bottom {
        visibility: hidden;
    }

    .logo-animation {
        display: flex;
         justify-content: center;
         align-items: center;
         height: 100%;
    }

</style>