<template>
    <section class='navigation'>
        <div class="navigation__btn">
            <span class="navigation__line-one"></span>
            <span class="navigation__line-two"></span>
        </div>

        <div class="navigation__page-wrapper">
            <div class="navigation__container">
                <ul class="navigation__list">
                        <li class=navigation__item>Navigation</li>
                        <li class=navigation__item><a class="navigation__link" href="#">Home</a></li>
                        <li class=navigation__item><a class="navigation__link" href="#">Our Story</a></li>
                        <li class=navigation__item><a class="navigation__link" href="#">Services</a></li>
                        <li class=navigation__item><a class="navigation__link" href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    }
</script>

<style lang='scss' scoped>

    .navigation {

        &__button {
            position: fixed;
            margin: 1.4rem;
            padding: 1rem;
            width: 40px;
            height: 1.2rem;
            right: 0;
            z-index: 1;
        }

        &__line-one {
            position: absolute;
            width: 40px;
            height: 2px;
            background: $black;
            right: 0;
        }

        &__line-two {
            position: absolute;
            width: 40px;
            height: 2px;
            background: $black;
            right: 0;
            margin-top: 12px;
        }

        &__page-wrapper {
            z-index: 0;
            position: absolute;
            background: $smooth-black;
            height: 100vh;
            width: 100%;
            top: -100%;
        }

        &__container {
            padding: 8rem 0 0 2rem;
            text-align: left;
        }

        &__list {
            list-style: none;
        }

        &__item:first-child {
            color: $pink;
            font-size: 2.4rem;
        }

        &__item:not(:first-child) {
            color: $navigation-text
        }

        &__link {
            text-decoration: none;
            color: $navigation-text;
        }

    }

</style>