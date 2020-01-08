<template>
  <section class="contact xs-section-padding">
    <div class="container">
      <div class="row">
        <div class="contact__wrapper">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="contact__text">
                <h3>Let's take action!</h3>
                <p>Plan a free (video) call & our trusted office penguin will set you up with our head of strategy.</p>
                <appContactForm></appContactForm>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="contact__image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "@/components/ContactForm";
export default {
  components: {
    appContactForm: ContactForm
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__wrapper {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 60px;
    width: 90vw;
  }

  &__text {
    padding: 40px 40px;

    p {
      color: $text-grey;
    }
  }

  &__image {
    background-image: url("https://i.imgur.com/21f8M8T.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
}
</style>