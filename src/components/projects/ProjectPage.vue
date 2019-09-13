<template>
    <section class="project__wrapper">
        <div class='project' :class='{project__hidden: hidden}'>
            <div class="project__details">
                <div class="project__description">{{text}}</div>
                <div class="project__title">{{title}}</div>
            </div>
            <div class="project__hero">
                <a href="">
                    <img class="project__hero__image-left" :src="imgLeft" :alt="title" :class="{ project__hero__disappear: navStatus }">
                    <img class="project__hero__image-right" :src="imgRight" :alt="title" :class="{ project__hero__disappear: navStatus }">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import  { mapState, mapGetters, mapMutations } from 'vuex'

    export default {
        props: ['id', 'title', 'imgRight', 'imgLeft', 'text', 'categories', 'background', 'hidden', 'pageNum'],
        data() {
            return {
                currentPageNum: 0
            }
        },
        computed: {
            ...mapState([
                'navOpen'
            ]),
            ...mapGetters([
                'navStatus'
            ])
        },
        mounted() {
            // this.$store.watch(
            //     (state, getters) => getters.navStatus,
            //     (updated, old) => {
            //         console.log(old)
            //     }
            // )
        },
        watch: {
            navOpen(newVal, oldVal) {
            }
        }
    }
</script>

<style lang='scss' scoped>

    // .ikea {
    //     position: absolute;
    //     bottom: 0%;
    //     left: 0%;
    //     width: 100%;
    //     opacity: 0;
    //     pointer-events: none;
    //     background: radial-gradient(rgb(72, 93, 161), rgba(11, 16, 35, 1));

    // }

    .project {
        font-family: $main-font;
        font-weight: $thin-text;
        color: white;
        // background: radial-gradient(rgba(43,55,96,1), rgba(11,16,35,1));
        // min-height: 90vh;
        // display: grid;
        // grid-template-columns: 5% 1fr 1fr 1fr 5%;
        // grid-template-rows: 20vh 50vh 10vh 20vh;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 5% 1fr 5%;
        grid-template-rows: 20% 2fr 1fr 10%;
        align-items: center;
        @include mq($from: laptop) {
            
        }

        &__hidden {
            position: absolute;
            bottom: 0%;
            left: 0%;
            width: 100%;
            opacity: 0;
            pointer-events: none;
        }
    
        &__hero {
            // overflow: hidden;
            // align-self: center;
            // display: flex;
            // grid-column: 2/2;
            // // align-self: end;
            // grid-row: 2/3;
            overflow: hidden;
            grid-column: 2/3;
            grid-row: 2/3;
            height: auto;
            align-self: center;
            justify-self: center;
            display: flex;

            img {
                height: 380px;
                transition: transform 0.3s ease-out;
                cursor: pointer;
            }

            a {
                display: flex;
            }

            &__image-right {
                transform: translate(0%, 10%);
            }

            &__image-left {
                transform: translate(0%, -10%);
            }

            &:hover &__image-right {
                transform: translate(0%, 0%);
            }
            
            &:hover &__image-left {
                transform: translate(0%, 0%)
            }

            &__disappear {
                // transform: translate(0%, -100%);
            }
        }

        &__details {
            // grid-column: 2/3;
            // // align-self: end;
            // grid-row: 4;
            // width: 100vw;
            grid-column: 1/3;
            align-self: end;
            grid-row: 3/4;
            text-align: center;
        }

        &__title {
            font-size: 1.9rem;
            font-weight: $bold-text;

            @include mq($from: tablet, $until: laptop) {
                font-size: 6rem;
            }
        }

        &__description {
            font-size: 2rem;

            @include mq($from: tablet, $until: laptop) {
                font-size: 6rem;
            }
        }
         
    }
</style>