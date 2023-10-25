<template>
  <div class="wrapper__forgot">
    <ui-text-h1 class="black fw-500 center"
      >Have you Forgotten Your Password ?
    </ui-text-h1>

    <ui-text-h3 class="black fw-400 center mt-39"
      >If you've forgotten your password, enter your e-mail address and we'll
      send you an e-mail
    </ui-text-h3>

    <ui-form class="mt-126">
      <ui-input name="email" placeholder="Email" />

      <ui-button-black class="width-100">
        <ui-text-h4>RESET PASSWORD</ui-text-h4>
      </ui-button-black>
    </ui-form>
  </div>
</template>

<script setup>
import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
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
