<template>
    <section class='home-header'>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="home-header__container">
            <div class="home-header__overlay">
                <p class="home-header__screen">OLLS<span class="home-header__screen--pink">U</span>M</p>
                <div class="home-header-intro">
                    <div class="btn home-header__btn" @click="fadeOutAbove">EXPLORE</div>
                </div>
            </div>
            <div class="home-header__overlay-2">
                
            </div>
            <div class="home-container" :class="{hidden: homePageClosed}">
                <div class="home-container__stripes">
                    <div class="home-container__stripes__one"></div>
                    <div class="home-container__stripes__two"></div>
                    <div class="home-container__stripes__three"></div>
                </div>
                <div class="home-container__add">
                    <i class="fa fa-plus"></i>
                </div>
                <h1 class="home-header__title">
                    Ollsum Agency
                </h1>
                <div class="home-header__text">
                    Young & Ambitious experts who get things done!
                </div>
                <appAbout />
            </div>
        </div>
    </section>
</template>

<script>
    import { TweenMax } from 'gsap';
    import About from '~/components/home/About';


    export default {
        components: {
            appAbout: About
        },
         data () {
            return {
                homePageClosed: true
                // navigationOpen: false,
                // tlMax1: new TimelineMax({paused: true})
            }
        },
        methods: {
            fadeOutAbove: function() {
                this.homePageClosed = false
                TweenMax.to(".home-header__btn", 1, {
                    y: -100,
                    opacity: 0
                });

                TweenMax.to(".home-header__screen", 2, {
                    y: -400,
                    opacity: 0,
                    ease: Power2.easeInOut,
                    delay: 1
                });

                TweenMax.from(".home-header__overlay", 2, {
                    ease: Power2.easeInOut
                });

                TweenMax.to(".home-header__overlay", 2, {
                    delay: 2.0,
                    top: "-110%",
                    ease: Expo.easeInOut
                });

                TweenMax.to(".home-header__overlay-2", 2, {
                    delay: 2.2,
                    top: "-110%",
                    ease: Expo.easeInOut
                });

                TweenMax.from(".home-container", 2, {
                    delay: 2.4,
                    opacity: 0,
                    ease: Power2.easeInOut
                });

                TweenMax.to(".home-container", 2, {
                    opacity: 1,
                    y: -300,
                    delay: 2.6,
                    ease: Power2.easeInOut
                });  
                TweenMax.from(".home-container__add", 2, {
                    delay: 4,
                    opacity: 0,
                    x: 100,
                    rotation: 90,
                    ease: Expo.easeInOut
                });
                TweenMax.from(".home-container__stripes__one", 2, {
                    height: 0,
                    delay: 4,
                    ease: Power2.easeInOut
                })
                TweenMax.to(".home-container__stripes__one", 2, {
                    height: '100%',
                    delay: 4.2,
                    ease: Power2.easeInOut
                })
            //  this.tlMax1.reversed(!this.tlMax1.reversed());
            },
        },
        mounted () {
            // this.tlMax1.to(".navigation__page-wrapper", 0.3, {
            //     top: "0%",
            //     ease: Expo.easeInOut,
            // })

            // this.tlMax1.to('.navigation__line-one', 0.3, {
            //     y: 6,
            //     rotation: 45,
            //     ease: Expo.easeInOut,
            // });
            // this.tlMax1.to('.navigation__line-two', 0.3, {
            //     y: 6,
            //     rotation: -45,
            //     ease: Expo.easeInOut,
            //     delay: -0.3
            // });

            // this.tlMax1.staggerFrom(".navigation__item", 0.4, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);
            // this.tlMax1.reverse();
        },
    }
</script>

<style lang='scss'>

    .hidden {
        display: none;
    }

    .home-container {
        width: 80%;
        margin: 0 auto;
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translate(0, -50%);

        &__stripes {
            &__one {
                position: fixed;
                width: 1px;
                height: 100%;
                background: rgba(0, 0, 0, 0.2);
                left: 25%;
            }

            &__two {
                position: fixed;
                width: 1px;
                height: 100vh;
                background: rgba(0, 0, 0, 0.2);
                left: 50%;
            }

            &__three {
                position: fixed;
                width: 1px;
                height: 100vh;
                background: rgba(0, 0, 0, 0.2);
                left: 75%;
            }
        }

        &__add {
            position: absolute;
            top: 20vh;
            right: 10px;
            padding: 10px 30px;
            opacity: 0.2;
            font-size: 2rem;
        }
    }

    .home-header {
        cursor: crosshair;

        &__title {
            font-family: $main-font;
            font-size: $large-title;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        &__text {
            margin-top: 0px;
            text-align: left;
            font-weight: 400;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        &__overlay-2 {
            z-index: 0;
            position: absolute;
            width: 100%;
            height: 100vh;
            background: #48A9A6;
        }

        &__overlay {
            z-index: 1;
            position: absolute;
            width: 100%;
            height: 100vh;
            background: #101010;
        }

        &__screen {
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translate(-50%, -50%);
            font-family: $main-font;
            color: #323232;
            font-size: 15rem;
            font-weight: 800;
            writing-mode: vertical-rl;
            opacity: 0.6;

            &--pink {
                color: $pink;
                animation: 1s appear ease-in;
            }

            @include mq($from: wide) {
                writing-mode: horizontal-tb;
                font-size: 30rem;
                top: 70%;
                left: 50%;
            }
        }

        // CREATE SEPERATE COMPONENT
        &__btn {
            font-family: $main-font;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }

        &__btn {
            display: block; 
            padding: 24px 48px;
            font-family: $main-font;
            font-size: 1.2rem;
            letter-spacing: 6px;
            color: $white;
            border: 2px solid $white;
            text-transform: uppercase;
            outline: none;
            overflow: hidden;
            background: none;
            z-index: 1;
            cursor: crosshair;
            transition: 0.6s ease-out;

            &:hover {
                color: $black;
                cursor: crosshair;
            }

            &:before {
                content: "";
                position: absolute;
                background: $white;
                bottom: 0;
                left: 0;
                right: 0;
                top: 100%;
                z-index: -1;
                transition: top 0.6s ease-out;
            }

            &:hover:before {
                top: 0;

            }
        }

        // ANIMATIONS
        @keyframes appear {
            0% {
                opacity: 0.1;
            }        
            100% {
                opacity: 0.6;
            }
        }
    }

</style>