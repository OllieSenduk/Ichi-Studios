<template>
    <section class="project__wrapper">
        <div class='project' :class='{project__hidden: hidden}'>
            <div class="project__title">{{title}}</div>
            <div class="project__details">
                <div class="project__description">{{text}}</div>
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

    .project {
        font-family: $main-font;
        font-weight: $thin-text;
        color: white;

        min-height: 100vh;
        display: grid;
        grid-template-columns: 5% 1fr 5%;
        grid-template-rows: 20% 3fr 1fr 10% 10%;
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
            grid-column: 1/3;
            align-self: end;
            grid-row: 3/4;
            text-align: center;
        }

        &__title {
            font-size: 2.5rem;
            font-weight: $bold-text;
            grid-row: 4/5;
            grid-column: 2/3;
            text-align: center;
            @include mq($from: tablet, $until: laptop) {
                font-size: 4rem;
            }
        }

        &__description {
            font-size: 2.4rem;
            margin-bottom: 8px;
            font-style: italic;

            @include mq($from: tablet, $until: laptop) {
                font-size: 4rem;
            }
        }
         
    }
</style>