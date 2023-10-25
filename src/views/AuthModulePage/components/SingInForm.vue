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
    <ui-label for="email" :text="emailValidation" />

    <ui-input
      name="password"
      placeholder="Password"
      type="password"
      :value="password"
      @input="(event) => getInputValue(event, 'password')"
      @focus="(event) => checkTouchInput(event, 'password')"
      @blur="removeFocus"
      class="mt-46"
    />
    <ui-label for="email" :text="passwordValidation" />

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
  inputCheckField,
  emailValidation,
  passwordValidation,
  isDirty,
  makeInputDirty,
} from "@/utils/validations/validationAuth";
import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiLabel from "@/components/Block/UiComponents/UiLabel.vue";
import UiInputCheckBox from "@/components/Block/UiComponents/UiInputCheckBox.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const email = ref("");
const password = ref("");

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
  }
}
function logToYourPersonalAccount() {
  if (email.value && password.value !== "") {
    console.log("login :", email.value, "password :", password.value);
    email.value = "";
    password.value = "";
  } else {
    inputCheckField(email.value, "email");
    inputCheckField(password.value, "password");
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
