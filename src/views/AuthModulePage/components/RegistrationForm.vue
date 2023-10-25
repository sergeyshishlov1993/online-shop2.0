<template>
  <ui-form class="mt-126" @submit.prevent="registerUser">
    <ui-input
      name="email"
      placeholder="Email"
      type="email"
      :value="email"
      @input="(event) => getInputValue(event, 'email')"
      @focus="(event) => checkTouchInput(event, 'email')"
      @blur="(event) => removeFocus(event, 'email')"
    />
    <ui-label for="email" :text="emailValidation" />

    <ui-input
      name="password"
      placeholder="Password"
      type="password"
      class="mt-46"
      :value="password"
      @input="(event) => getInputValue(event, 'password')"
      @focus="(event) => checkTouchInput(event, 'password')"
      @blur="removeFocus"
    />
    <ui-label for="email" :text="passwordValidation" />

    <ui-input
      name="confirm password"
      placeholder="Confirm Password"
      type="password"
      class="mt-46"
      :value="confirmPassword"
      @input="(event) => getInputValue(event, 'confirm password')"
      @focus="(event) => checkTouchInput(event, 'confirm password')"
      @blur="removeFocus"
    />
    <ui-label for="email" :text="confirmPasswordValidation" />

    <ui-button-black class="width-100">
      <ui-text-h4>REGISTER</ui-text-h4>
    </ui-button-black>
  </ui-form>
</template>

<script setup>
import { ref } from "vue";
import {
  inputCheckField,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
  isDirty,
  makeInputDirty,
  getMessageValidation,
} from "@/utils/validations/validationAuth";
import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiLabel from "@/components/Block/UiComponents/UiLabel.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

function checkTouchInput(event, name) {
  isDirty.value = true;
  makeInputDirty(name);
}

function removeFocus() {
  emailValidation.value = "";
}

function getInputValue(event, name) {
  switch (name) {
    case "email":
      email.value = event.target.value;
      inputCheckField(email.value, "email");
      break;

    case "password":
      password.value = event.target.value;
      inputCheckField(password.value, "password");
      break;

    case "confirm password":
      confirmPassword.value = event.target.value;
      inputCheckField(
        confirmPassword.value,
        "confirm password",
        password.value
      );
      break;
  }
}
function registerUser() {
  if (email.value && password.value && confirmPassword.value !== "") {
    console.log("login :", email.value, "password :", password.value);

    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  } else {
    inputCheckField(email.value, "email");
    inputCheckField(password.value, "password");
    inputCheckField(confirmPassword.value, "confirm password");
  }
}
</script>

<style lang="scss" scoped>
.mt-46 {
  margin-top: 46px;
}
.mt-126 {
  margin-top: 126px;
}
.width-100 {
  margin-top: 69px;
  width: 100%;
}
</style>
