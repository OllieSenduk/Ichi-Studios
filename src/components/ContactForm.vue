<template>
  <section>
    <form action class="form">
      <input
        type="text"
        value="Email"
        onfocus="if (this.value=='Email') this.value='';"
        onblur="if (this.value=='') this.value='Email';"
        class="form__input"
      />
      <appButton title="Request Call" style="width: 100%;"></appButton>
    </form>
  </section>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    appButton: Button
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