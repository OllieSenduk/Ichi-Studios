<template>
    <section class='home-header'>
        <div class="home-header__container">
            <div class="home-header__overlay">

            </div>
            <div class="home-header__overlay-2">
                <p class="home-header__screen">OLLSUM</p>
                <div class="home-header-intro">
                    <div class="btn" @click="fadeOutAbove">EXPLORE</div>
                </div>
            </div>
            <div class="home-header__content">
                <h1 class="home-header__title">
                    Ollsum Agency
                </h1>
                <hr>
                <hr>
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
    export default {
         data () {
            return {
               
            }
        },
        methods: {
            fadeOutAbove: function() {
            //  this.tlMax1.reversed(!this.tlMax1.reversed());
            },
        },
        mounted () {
        }
    }
</script>

<style lang='scss'>

    .home-header {
        cursor: crosshair;
        background: url("https://i.imgur.com/W0Azr6g.jpg") no-repeat 50% 50%;
        width: 100vw;
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
    }

</style>