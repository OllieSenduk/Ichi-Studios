<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    
    
  </Layout>
</template>


<script>
    // import LogoAnimationIntro2 from '~/components/sections/intro/LogoIntroAnimation2.vue'
    // import LogoAnimationIntro3 from '~/components/sections/intro/LogoIntroAnimation3.vue'
    // import Dot from '~/components/sections/intro/Dot.vue'
    // import { setTimeout } from 'timers';

    export default {
        components: {
            // appLogoAnimationIntro2: LogoAnimationIntro2,
            // appLogoAnimationIntro3: LogoAnimationIntro3,
            // appDot: Dot,
         },
          data() {
            return {
             paper6: [
            {
                type: 'raster',
                src: 'assets/media/stock/shape--11.png',
                rotate: 0,
                mobile: {
                x: 100,
                y: -300,
                scale: 0.3
                },
                desktop: {
                x: 100,
                y: -400,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--14.png',
                rotate: 0,
                mobile: {
                x: -100,
                y: -350,
                scale: 0.1
                },
                desktop: {
                x: -445,
                y: -455,
                scale: 0.15
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--14.png',
                rotate: 0,
                mobile: {
                x: 300,
                y: -100,
                scale: 0.3
                },
                desktop: {
                x: 400,
                y: 50,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--13.png',
                rotate: 0,
                mobile: {
                x: -105,
                y: -360,
                scale: 0.2
                },
                desktop: {
                x: -450,
                y: -460,
                scale: 0.3
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--08.png',
                rotate: 0,
                mobile: {
                x: 255,
                y: -400,
                scale: 0.3
                },
                desktop: {
                x: 500,
                y: -500,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--13.png',
                rotate: 0,
                mobile: {
                x: 95,
                y: -310,
                scale: 0.3
                },
                desktop: {
                x: 90,
                y: -410,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--08.png',
                rotate: 190,
                mobile: {
                x: 295,
                y: -100,
                scale: 0.15
                },
                desktop: {
                x: 390,
                y: 30,
                scale: 0.2
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--09.png',
                rotate: 0,
                mobile: {
                x: -150,
                y: 100,
                scale: 0.1
                },
                desktop: {
                x: -450,
                y: 150,
                scale: 0.15
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--10.png',
                rotate: 0,
                mobile: {
                x: -145,
                y: 105,
                scale: 0.3
                },
                desktop: {
                x: -445,
                y: 155,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--11.png',
                rotate: 0,
                mobile: {
                x: -220,
                y: -170,
                scale: 0.2
                },
                desktop: {
                x: -600,
                y: -155,
                scale: 0.25
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--14.png',
                rotate: 0,
                mobile: {
                x: 120,
                y: 220,
                scale: 0.15
                },
                desktop: {
                x: 100,
                y: 250,
                scale: 0.2
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--12.png',
                rotate: 0,
                mobile: {
                x: -220,
                y: -170,
                scale: 0.35
                },
                desktop: {
                x: -600,
                y: -155,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--09.png',
                rotate: 0,
                mobile: {
                x: -70,
                y: 250,
                scale: 0.2
                },
                desktop: {
                x: -300,
                y: 320,
                scale: 0.25
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--15.png',
                rotate: 0,
                mobile: {
                x: 120,
                y: 220,
                scale: 0.35
                },
                desktop: {
                x: 100,
                y: 250,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--07.png',
                blendMode: 'multiply',
                rotate: 30,
                mobile: {
                x: -80,
                y: 140,
                scale: 0.3
                },
                desktop: {
                x: -80,
                y: 140,
                scale: 0.3
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--06.png',
                blendMode: 'multiply',
                rotate: 90,
                mobile: {
                x: -250,
                y: -350,
                scale: 0.3
                },
                desktop: {
                x: -250,
                y: -450,
                scale: 0.3
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--07.png',
                blendMode: 'multiply',
                rotate: 90,
                mobile: {
                x: -220,
                y: -170,
                scale: 0.4
                },
                desktop: {
                x: 420,
                y: -170,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--07.png',
                blendMode: 'multiply',
                rotate: 230,
                mobile: {
                x: -200,
                y: -50,
                scale: 0.4
                },
                desktop: {
                x: -380,
                y: 180,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--07.png',
                blendMode: 'multiply',
                rotate: 180,
                mobile: {
                x: -50,
                y: -290,
                scale: 0.3
                },
                desktop: {
                x: -520,
                y: -290,
                scale: 0.3
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--06.png',
                blendMode: 'multiply',
                rotate: 180,
                mobile: {
                x: 50,
                y: -200,
                scale: 0.4
                },
                desktop: {
                x: 300,
                y: -200,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--06.png',
                blendMode: 'multiply',
                rotate: 90,
                mobile: {
                x: 100,
                y: -100,
                scale: 0.3
                },
                desktop: {
                x: 500,
                y: -100,
                scale: 0.3
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--06.png',
                blendMode: 'multiply',
                rotate: 130,
                mobile: {
                x: -140,
                y: -330,
                scale: 0.3
                },
                desktop: {
                x: -120,
                y: -350,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--06.png',
                blendMode: 'multiply',
                rotate: -40,
                mobile: {
                x: 180,
                y: -250,
                scale: 0.4
                },
                desktop: {
                x: 220,
                y: -450,
                scale: 0.5
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--06.png',
                blendMode: 'multiply',
                rotate: 45,
                mobile: {
                x: -200,
                y: 200,
                scale: 0.4
                },
                desktop: {
                x: -200,
                y: 200,
                scale: 0.4
                }
            },
            {
                type: 'raster',
                src: 'assets/media/stock/shape--06.png',
                blendMode: 'multiply',
                rotate: 180,
                mobile: {
                x: 150,
                y: 50,
                scale: 0.3
                },
                desktop: {
                x: 150,
                y: 50,
                scale: 0.3
                }
            },
            ]
            }
        },
        mounted () {
            // var self = this
            // setTimeout(() => {
            //     self.$router.push("home")
            // }, 3000)

            // setTimeout(() => {
            //     var squareOne = self.$el.querySelector(".square-one")
            //     squareOne.style.display  = 'none'

            //     var squareTwo = self.$el.querySelector(".square-two")
            //     squareTwo.style.display  = 'block'
            // }, 200)
            // setTimeout(() => {
            //     var squareTwo = self.$el.querySelector(".square-two")
            //     var squareThree = self.$el.querySelector(".square-three")

            //     squareTwo.style.display  = 'none'
            //     squareThree.style.display  = 'block'
            // }, 400)
            // setTimeout(() => {
            //     var squareTwo = self.$el.querySelector(".square-two")
            //     var squareThree = self.$el.querySelector(".square-three")

            //     squareTwo.style.display  = 'none'
            //     squareThree.style.display  = 'block'
            // }, 600)
            // setTimeout(() => {
            //     var squareThree = self.$el.querySelector(".square-three")

            //     squareThree.style.display  = 'none'
            //     self.textAnimation = false
            // }, 800)
        }
    }
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
