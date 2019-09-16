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
                <div class="home-container--animated">
                    <div class="home-container__wrapper">
                        <div class="home-container__stripes">
                            <div class="home-container__stripes__one"></div>
                            <div class="home-container__stripes__two"></div>
                            <div class="home-container__stripes__three"></div>
                        </div>
                        <div class="home-container__add">
                            <i class="fa fa-plus"></i>
                        </div>
                        <div class="home-header__intro-text">
                            <h1 class="home-header__title" :class="{revealText: !homePageClosed}">
                               <span>Ollsum Agency</span>
                            </h1>
                            <div class="home-header__text" :class="{revealText: !homePageClosed}" >
                               <span>Creative & Digital Superheroes that get things done</span>
                            </div>
                        </div>
                    </div>
                    <img src="https://i.imgur.com/9he5plI.png" alt="shapes">
                     <div class="home-video">

                    </div>
                    <div class="home-container__wrapper">
                        <ClientOnly>
                            <appAbout :animationTime="animationTime" :delayTime="delayTime" ></appAbout>
                        </ClientOnly>
                    </div>
                     
                </div>
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
                homePageClosed: true,
                animationTime: 1,
                delayTime: 1,
                colors: [
                    { left: "black", middle: "grey", right: "white" },
                    { left: "#45a247", middle: "#4c879b", right: "#4c879b" },
                    { left: "white", middle: "white", right: "white" },
                    { left: "#37ccfd", middle: "#b32fff", right: "#b32fff" }
                ]
                // navigationOpen: false,
                // tlMax1: new TimelineMax({paused: true})
            }
        },
        methods: {
            fadeOutAbove: function() {
                const context = this
                console.log(this.animationTime)
                TweenMax.to(".home-header__btn", this.animationTime * 0.7, {
                    y: -100,
                    opacity: 0
                });

                TweenMax.to(".home-header__screen", this.animationTime * 1.2, {
                    y: -400,
                    opacity: 0,
                    ease: Power2.easeInOut,
                    delay: context.delayTime 
                });

                TweenMax.from(".home-header__overlay", this.animationTime * 1.2, {
                    ease: Power2.easeInOut
                });

                TweenMax.to(".home-header__overlay", this.animationTime * 1.2, {
                    delay: context.delayTime,
                    top: "-110%",
                    ease: Expo.easeInOut
                });

                TweenMax.to(".home-header__overlay-2", this.animationTime * 1.2, {
                    delay: context.delayTime * 1.2,
                    top: "-110%",
                    ease: Expo.easeInOut,
                    onComplete: context.completedIntro

                });

                TweenMax.from(".home-container", this.animationTime * 1.2, {
                    delay: 1.4,
                    opacity: 0,
                    ease: Power2.easeInOut,
                });

                TweenMax.to(".home-container", this.animationTime * 1.2, {
                    opacity: 1,
                    y: -300,
                    delay: context.delayTime * 1.6,
                    ease: Power2.easeInOut,
                });  


                TweenMax.from(".home-container__add", this.animationTime * 1.2, {
                    delay: context.delayTime * 2.2,
                    opacity: 0,
                    x: 100,
                    rotation: 90,
                    ease: Expo.easeInOut
                });

                TweenMax.from(".home-container__stripes__one", this.animationTime * 1.2, {
                    height: 0,
                    delay: context.delayTime * 2.2,
                    ease: Power2.easeInOut
                })
                TweenMax.to(".home-container__stripes__one", this.animationTime * 1.2, {
                    height: '100%',
                    delay: context.delayTime * 2.4,
                    ease: Power2.easeInOut
                })

                TweenMax.from(".home-container__stripes__two", this.animationTime * 1.8, {
                    height: 0,
                    delay: context.delayTime * 2.8,
                    ease: Power2.easeInOut
                })
                TweenMax.to(".home-container__stripes__one", this.animationTime * 1.2, {
                    height: '100%',
                    delay: context.delayTime * 2.8,
                    ease: Power2.easeInOut
                })
            //  this.tlMax1.reversed(!this.tlMax1.reversed());
            },
            completedIntro() {
                this.homePageClosed = false
            }
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

    .home-container--animated {
        opacity: 1;
    }

    .home-video {
        width: 100vw;
        height: 60vh;
        background: black;
    }

    .hidden {
        display: none;
    }

    .home-container {
        width: 100%;
        margin: 0 auto;
        z-index: -1;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        overflow-x: hidden;
        transition: display 1s;


        &__wrapper {
            margin-left: 10%;
        }

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
            top: 15vh;
            right: 10px;
            padding: 10px 30px;
            opacity: 0.4;
            font-size: 3rem
        }
    }

    .home-header {
        cursor: crosshair;

        &__intro-text {
            width: 80%;
            height: 40vh;
            // margin-top: 10vh;
        }
        &__title {
            font-family: $main-font;
            font-size: $large-title;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 10px;
            top:10vh;
        }

        &__text {
            margin-top: 100px;
            text-align: left;
            font-weight: 400;
            font-size: 2.5rem;
            margin-bottom: 100px;
            top:20vh;

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

    .revealText {
        position: absolute;

        span {
            opacity: 0;
            animation: appear-text 0.0001s linear forwards;
            animation-delay: 1.4s;
        }

        &:after {
            content: '';
            top: 0;
            left: 0;
            position: absolute;
            width: 0%;
            height: 100%;
            background: $black;
            animation: revealText 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            animation-delay: 1s;
        }

        &.home-header__text {
            animation-delay: 2s;

            span {
                animation-delay: 2s;
            }

            &:after {
                background: $red;
                animation-delay: 1.4s;
            }
        }
    }



@keyframes revealText {

     0% {
          left: 0;
          width: 0%;
     }
     50% {
          left: 0;
          width: 100%;
     }
     100% {
          left: 100%;
          width: 0%;
     }

}

@keyframes appear-text {

     0% {
          opacity: 0;
     }
     100% {
          opacity: 1;
     }

}

</style>