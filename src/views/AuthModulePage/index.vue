<template>
  <forgotten-form v-if="showForgottenPassword" />

  <div class="wrapper" v-else>
    <ui-text-h1 class="black fw-500 center">My account</ui-text-h1>

    <div class="tab">
      <div
        class="tab__btn"
        :class="{ active: cuurentTab === 'Sign in' }"
        @click="toggleTab('Sign in')"
      >
        <ui-text-h3 class="black fw-400">Sign in</ui-text-h3>
      </div>

      <div
        class="tab__btn"
        :class="{ active: cuurentTab === 'Register' }"
        @click="toggleTab('Register')"
      >
        <ui-text-h3 class="black fw-400">Register</ui-text-h3>
      </div>
    </div>

    <component :is="showAuthComponents" />

    <div
      class="link"
      v-if="cuurentTab == 'Sign in'"
      @click="showForgottenPassword = true"
    >
      <ui-text-h4> Have you forgotten your password? </ui-text-h4>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import SingInForm from "./components/SingInForm.vue";
import RegistrationForm from "./components/RegistrationForm.vue";
import ForgottenForm from "./components/ForgottenForm.vue";

const cuurentTab = ref("Sign in");
const showForgottenPassword = ref(false);

function toggleTab(name) {
  switch (name) {
    case "Sign in":
      cuurentTab.value = name;
      break;

    case "Register":
      cuurentTab.value = name;
      break;
  }
}

const showAuthComponents = computed(() => {
  return cuurentTab.value == "Sign in" ? SingInForm : RegistrationForm;
});
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  margin-top: 128px;
  width: 500px;
}
.tab {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
  width: 100%;
  height: 60px;
  background: rgba(239, 239, 239, 1);
  border-radius: 10px;
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 100%;
    cursor: pointer;
  }
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  cursor: pointer;
}
.active {
  height: 50px;
  background: #fff;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.center {
  text-align: center;
}
</style>
