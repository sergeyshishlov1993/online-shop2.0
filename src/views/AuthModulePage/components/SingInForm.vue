<template>
  <ui-form class="mt-126" @submit.prevent="logToYourPersonalAccount">
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
      :value="password"
      @input="(event) => getInputValue(event, 'password')"
      @focus="(event) => checkTouchInput(event, 'password')"
      @blur="(event) => removeFocus(event, 'password')"
      class="mt-46"
    />
    <ui-error :text="errors.password.message" />

    <div class="mt-15">
      <ui-input-check-box />
      <ui-text-h4 class="black fw-400 ml-8">Remember me </ui-text-h4>
    </div>

    <ui-button-black class="width-100">
      <ui-text-h4> SIGN IN </ui-text-h4>
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
import UiInputCheckBox from "@/components/Block/UiComponents/UiInputCheckBox.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const email = ref("");
const password = ref("");

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
  }
}
function logToYourPersonalAccount() {
  if (
    email.value == "" ||
    password.value == "" ||
    //
    errors.email.message !== "" ||
    errors.password.message !== ""
  ) {
    inputCheckField("", "email");
    inputCheckField("", "password");
  }
  //
  else {
    email.value = "";
    password.value = "";
  }
}
</script>

<style lang="scss" scoped>
.ml-8 {
  margin-left: 8px;
}
.mt-15 {
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.mt-46 {
  margin-top: 46px;
}

.mt-126 {
  margin-top: 126px;
}
.width-100 {
  width: 100%;
  margin-top: 69px;
}
label {
  color: darkred;
}
</style>
