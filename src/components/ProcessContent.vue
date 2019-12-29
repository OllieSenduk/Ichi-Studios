<template>
    <div class="row">
        <div class="col-md-6">
            <div class="working-progress-content">
                <span class="count-number wow spin animated" style="visibility: visible;"></span>
                <h2 class="section-title">{{title}}</h2>
                <p>{{content}}</p>
            </div>
            </div>
            <!-- .working-progress-images END -->
            <div class="col-md-6 hv-center-flex">
                <div class="working-progress-images" :id="imgContainer">
                </div>
            </div>
        </div>
</template>

             <!-- <div class="working-progress-content">
                <span class="count-number wow spin animated" style="visibility: visible;"></span>
                <h2 class="section-title">Reflect & Adjust</h2>
                <p>We work systematic integrate corporate responsibility in our core business and make our expertise available the benefit of the societies where we</p>
              </div> -->
              <!-- .working-progress-content END -->
            <!-- </div>
            <div class="col-md-6 hv-center-flex">
              <div class="working-progress-images"> -->
                <!-- <img src="assets/images/progress/progress-3.jpg" alt draggable="false" /> -->
              <!-- </div> -->
              <!-- .working-progress-images END -->

<script>
    import lottie from "lottie-web";

    export default {
        props: {
            title: {
                type: String,
                default: 'Research & Strategy'
            },
            content: {
                type: String,
                default: 'Whether a company is evolving or new to the industry, we work with businesses and organizations of all sizes to clarify their purpose, find their voice, understand their customers, and define their goals.'
            },
            imgUrl: {
                type: String,
                default: 'https://api.jsonbin.io/b/5e0902e0f9369177b27489cf'
            },
            imgContainer: {
                type: String
            }
        },
        mounted() {
            lottie.loadAnimation({
            container: document.getElementById(this.$props.imgContainer),
            renderer: "canvas",
            loop: true,
            autoplay: true,
            path: this.$props.imgUrl
            });
            lottie.setLocationHref();
        }
    };
</script>

<style lang="scss" scoped>

</style>