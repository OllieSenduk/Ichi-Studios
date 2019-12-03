<template>
  <section class="footer">
    <div class="element__wrapper footer__inner">
      <div class="footer__title">
        <h2>Coffee fuels brilliance!</h2>
        <p>
          So let's have one.
          Give us a shout whether you have any questions, want start a project or just to say hi!
        </p>
      </div>
      <div class="footer__body">
        <div class="footer__contact">
          <form action class="form">
            <label for="name">
              <input
                type="text"
                value="Name"
                onfocus="if (this.value=='Name') this.value='';"
                onblur="if  (this.value=='') this.value='Name'"
                class="form__input"
              />
            </label>
            <label for="email"></label>
            <input
              type="text"
              value="Email"
              onfocus="if (this.value=='Email') this.value='';"
              onblur="if (this.value=='') this.value='Email';"
              class="form__input"
            />
            <label for="body"></label>
            <textarea
              rows="6"
              class="form__textarea"
              onfocus="if (this.value=='Please write your message here!') this.value='';"
              onblur="if (this.value=='') this.value='Please write your message here!';"
            >Please write your message here!</textarea>
            <!-- <div class="btn btn" @click="fadeOutAbove">EXPLORE</div> -->

            <input type="submit" class="btn btn--small" />
          </form>
        </div>
        <div class="footer__social">
          <div class="social-buttons">
            <!-- <a
              href="#"
              class="social-buttons__button social-button social-button--facebook"
              aria-label="Facebook"
            >
              <span class="social-button__inner">
                <i class="fa fa-facebook"></i>
              </span>
            </a> -->
            <a
              href="#"
              class="social-buttons__button social-button social-button--linkedin"
              aria-label="LinkedIn"
            >
              <span class="social-button__inner">
                <i class="fa fa-linkedin"></i>
              </span>
            </a>
            <a
              href="https://www.instagram.com/ollsumcollective/"
              target="_blank"
              class="social-buttons__button social-button social-button--instagram"
              aria-label="instagram"
            >
              <span class="social-button__inner">
                <i class="fa fa-instagram"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="footer__location-information">
          <h2>Address</h2>
          <div class="footer__location-information__wrapper">
            <div class="city__wrapper">
              <div class="address-info__city">
                <p>Netherlands</p>
              </div>
              <div class="address-info__street">
                <p>Tweede Jan van der Heijdenstraat, 8</p>
              </div>
              <div class="address-info__">
                <p>1073VH Amsterdam</p>
              </div>
            </div>
            <div class="city__wrapper">
              <div class="address-info__city">
                <p>The UK</p>
              </div>
              <div class="address-info__street">
                <p>Somewhere</p>
              </div>
              <div class="address-info__">
                <p>1073VH London</p>
              </div>
            </div>
            <div class="city__wrapper">
              <div class="address-info__city">
                <p>Spain</p>
              </div>
              <div class="address-info__street">
                <p>Carrer de Joaquim Ruyra, 9-11</p>
              </div>
              <div class="address-info__">
                <p>08025 Barcelona</p>
              </div>
            </div>
          </div>All rights reserved @Ollsum Agency 2019
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["fixed"],
  components: {}
};
</script>

<style lang='scss' scoped>
$footer-margin-bottom: 30px;
$footer-margin-bottom-wide: 60px;

.footer {
  //   position: absolute;
  background: black;
  color: white;
  width: 100%;
  padding-bottom: 30px;

  @include mq($from: tablet) {
    height: 130rem;
  }

  @include mq($from: wide) {
    height: 100rem;
  }

  &__title {
    h2 {
      opacity: 0.6;
      font-size: 5rem;
      // position: absolute;
      text-transform: uppercase;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }

  .form {
    margin-bottom: $footer-margin-bottom;

    @include mq($from: wide) {
      margin-bottom: $footer-margin-bottom-wide;
    }
  }

  .form__input {
    background-image: none;
    border: 0;
    color: inherit;
    font: inherit;
    outline: 0;
    background-color: #3b4148;
    width: 100%;
    height: 49px;
    margin-bottom: 20px;
    z-index: 100;
  }

  .form__textarea {
    background-image: none;
    border: 0;
    color: inherit;
    font: inherit;
    outline: 0;
    background-color: #3b4148;
    margin-bottom: 20px;
    width: 100% !important;
  }

  input[type="submit"] {
    cursor: pointer;
  }

  .form__field {
    display: flex;
  }

  .footer__social {
    margin-bottom: $footer-margin-bottom;
    width: 100vw;

    @include mq($from: wide) {
      margin-bottom: $footer-margin-bottom-wide;
    }
  }

  // SOCIAL

  .social-buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: -10px;

    &__button {
      margin: 10px 5px 0;
    }

    @include mq($from: wide) {
      justify-content: center;
    }
  }

  $social-button-radius: 70px;
  $social-button-icon-size: 0.4;
  $social-button-background: #fff;
  $social-button-active-color: #fff;
  $social-button-transition-time: 0.3s;

  $social-button-colors: (
    "mail": #0072c6,
    "facebook": #3b5999,
    "linkedin": #0077b5,
    "github": #6e5494,
    "codepen": #212121,
    "steam": #7da10e,
    "snapchat": #eec900,
    "twitter": #55acee,
    "instagram": #e4405f,
    "npmjs": #c12127
  );

  .social-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    width: $social-button-radius;
    height: $social-button-radius;
    text-decoration: none;

    &__inner {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border-radius: 100%;
      background: $social-button-background;
      text-align: center;
    }

    i,
    svg {
      position: relative;
      z-index: 1;
      transition: $social-button-transition-time;
    }

    i {
      font-size: $social-button-radius * $social-button-icon-size;
    }

    svg {
      height: percentage($social-button-icon-size);
      width: percentage($social-button-icon-size);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      display: block;
      width: 0;
      height: 0;
      border-radius: 100%;
      transition: $social-button-transition-time;
    }

    &:focus,
    &:hover {
      color: $social-button-active-color;

      &::after {
        width: 100%;
        height: 100%;
        margin-left: -50%;
      }
    }

    @each $name, $color in $social-button-colors {
      &--#{$name} {
        color: $color;

        &::after {
          background: $color;
        }
      }
    }
  }

  .footer__location-information {
    h2 {
      margin-bottom: $footer-margin-bottom;
    }
    &__wrapper {
      .address-info__city {
        font-weight: 700;
      }
      @include mq($from: wide) {
        display: flex;
        justify-content: space-between;
        margin-bottom: $footer-margin-bottom-wide;
        margin-top: $footer-margin-bottom;
      }
      .city__wrapper {
      }
    }
  }
}
</style>