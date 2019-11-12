<template lang="html">
  <section class="testimonials" id="testimonials">
    <div class="section__container testimonials__background">
      <div class="header testimonials__header">
        <div class="tagline tagline__black">
          <h1>TESTIMONIALS</h1>
        </div>
        <h2>
          LOVE
          <br>
          FOR
          <br>
          <span style="color: #fc3">STRAWBERRY</span>
        </h2>
        <hr class="tagline__underline tagline__underline_yellow tagline__underline">
        </hr>
        <div class="header__message line_height_text main_message">
          <p>
            We are blessed to have worked with some amazing individuals and companies.
            Here's what some had to say about working
            with our team members.
          </p>
        </div>
      </div>
    <div class="testimonial__wrapper">
      <div class="wrap">
        <p class="split">
        </p>
      </div>
    </div>
  </div>

  </section>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap";
import {SplitText} from "../lib/SplitText.min.js";


export default {

  data: function () {
    return {
      quotes: [
      	"“They understand what it means to run campaigns in todays world. Their creativity and ability to execute is amazing.”  <br><br>—  Jules de Blecourt",
      	"“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br><br>—  Mahatma Gandhi",
      	"“Tell me and I forget, teach me and I may remember, involve me and I learn.” <br><br>— Benjamin Franklin",
      	"“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”<br><br>— Richard Feynman",

      	"“It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.”  <br><br>—  Jacob Bronowski"
      ]
    };
  },
  methods: {
    quoteGenerator: function() {
      let counter = 0
      counter += 1
      var self = this

      var index = 0;
      var max = self.quotes.length - 1;
      var delay = .02;

      function random(min, max){
      	return (Math.random() * (max - min)) + min;
      }

      function cycleQuotes(arr, i, sel){
        var message = arr[i]
        var element = self.$el.querySelector('.split')
        element.innerHTML = message
        var split = new SplitText(element)
        var time = split.chars.length * delay;
        Array.from(split.chars).forEach(function(i) {

          	TweenMax.from(i, time, {
          		opacity: 0,
          		x: 0,
          		y: random(-200, 200),
          		z: random(500, 1000),
          		// scale: .1,
          		delay: i * delay,
          		yoyo: true,
          		repeat: -1,
          		repeatDelay: time * 4,
          		ease: Power1.easeOut
          	});
        })
        index = index == max ?  0 : (index + 1);
        setTimeout(function(){
          cycleQuotes(arr, index, ".split");
        }, ((time * 4) + (time * 4)) * 800);
      }

      cycleQuotes(self.quotes, index, ".split");
    }
  },
  mounted () {
      console.log(SplitText)
    this.quoteGenerator()
  },
}
</script>

<style lang="scss" scoped>

.testimonials {
	background: white;
	overflow: hidden;
	color: white;
	font-family: Open sans;
	max-width: 80vw;
  margin-bottom: 80px;
}

.testimonial__wrapper {
  width: 100%;
  margin: auto 0
}

.testimonials__header {

  h2 {
    color: $black;
  }

  p {
    color: $black;
  }
}

.testimonial__wrapper {
  p {
  	position: relative;
  	perspective: 500px;
  	top: 50%;
  	padding: 0 20px;
  	transform: translateY(-50%);
  	font-weight: 300;
  	color: black;
    font-family: TungstenNarrow-Semibold;
      /* letter-spacing: 3px; */
    font-weight: 500;
    font-size: 42px;
    line-height: 64px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-style: italic;
    color: black;
    margin-left: 3px;
    z-index: 1;
    word-spacing: 5px;
  	span {
  		opacity: 0;
  	}
  }
}

</style>
