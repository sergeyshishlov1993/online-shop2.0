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
    <ui-error :text="errors.email.message" />

    <ui-input
      name="password"
      placeholder="Password"
      type="password"
      class="mt-46"
      :value="password"
      @input="(event) => getInputValue(event, 'password')"
      @focus="(event) => checkTouchInput(event, 'password')"
      @blur="(event) => removeFocus(event, 'password')"
    />
    <ui-error :text="errors.password.message" />

    <ui-input
      name="confirm password"
      placeholder="Confirm Password"
      type="password"
      class="mt-46"
      :value="confirmPassword"
      @input="(event) => getInputValue(event, 'confirm password')"
      @focus="(event) => checkTouchInput(event, 'confirmPassword')"
      @blur="(event) => removeFocus(event, 'confirmPassword')"
    />
    <ui-error :text="errors.confirmPassword.message" />

    <ui-button-black class="width-100">
      <ui-text-h4>REGISTER</ui-text-h4>
    </ui-button-black>
  </ui-form>
</template>

<script setup>
import { ref } from "vue";
import {
  errors,
  getMessageValidation,
  inputCheckField,
} from "@/utils/validations/validationAuth";

import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiError from "@/components/Block/UiComponents/UiError.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

function checkTouchInput(event, name) {
  if (errors[name].isDirty) {
    return errors[name].isDirty;
  } else {
    return (errors[name].isDirty = true);
  }
}

function removeFocus(event, name) {
  if (event.target.value) {
    inputCheckField(event.target.value, name);
  } else {
    getMessageValidation("required", name);
  }
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
      inputCheckField(confirmPassword.value, "confirmPassword");
      break;
  }
}

function registerUser() {
  if (
    (email.value === "" && password.value === "") ||
    //
    errors.email.message !== "" ||
    //
    errors.password.message !== "" ||
    //
    errors.confirmPassword.message !== ""
  ) {
    inputCheckField("", "email");
    inputCheckField("", "password");
    inputCheckField("", "confirmPassword", password.value);
  }
  //
  else if (confirmPassword.value != password.value) {
    getMessageValidation("match", "confirmPassword");
  }
  //
  else {
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
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
