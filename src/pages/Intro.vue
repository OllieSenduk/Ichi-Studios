<template>
    <div class='intro'>
        <div class="intro__container">
            <div class="piramide-text">
                <div class="piramide-text--first" >
                    I
                </div>
                <div class="piramide-text--second" >
                    C
                </div>
                <div class="piramide-text--third">
                    H
                </div>
                <div class="piramide-text--fourth">
                    I
                </div>
            </div>
            <div class="piramide-text--subtext">

            </div>
        </div>

    </div>
</template>

<script>
import { setTimeout } from 'timers';

    export default {
        components: {
        },
        data() {
            return {
                textAnimation: true,
            }
        },
           mounted () {
            var self = this

            setTimeout(() => {
                var first = self.$el.querySelector(".piramide-text--first")
                first.style.visibility  = 'visible'
            }, 1)
            setTimeout(() => {
                var first = self.$el.querySelector(".piramide-text--first")
                first.style.visibility = 'hidden'

                var second = self.$el.querySelector(".piramide-text--second")
                second.style.visibility = 'visible'
            }, 200)
            setTimeout(() => {
                var second = self.$el.querySelector(".piramide-text--second")
                second.style.visibility = 'hidden'
            },  400)
            setTimeout(() => {
                var third = self.$el.querySelector(".piramide-text--third")
                third.style.visibility = 'visible'
            }, 600)
            setTimeout(() => {
                var third = self.$el.querySelector(".piramide-text--third")
                third.style.visibility = 'hidden'
            }, 800)
               setTimeout(() => {
                var fourth = self.$el.querySelector(".piramide-text--fourth")
                fourth.style.visibility = 'visible'
            }, 1000)
               setTimeout(() => {
                var fourth = self.$el.querySelector(".piramide-text--fourth")
                fourth.style.visibility = 'hidden'
            }, 1200)
        }
    }
</script>

<style lang="scss" scoped>
    .intro {
        height: 100vh;
        width: 100vw;
        background: black;
        color: white;
        font-size: 20px;
    }
    .piramide-text {
        height: 100%;
        width: 100%;
        display: flex;
        font-size: 10rem;
        justify-content: space-around;
        align-items: center;

        &--first {
            visibility: hidden;

        }
        &--second {
            visibility: hidden;
        }
        &--third {
            visibility: hidden;
        }
        &--fourth {
            visibility: hidden;
        }
    }

</style>