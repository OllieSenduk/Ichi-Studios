<template>
    <div class='name'>
        <span class="dot" ></span>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang='scss'>
  .dot {
    height: 100px;
    width: 100px;
    background-color: #FFB1A4;
    border-radius: 50%;
    position: absolute;
    position: absolute;
    z-index: 1;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, 0);
    -webkit-animation: growDot 6s forwards;
    -webkit-transform: scale(.01);
    -moz-transform: scale(.01);
    -ms-transform: scale(.01);
    transform: scale(.01);
    opacity: 0;
    display: inline-block;
  }

   @keyframes growDot {
     0% {transform: scale(0,0);opacity: 0;
    }
    30% {
      opacity: 0;
    }
     32% {
       opacity: 1;
       transform: scale(0.2,0.2);
       z-index: 1
     }
     35%{
       transform: scale(0.4,0.4);
     }
     80% {
       transform: scale(50,50);
       opacity: 1;
       z-index: 1;
     }
     90% {
       transform: scale(200,200);
       opacity: 1;
       z-index: 1;
     }
   }
</style>