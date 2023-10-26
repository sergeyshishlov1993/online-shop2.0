<template>
  <div class="wrapper__forgot">
    <ui-text-h1 class="black fw-500 center"
      >Have you Forgotten Your Password ?
    </ui-text-h1>

    <ui-text-h3 class="black fw-400 center mt-39"
      >If you've forgotten your password, enter your e-mail address and we'll
      send you an e-mail
    </ui-text-h3>

    <ui-form class="mt-126" @submit.prevent="forgottenPassword">
      <ui-input
        name="email"
        placeholder="Email"
        type="email"
        :value="email"
        @input="getInputValue"
        @focus="(event) => checkTouchInput(event, 'email')"
        @blur="(event) => removeFocus(event, 'email')"
      />

      <ui-error :text="errors.email.message" />

      <ui-button-black class="width-100">
        <ui-text-h4>RESET PASSWORD</ui-text-h4>
      </ui-button-black>
    </ui-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  errors,
  getMessageValidation,
  inputCheckField,
} from "@/utils/validations/validationAuth";

import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiError from "@/components/Block/UiComponents/UiError.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";

const email = ref("");

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

function getInputValue(event) {
  email.value = event.target.value;
  inputCheckField(email.value, "email");
}

function forgottenPassword() {
  if (email.value === "" || errors.email.message !== "") {
    inputCheckField("", "email");
  }
  //
  else {
    email.value = "";
  }
}
</script>

<style lang="scss" scoped>
.wrapper__forgot {
  margin: 0 auto;
  margin-top: 128px;
  width: 561px;
}
.mt-39 {
  margin-top: 39px;
}
.mt-126 {
  margin-top: 126px;
  width: 500px;
}
.width-100 {
  width: 100%;
  margin-top: 69px;
}
.center {
  text-align: center;
}
</style>
