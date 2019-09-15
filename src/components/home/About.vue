<template>
    <section class='home-about'>
        <div class="home-about__block one hidden-opacity">
            <div class="home-about__skills">
                Branding & Marketing
            </div>
        </div>
        <div class="home-about__block two hidden-opacity">
            <div class="home-about__skills">
                Website & App Development
            </div>
        </div>
        <div class="home-about__block three hidden-opacity">
            <div class="home-about__skills">
                Growth & Stragegy
            </div>
        </div>
        <div class="home-about__btn">
            <appBtn text="About us"> </appBtn>
        </div>

        <!-- <div class="home-about__block-four">
            <div class="home-about__skills link">
                Click to read more About Us!
            </div>
        </div> -->
    </section>
</template>

<script>
    import { TweenMax } from 'gsap';

    import Button from '~/components/shared/Button'

    export default {
        props: [
            'animationTime',
            'delayTime'
        ],
        components: {
            appBtn: Button
        },
         data () {
            return {
            }
        },
        methods: {
            startPageAnimation: function() {

                const blockOne = document.querySelector('.home-about__block.one')
                const blockTwo = document.querySelector('.home-about__block.two')
                const blockThree = document.querySelector('.home-about__block.three')
                const blocks = [blockOne, blockTwo, blockThree]
                // const observerOptions = {
                //     root: document.querySelector('.home-about'),
                //     rootMargin: '0px',
                //     treshold: 0.2
                // }
                const tl = new TimelineMax({})
                const context = this
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry, index) =>{

                        if (entry.intersectionRatio === 1) {
                            console.log(entry.target.id, "is fully visible");
                        } else if (!entry.isIntersecting) {
                                    console.log(entry.target.classList, "has left the viewport")
                        } else if (entry.intersectionRatio > 0.5) {
                            let ratio = entry.intersectionRatio.toFixed(4);
                        console.log(entry.target.classList, "has started leaving the viewport (ratio "+ratio+")");
                                } else if (entry.intersectionRatio < 0.5) {
                        let ratio = entry.intersectionRatio.toFixed(4);
                        console.log(entry.target.classList, "has started entering the viewport (ratio "+ratio+")");
                                }
                        // console.log(entry.target)
                        // blocks[index].classList.remove('hidden-opacity')
                        if (entry.intersectionRatio > 0) {
                            TweenMax.to(entry.target, 2, {
                                x: 0,
                                opacity: 1,
                                ease: Power2.easeInOut,
                                delay: context.delayTime * 3,
                                // ease: Back.easeInOut.config(1.7)
                            });
                         }
                    })
                })
                blocks.forEach((block) => {
                    observer.observe(block)
                    // console.log(observer)

                })
            }
        },
        mounted() {
            this.startPageAnimation()
            // const tl = new TimelineMax({})
            // const controller = new VueScrollmagic
            // console.log("hoi")
            // console.log(tl)
            // this.startPageAnimation()
        }
    }
</script>

<style lang='scss' scoped>

    .hidden {
        display: none;
    }

    .home-about {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 10vh 1fr 1fr;

        &__block {
            width: 40vw;
            height: 40vw;
            display: flex;
            align-items: center;
            justify-content: center;
            
            &.one {
                background: black;
                grid-row: 1/2;
                grid-column: 1/2;
                transform: translateX(-20px)
            }

            &.two {
                background: $pink;
                grid-row: 2/3;
                grid-column: 2/4;
                transform: translateX(20px)
            }

            &.three {
                background: $red;
                grid-row: 4/5;
                grid-column: 1/2;
                transform: translateX(-20px)
            }
        }

        &__btn {
            grid-row: 4/5;
            align-self: end;
            width: 50vw;
            margin-bottom: 10vw;
        }

        // .home-header__btn {
        //     // width: 40vw;
        //     // height: 40vw;
        //     // // background: $red;
        //     // grid-row: 5/6;
        //     // grid-column: 2/2;
        //     // display: flex;
        //     // align-items: center;
        //     // background: $dark-yellow;
        //     // justify-content: center;
        //     // box-shadow: 0 15px 19px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        //     // transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        //     // &:hover {
        //     //     box-shadow: 0 18px 30px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        //     // }
        // }

        &__skills {
            font-size: 5vw;
            text-align: center;
            font-weight: 400;
            color: white;

            &.link {
                color: black;
            }
        }

        // ANIMATIONS 
 
    }
</style>