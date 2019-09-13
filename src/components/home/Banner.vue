<template>
    <section class='home-header'>
        <div class="home-header__container">
            <div class="home-header__overlay">
                <p class="home-header__screen">OLLS<span class="home-header__screen--pink">U</span>M</p>
                <div class="home-header-intro">
                    <div class="btn home-header__btn" @click="fadeOutAbove">EXPLORE</div>
                </div>
            </div>
            <div class="home-header__overlay-2">
                
            </div>
            <div class="home-header__content">
                <h1 class="home-header__title">
                    Ollsum Agency
                </h1>
                <div class="home-header__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur eius libero excepturi laborum? Hic magni voluptatem asperiores iusto molestiae laborum harum dolorum, inventore aspernatur veniam quibusdam odit quam fugiat.
                    Nulla quis impedit quas culpa ratione dolore corrupti laudantium doloribus porro a, corporis repellat. Fugit aspernatur consequatur debitis animi ab repellendus est, beatae commodi cumque inventore molestias dolores dignissimos possimus?
                    Consectetur, eaque odit, in cupiditate architecto perferendis quod corporis voluptatem, laboriosam exercitationem obcaecati doloremque repellat fugit excepturi quaerat unde? Numquam ratione cupiditate commodi iste? Pariatur architecto saepe iste eveniet sit.
                    Aspernatur veniam reiciendis eos consectetur facere, numquam quas ad et ipsam dolor impedit, rem iste consequuntur possimus a obcaecati amet expedita, enim debitis nulla? Inventore laboriosam deleniti cumque iusto suscipit!
                    Iure aspernatur neque quaerat quibusdam quos possimus esse saepe inventore corporis! Obcaecati expedita sint sequi harum voluptatum. Odit inventore autem totam expedita, itaque, quasi suscipit velit voluptatem eum sit eveniet!
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { TweenMax } from 'gsap'

    export default {
         data () {
            return {
                // navigationOpen: false,
                // tlMax1: new TimelineMax({paused: true})
            }
        },
        methods: {
            fadeOutAbove: function() {
                TweenMax.to(".home-header__btn", 1, {
                    y: -100,
                    opacity: 0
                });

                TweenMax.to(".home-header__screen", 2, {
                    y: -400,
                    opacity: 0,
                    ease: Power2.easeInOut,
                    delay: 2
                });

                TweenMax.from(".home-header__overlay", 2, {
                    ease: Power2.easeInOut
                });

                TweenMax.to(".home-header__overlay", 2, {
                    delay: 2.6,
                    top: "-110%",
                    ease: Expo.easeInOut
                });

                TweenMax.to(".home-header__overlay-2", 2, {
                    delay: 3,
                    top: "-110%",
                    ease: Expo.easeInOut
                });

                TweenMax.from(".home-header__content", 2, {
                    delay: 3.2,
                    opacity: 0,
                    ease: Power2.easeInOut
                });

                TweenMax.to(".home-header__content", 2, {
                    opacity: 1,
                    y: -300,
                    delay: 3.2,
                    ease: Power2.easeInOut
                });
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

    .home-header {
        cursor: crosshair;
        height: 100vh;


        &__content {
            width: 60%;
            margin: 0 auto;
            z-index: -1;
            position: absolute;
            top: 60%;
            left: 10%;
            transform: translate(0, -50%);
        }

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
            left: 50%;
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

        // RESPONSIVENESS

    }

</style>