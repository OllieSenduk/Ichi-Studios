<template>
  <section>
    <form action="https://formspree.io/xzbdneva" method="POST" ref='form'>
      <input
        type="text"
        v-model='email'
        placeholder="Email"
        onfocus="if (this.value=='Email') this.value='';"
        onblur="if (this.value=='') this.value='Email';"
        class="form__input"
      />
      <div v-if='hasError'>
        <p>
          Please enter a valid email
        </p>
      </div>
      <appButton title="Request Call" style="width: 100%;" @clicked='submit'></appButton>
    </form>
  </section>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    appButton: Button
  },
  data() {
    return {
      email: null,
      hasError: false
    }
  },
  methods: {
    submit() {
      if (this.validate()) {
        this.$refs.form.submit()
      }
    },
    validate() {
      if (this.email && this.validateEmail()) {
        this.hasError = false;
        return true;
      }

      this.hasError = true;
      return false;
    },
    validateEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
}
input {
  box-sizing: border-box;
  resize: none;
  width: 100%;
  -webkit-appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.02);
  background-color: rgb(247, 247, 251);
  border-radius: 4px;
  font-family: apercu, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 400;
  padding: 15px;
  font-size: 16px;
  line-height: 150%;
  outline: none;
  pointer-events: auto;
  transition: border 0.2s ease-in-out 0s;
  color: grey;
}
</style>
