<template>
    <section class='navigation'>
        <div class="navigation__btn" @click="openNavigation">
            <span class="navigation__line-one"></span>
            <span class="navigation__line-two"></span>
        </div>

        <div class="navigation__page-wrapper">
            <div class="navigation__container">
                <ul class="navigation__list">
                        <li class="navigation__item header">Navigation</li>
                        <li class="navigation__item header"><p>01</p><a class="navigation__link" href="#">Home</a></li>
                        <li class="navigation__item header"><p>02</p><a class="navigation__link" href="#">Our Story</a></li>
                        <li class="navigation__item header"><p>03</p><a class="navigation__link" href="#">Work</a></li>
                        <li class="navigation__item header"><p>04</p><a class="navigation__link" href="#">Services</a></li>
                        <li class="navigation__item header"><p>05</p><a class="navigation__link" href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import { TimelineMax } from 'gsap'
    import  { mapMutations } from 'vuex'

    export default {
        data () {
            return {
                tlMax1: new TimelineMax({paused: true})
            }
        },
        methods: {
            openNavigation: function() {
                this.tlMax1.reversed(!this.tlMax1.reversed());
                this.$store.dispatch('updateNavStatus')
            },
        },
        mounted () {
            this.tlMax1.to(".navigation__page-wrapper", 0.3, {
                top: "0%",
                ease: Expo.easeInOut,
            })

            this.tlMax1.to('.navigation__line-one', 0.3, {
                y: 6,
                rotation: 45,
                ease: Expo.easeInOut,
            });
            this.tlMax1.to('.navigation__line-two', 0.3, {
                y: 6,
                rotation: -45,
                ease: Expo.easeInOut,
                delay: -0.3
            });

            this.tlMax1.staggerFrom(".navigation__item", 0.4, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);
            this.tlMax1.reverse();
        },
        // computed: {
        //     ...mapMutations([
        //         'CHANGE_NAV_STATUS'
        //     ]),
        // }
    }
</script>

<style lang='scss' scoped>

    .navigation {

        &__active {
        }
        
        &__btn {
            position: fixed;
            margin: 1.4rem;
            padding: 3rem;
            width: 40px;
            height: 1.2rem;
            right: 2rem;
            z-index: 101;
            cursor: pointer;
        }

        &__line-one {
            position: absolute;
            width: 40px;
            height: 2px;
            background: $pink;
            right: 0;
            z-index: 2;
        }

        &__line-two {
            position: absolute;
            width: 40px;
            height: 2px;
            background: $pink;
            right: 0;
            margin-top: 12px;
            z-index: 101;
        }

        &__page-wrapper {
            z-index: 100;
            position: absolute;
            background: $smooth-black;
            height: 100vh;
            width: 100%;
            top: -100%;
        }

        &__container {
            padding: 2rem 0 0 2rem;
            text-align: center;
            height: 100%;
        }

        &__list {
            list-style: none;
            display: flex;
            flex-direction: column; 
            justify-content: center;
        }

        &__item {
            text-align: left;
            margin-bottom: 20px;
            display: flex;
            transform: rotate(-10deg) skew(-10deg, 0);


            p {
                font-size: 1.5rem;
                display: block;
                margin-right: 21px;
                color: pink;
                padding-top: 20px;
            }

            @include mq(tablet) {
                width: 100%;
            }

            @include mq($from: laptop) {
                width: 60%;
            }

        }

        &__item:first-child {
            color: $pink;
            font-size: 2.4rem;
        }

        &__item:not(:first-child) {
            color: $navigation-text;
        }

        &__link {
            text-decoration: none;
            color: $navigation-text;
            font-size: 3rem;
            text-transform: uppercase;

            @include mq(largeMobile) {
                font-size: 5rem
            }

            @include mq(tablet, laptop) {
                font-size: 7rem;
            }

            @include mq($from: laptop) {
                font-size: 5rem;
            }

            @include mq($from: external) {
                font-size: 10rem;
            }
        }

    }

</style>