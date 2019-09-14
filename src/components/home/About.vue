<template>
    <section class='home-about'>
        <div class="home-about__block-one">
            <div class="home-about__skills">
                Branding & Marketing
            </div>
        </div>
        <div class="home-about__block-two">
            <div class="home-about__skills">
                Website & App Development
            </div>
        </div>
        <div class="home-about__block-three">
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
        components: {
            appBtn: Button
        },
         data () {
            return {
            }
        },
        methods: {
        },
    }
</script>

<style lang='scss' scoped>

    .home-about {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 10vh 1fr 1fr 1fr;

        &__block-one {
            width: 40vw;
            height: 40vw;
            background: black;
            grid-row: 1/2;
            grid-column: 1/2;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__block-two {
            width: 40vw;
            height: 40vw;
            background: $pink;
            grid-row: 2/3;
            grid-column: 2/4;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__block-three {
            width: 40vw;
            height: 40vw;
            background: $red;
            grid-row: 4/5;
            grid-column: 1/2;
            display: flex;
            align-items: center;
            justify-content: center;
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